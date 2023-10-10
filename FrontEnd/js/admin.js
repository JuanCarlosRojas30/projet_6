const logoutBtn = document.getElementById('logout');
const logInBtn = document.getElementById('login');

logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    document.location.href = "./login.html";
})

const isLoged = () => {

    rep = localStorage.getItem('info') ? true : false
    if (rep === true) {
        logInBtn.style.display = 'none';
        logoutBtn.style.display = 'inline';
    }
    else 
    {
        logInBtn.style.display = 'inline';
        logoutBtn.style.display = 'none'
    }

}

isLoged();