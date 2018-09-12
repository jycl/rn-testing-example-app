const getUser = async (user) => {
    let request = `https://api.github.com/users/${user}`; //new Request(
    let options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };
    let response = await fetch(request, options);
    if(response.ok && response.json) {
        return response.json();
    } else {
        return null;
    }
};

export {
    getUser
}