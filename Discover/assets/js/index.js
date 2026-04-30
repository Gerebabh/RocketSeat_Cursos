function toggleMode () {
    const html = document.documentElement
    html.classList.toggle('light');

    // Pegar a tag image
    const img = document.querySelector("#profile img")
    // Substituir a imagem
    if(html.classList.contains('light')) {
        // Se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/img/avatar-light.png')
    } else {
        // Se tiver sem light mode, manter a imagem original
        img.setAttribute('src', './assets/img/avatar.png')
    }
}