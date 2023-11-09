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


