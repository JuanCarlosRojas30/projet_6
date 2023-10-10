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

    gallery.innerHTML = "";
    
    worksData.forEach(work => {

    if(currentCat===work.categoryId || currentCat===0)
        gallery.innerHTML += `
        <figure>
        <img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}</figcaption>
        </figure>`
    } )
} 

//affichage categories
const displayFiltres = () => 
{
    filters.innerHTML = "<button class='filter__btn filter__btn--active'>Tous</button>";
    categoryData.forEach((category, i) => {
        filters.innerHTML += `<button class="filter__btn">${category.name}</button>`;
    
    if (i === categoryData.length-1) {

        const filtresBtn = document.getElementsByClassName(`filter__btn`);

        for (let i = 0; i < filtresBtn.length; i++){
            filtresBtn[i].addEventListener("click", () =>  {
                currentCat = i;
                displayWorks();
            });
        }
    }    
    } )
} 

getWorks();
getCategory();
