export const getComparison = async () => {
    const requestOptions = {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    };

    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/filter/comparisons",
        requestOptions
    );
    const data = await response.json();

    return data;
};


export const updateComparison = async (item_1_is_better, id) => {
    const requestOptions = {
        method: "PUT",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ item_1_is_better: item_1_is_better, id: id })
    };

    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/filter/comparisons",
        requestOptions
    );
    const data = await response.json();

    return data;
};


export const getUsers = async (page_number) => {
    const requestOptions = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        },
    };

    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/users?page_num="+encodeURIComponent(page_number),
        requestOptions
    );
    const data = await response.json();

    return data;
};


export const getKeys = async (page_number) => {
    const requestOptions = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        },
    };

    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/keys?page_num="+encodeURIComponent(page_number),
        requestOptions
    );
    const data = await response.json();

    return data;
};


export const createKey = async (key, is_admin) => {
    const requestOptions = {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ key: key, is_admin: is_admin })
    };

    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/keys",
        requestOptions
    );
    const data = await response.json();

    return data;
};


export const getUser = async (user_id) => {
    const requestOptions = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        },
    };

    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/users?user_id="+encodeURIComponent(user_id),
        requestOptions
    );
    const data = await response.json();

    return data;
};


export const getComparisons = async (page_number) => {
    const requestOptions = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        },
    };

    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/filter/comparisons?page_num="+encodeURIComponent(page_number),
        requestOptions
    );
    const data = await response.json();

    return data;
};


export const registerUser = async (email, password, name, is_admin, is_active) => {
    const requestOptions = {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
            email: email,
            password: password,
            first_name: name,
            is_admin: is_admin,
            is_active: is_active,
            created_by_userid: "b"
        })
    };
    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/users",
        requestOptions
    );

    console.log(requestOptions)

    const data = await response.json();

    if (data.message != "success" && response) {
        return data;
    }

    return data;
};


export const updateUser = async (id, name, is_admin, is_active) => {
    const requestOptions = {
        method: "PUT",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
            first_name: name, 
            is_admin: is_admin, 
            is_active: is_active
        })
    };
    const response = await fetch(
        "http://vm.eleuther.ai:8888/api/v1/users/"+encodeURIComponent(id),
        requestOptions
    );

    console.log(requestOptions)

    const data = await response.json();

    if (data.message != "success" && response) {
        return data;
    }

    return data;
};
