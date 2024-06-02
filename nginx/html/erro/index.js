let toggleButton = document.getElementById("toggle");
let menuPage = document.getElementById("menu-page");

toggleButton.addEventListener("click", function () {
    if (menuPage.classList.contains("active")) {
        menuPage.classList.remove("active");
        toggleButton.classList.remove("active");
    } else {
        menuPage.classList.add("active");
        toggleButton.classList.add("active");
    }
});

/* início ----- caixa de imagem (Excluir esta seção) ----- */
let mainImage = document.getElementById("big_image");
let thumbnails = document.getElementsByClassName("small_image");

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", changeImage);
}

function changeImage() {
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }
    this.classList.add("active");
    mainImage.src = this.src;
    mainImage.style.maxWidth = this.style.maxWidth;
}
/* ----- caixa de imagem (Excluir esta seção) ----- fim */
