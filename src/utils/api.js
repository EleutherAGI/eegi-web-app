export const getComparison = async () => {
    const requestOptions = {
        method: 'POST',
        headers: {
            "accept": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    };

    console.log(localStorage.getItem('token'));

    const response = await fetch('http://localhost:8000/api/v1/filter/comparisons', requestOptions);
    const data = await response.json();

    console.log(data);
    return data;
};
