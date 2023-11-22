
modalSwitcher(1); // 1 liste 2 pour afficher le formularie

goToAddPhoto = document.getElementById("goToAddPhoto");
goToAddPhoto.addEventListener("click", () => modalSwitcher(2))

backToGallery= document.getElementById("backToGallery");
backToGallery.addEventListener("click", () => modalSwitcher(1))


FormTitre = document.getElementById("FormTitre");
FormTitre.addEventListener("change", () => ActiveBtn())

FormCategorie = document.getElementById("FormCategorie");
FormCategorie.addEventListener("change", () => ActiveBtn())

FormPhoto= document.getElementById("FormPhoto");
FormPhoto.addEventListener("change", () => ActiveBtn())


ValiderBtn = document.getElementById("ValiderBtn");
ValiderBtn.addEventListener("click", () => AddWork())