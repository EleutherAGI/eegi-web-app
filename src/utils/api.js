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
