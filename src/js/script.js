// $(document).ready(function(){
//     $('.carousel__inner').slick(
//         {
//             speed: 1200,
//             adaptiveHeight: false,
//             prevArrow : '<button type="button" class="slick-prev"><img src="../img/icon/Previos.svg"></button>',
//             nextArrow : '<button type="button" class="slick-next"><img src="../img/icon/Next.svg"></button>',
//             responsive: [
//                 {
//                     breakpoint: 992,
//                     settings: {
//                     dots: true,
//                     arrows: false
//                     }
//                 }
//             ]
//         }
//     );
//   });

    let slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        speed: 1200,
        arrowKeys: true,
        controls: false
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slider.goTo('prev')
    });

    document.querySelector('.next').addEventListener('click', () => {
        slider.goTo('next')
    });