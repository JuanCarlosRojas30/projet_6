let worksData = [];
let categoryData = [];


const gallery = document.querySelector(".gallery");
let filters = document.querySelector(".filters");

let currentCat = 0;


// get works
const getWorks = () => {

    fetch("http://localhost:5678/api/works")
    .then((res) => res.json()) 
    .then((data) => {
        worksData = data;
        console.log(worksData);
        displayWorks();


})
.catch((err) => console.log(err, "fetch error"));
}


// get category
const getCategory = () => {
    fetch("http://localhost:5678/api/categories")
    .then((res) => res.json()) 
    .then((data) => {
        categoryData = data;
        //console.log(worksData);
        displayFiltres(); 

})
.catch((err) => console.log(err, "fetch error"));
}



//affichage works
const displayWorks = () => 
{

    gallery.innerHTML += "";
    
    worksData.forEach(work => {

    if(currentCat===work.categoryId )
        gallery.innerHTML += `
        <figure>
        <img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}</figcaption>
        </figure>`
    } )
} 

//affichage categories
const displayFiltres = () => {
    categoryData.forEach(category => {
        filters.innerHTML += `<button class="filter__btn">${category.name}</button>`

    } )
} 

getWorks();
getCategory();
