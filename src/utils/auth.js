import decodeJwt from 'jwt-decode';


export const isAuthenticated = () => {
    const sub = localStorage.getItem('user');
    console.log(sub);
    if (!sub) {
        return false;
    }
    return true;
};

export const signIn = async (email, password) => {
    // Assert email or password is not empty
    if (!(email.length > 0) || !(password.length > 0)) {
        throw new Error('Email or password was not provided');
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password})
    };
    const response = await fetch('http://localhost:8000/api/v1/login', requestOptions);
    const data = await response.json();

    console.log(data);

    if ('access_token' in data) {
        const decodedToken = decodeJwt(data['access_token']);
        localStorage.setItem('token', data['access_token']);
        localStorage.setItem('user', decodedToken.sub);

        // TODO add admin check for admin console
        // involves changing JWT in backend

    }
    return data;
};

export const signUp = async (email, password, name, key) => {
    // Assert email or password or password confirmation is not empty
    if (!(email.length > 0)) {
        throw new Error('Email was not provided');
    }
    if (!(password.length > 0)) {
        throw new Error('Password was not provided');
    }
    if (!(name.length > 0)) {
        throw new Error('Name was not provided');
    }
    if (!(key.length > 0)) {
        throw new Error('key was not provided');
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password, first_name: name, key: key})
    };
    const response = await fetch('http://localhost:8000/api/v1/key_signup', requestOptions);

    const data = await response.json();

    if(data.message != 'success' && response){
        return data;
    }

    return data;
};
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
};