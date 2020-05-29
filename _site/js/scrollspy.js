// simple-scrollspy https://github.com/kimyvgy/simple-scrollspy

window.onload = function () {
    scrollSpy('#main-menu', {
        sectionClass: '.scrollspy',
        menuActiveTarget: '#main-menu li a',
        offset: 100
    })
}
