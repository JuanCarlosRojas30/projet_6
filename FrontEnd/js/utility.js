// get works
const getWorks = () => {

    fetch("http://localhost:5678/api/works")
    .then((res) => res.json()) 
    .then((data) => {
        worksData = data;
        console.log(worksData);
        displayWorks();
        displayWorksModal()

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

    const Btns = filters.children
    for(let i=0;i<Btns.length;i++){        
        Btns[i].classList.remove('filter__btn--active')// retir la class active a tous les boutton

        if(i===currentCat) 
        {Btns[i].classList.add('filter__btn--active')} // ajoute la class active au button choisi
    }


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

//affichage works modal
const modalWorks = document.querySelector(".modalWorks");

const modalSwitcher = (value) =>  { 
    if(value === 1){
        modalGallery.style.display = "block";
        modalInput.style.display = "none";
    }
    else {
        modalGallery.style.display = "none";
        modalInput.style.display = "block";
    }

}

//modal fonctions


const displayWorksModal = () => 
{
    modalWorks.innerHTML = "";
    
     worksData.forEach((work,i) => {
    modalWorks.innerHTML += `
        <div>
            <img src="${work.imageUrl}" alt="${work.title}">
            <span><i class="fa fa-trash" data-id="${work.id}"></i></span> 
        </div>`
        if (i === worksData.length-1) {

            const suppBtns = document.getElementsByClassName(`fa-trash`);
    
            for (let j = 0; j < suppBtns.length; j++){
                suppBtns[j].addEventListener("click", () =>  {
                    //alert(suppBtns[j].getAttribute("data-id"))
                    const id = suppBtns[j].getAttribute("data-id");
                    if (confirm("Êtes-vous sûr de vouloir supprimer le contenu ?") === true) {
                        supprimeWork(id)
                    }
                });
            }
        } 
    } )
} 

const supprimeWork = (id) => {
    fetch("http://localhost:5678/api/works/" + id,{
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("info")).token, 
        },
    })
    .then((response) => {
        // console.log(response);
        getWorks();
    })
    .catch((err) => console.log(err, "fetch error"));
};

const ActiveBtn = () => {
    if(FormTitre.value==="" || FormCategorie.value==="0" || FormPhoto.files.length===0) {
        ValiderBtn.classList.add("ValidBtndeActived")
        ValiderBtn.setAttribute("disabled", "");
    }
    else {
        ValiderBtn.classList.remove("ValidBtndeActived")
        ValiderBtn.removeAttribute("disabled");


    }

}

const AddWork = async () => {

    const Title = FormTitre.value;
    const Categorie = FormCategorie.value;
    const Photo = FormPhoto.files[0];

    const formData = new FormData();

    formData.append("image", Photo);
    formData.append("title", Title);
    formData.append("category", Categorie);

    let response = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Authorization" : "Bearer " + JSON.parse(localStorage.getItem("info")).token, 
        },
        body: formData,
    });

        // Condition si on réussi à rajouter l'image

        if (response.status === 200 || 201) {
            getWorks();
    
            document.getElementById("modaleProjetForm").reset();
    
            ActiveBtn();
            modalSwitcher(1);
    
            alert("L'ajout de l'image a été réalisé avec succès");
    
         } else if (response.status === 401 || 400) {
            alert("Veuillez ajouter un titre ou image");
            console.log("Action impossible");
        }
}