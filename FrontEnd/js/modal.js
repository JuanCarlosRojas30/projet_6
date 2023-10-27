//affichage works modal
const modalWorks = document.querySelector(".modalWorks");


const displayWorksModal = () => 
{
    modalWorks.innerHTML = "";
    
     worksData.forEach((work,i) => {
    modalWorks.innerHTML += `
        <div>
            <img src="${work.imageUrl}" alt="${work.title}">
            <span><i class="fa fa-trash"></i></span> 
        </div>`
        if (i === worksData.length-1) {

            const suppBtns = document.getElementsByClassName(`fa-trash`);
    
            for (let j = 0; j < suppBtns.length; j++){
                suppBtns[j].addEventListener("click", () =>  {
                    alert(j)
                });
            }
        } 
    } )
} 
