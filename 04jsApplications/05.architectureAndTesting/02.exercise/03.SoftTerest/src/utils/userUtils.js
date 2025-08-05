function setUser(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

function getUser() {
    return JSON.parse(sessionStorage.getItem("userData"));
}

function getUserID() {
    const userData = getUser();
    return userData._id;
}

function clear() {
    sessionStorage.removeItem("userData");
}

export const userUtils = {
    getUser,
    setUser,
    getUserID,
    clear
}