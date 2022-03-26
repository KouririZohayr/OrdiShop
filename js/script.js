
$(".owl-carousel").owlCarousel({ 
    autoplay: true,
    autoplayhoverpause:true,
    autoplaytimeout:100,
    items:4,
    nav:true,
    loop:true,
    responsive:{

        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
            
        }
    }

})
