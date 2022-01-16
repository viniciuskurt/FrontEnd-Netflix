$('.owl-carousel').owlCarousel({
    loop:true, /* ativa efeito de loop */
    margin:10,
    nav:true, /* ativa menu de navegação */
    responsive:{ /* responsividade */
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})