const btnEnvoyer = document.getElementById('btnEnvoyer');

btnEnvoyer.addEventListener('click', (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value


    fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        email:email,
        password: password,
        })

    })
        .then((response) => response.json()) 
        .then((response) => {
           console.log(response);
           if (response.userId) {
                localStorage.setItem("info", JSON.stringify(response));
                document.location.href = "/";
           } else if (response.message) {
                alert ("Utilisateur non trouvé");
           } else {
                alert("Mot de passe invalide");
           }
           })
           .catch(function (err){
            console.log(err);
            alert("Veuillez nos excuser Erreur System");
           })
        })