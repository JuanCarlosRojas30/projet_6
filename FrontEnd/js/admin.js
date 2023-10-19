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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

