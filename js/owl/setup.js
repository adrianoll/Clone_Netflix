$('.owl-carousel').owlCarousel({
    loop:true, //Se for falso ele não permite loop.
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1 //Tela até 600px cabe apena 1 item
        },
        600:{
            items:3 //Tela 600px cabem 3 itens.
        }, 
        1000:{
            items:5 //Tela com mais de 1000px, cabem 5 itens na tela
        }
    }
})