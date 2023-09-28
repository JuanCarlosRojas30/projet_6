let worksData = [];

const gallery = document.querySelector(".gallery");


fetch("http://localhost:5678/api/works") // demande des donnes de backend
.then((res) => res.json()) // on convert en json
.then((data) => {

    worksData = data;
    console.log(worksData);
    displayWorks;

}) 

.catch((err) => console.log(err, "fetch error"));

const displayWorks = () => {
    gallery.innerHTML = `
    <figure>
    <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
    <figcaption>Abajour Tahina</figcaption>
    </figure>`

} 



