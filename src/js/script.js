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

$(document).ready(function() {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
        function changeItem (item) {
            $(item).each(function(i) {
                $(this).on('click', function(event) {
                    event.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            })
        }
        
        changeItem('.catalog-item__content')
        changeItem('.catalog-item__list')

})

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


