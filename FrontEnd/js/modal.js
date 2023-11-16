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
                    if (confirm("Press a button!") === true) {
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

modalSwitcher(1);

goToAddPhoto = document.getElementById("goToAddPhoto");

goToAddPhoto.addEventListener("click", () =>  {
modalSwitcher(2);
})

backToGallery= document.getElementById("backToGallery");

backToGallery.addEventListener("click", () => {
    modalSwitcher(1);
})


FormTitre = document.getElementById("FormTitre");

FormTitre.addEventListener("change", () => {
    ActiveBtn();
})

FormCategorie = document.getElementById("FormCategorie");

FormCategorie.addEventListener("change", () => {
    ActiveBtn();
})

FormPhoto= document.getElementById("FormPhoto");

FormPhoto.addEventListener("change", () => {
    ActiveBtn();
})

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

ValiderBtn = document.getElementsById("ValiderBtn");
ValiderBtn.addEventListener("click", () => {

    const Title = FormTitle.value;
    const Categorie = FormCategorie.value;
    const Photo = FormPhoto.files[0];

    const formData = new formData();

    formData.append("image", Photo);
    formData.append("title", Title);
    formData.append("category", Categorie);
})