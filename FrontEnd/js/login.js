const btnEnvoyer = document.getElementById(''btnEnvoyer);

btnEnvoyer.addEventListener('click', (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    }

    fetch("http://localhost:5678/api/users/login", {}
    .then((res) => res.json()) 
    .then((data) => {
        worksData = data;
        console.log(worksData);
        displayWorks();



)