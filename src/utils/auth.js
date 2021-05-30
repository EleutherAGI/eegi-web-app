import decodeJwt from "jwt-decode";

export const checkIfAuthenticated = () => {
    const sub = localStorage.getItem("user");
    if (!sub) {
        return false;
    }
    return true;
};

export const checkIfAdmin = () => {
    const sub = localStorage.getItem("user");
    const admin = localStorage.getItem("permission");
    if (!sub && !admin) {
        return false;
    }
    return true;
};

export const signIn = async (email, password) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password })
    };
    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/login",
        requestOptions
    );
    const data = await response.json();

    if ("access_token" in data) {
        const decodedToken = decodeJwt(data["access_token"]);
        localStorage.setItem("token", data["access_token"]);
        localStorage.setItem("user", decodedToken.sub);
        localStorage.setItem("permission", decodedToken.perm);

        // TODO add admin check for admin console
        // involves changing JWT in backend
    }
    return data;
};

export const signUp = async (email, password, name, key) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            password: password,
            first_name: name,
            key: key
        })
    };
    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/key_signup",
        requestOptions
    );

    const data = await response.json();

    if (data.message != "success" && response) {
        return data;
    }

    return data;
};
export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("permission");
};
