const logoutBtn = document.getElementById('logout');
const logInBtn = document.getElementById('login');
const adminBar = document.getElementById('adminBar');
const btnEdition = document.getElementById('btnEdition');
const myBtn = document.getElementById('myBtn');


logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    document.location.href = "./login.html";
})

const isLoged = () => {

    rep = localStorage.getItem('info') ? true : false
    if (rep === true) {
        logInBtn.style.display = 'none';
        logoutBtn.style.display = 'inline';
        adminBar.style.display = 'flex';
        filters.style.display = 'none';
        myBtn.style.display = 'inline'

    }
    else 
    {
        logInBtn.style.display = 'inline';
        logoutBtn.style.display = 'none';        
        adminBar.style.display = 'none';
        filters.style.display = 'flex';
        myBtn.style.display = 'none'



    }

}

isLoged();


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


