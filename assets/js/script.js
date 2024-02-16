function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    //pegar a tag img

    const img = document.querySelector(".profile img")

    // substituir a img
    if(html.classList.contains("light")) {
        // se tiver light mode, adicionar imagem light
        img.setAttribute("src", "./assets/images/avatar-light.png");
    }
    else {
        // se tiver dark mode, manter imagem normal
        img.setAttribute("src", "./assets/images/avatar.png");
    }


}