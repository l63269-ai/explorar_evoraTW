
const users = [
    { username: "agente", password: "12345", agent_id: 101 },
    { username: "user", password: "123"}
];

// 2. Funções para trabalhar com cookies
function setCookie(username) {
    document.cookie = `user=${username}; path=/`;
}

function isAgent(username){
    const user = users.find(u => u.username === username)
    const agentID = user?.agent_id;
    return agentID;

}

function getCookie() {
    return document.cookie.replace("user=", "");
}


function deleteCookie() {
    document.cookie = "user=; path=/; max-age=0";
}

// 3. Funções de sessão (é só isto que as páginas usam)
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return false;
    setCookie(user.username);
    return true;
}

function getUser() {
    return users.find(u => u.username === getCookie());   // undefined if not logged in
}

function logout() {
    deleteCookie("user");
}

function requireLogin() {
    if (!getUser()) {
        window.location.href = "login.html";
    }
}