let toggleButton = document.getElementById("toggle");
let menuItem = document.getElementById("menu-page");

toggleButton.addEventListener("click", function () {
    if (menuItem.classList.contains("active")) {
        menuItem.classList.remove("active");
        toggleButton.classList.remove("active");
    } else {
        menuItem.classList.add("active");
        toggleButton.classList.add("active");
    }
});

/* início ----- caixa de imagem (Excluir esta seção) ----- */
let mainImage = document.getElementById("big_image");
let smallImages = document.getElementsByClassName("small_image");

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].addEventListener("click", switchImage);
}

function switchImage() {
    for (let i = 0; i < smallImages.length; i++) {
        smallImages[i].classList.remove("active");
    }
    this.classList.add("active");
    mainImage.src = this.src;
    mainImage.style.maxWidth = this.style.maxWidth;
}
/* ----- caixa de imagem (Excluir esta seção) ----- fim */
