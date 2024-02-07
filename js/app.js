let searchBtn = document.querySelectorAll('.search_');
let searchInput = document.querySelector('.search_input');

function openSearch() {
    searchBtn.forEach(function (searchButton) {
        searchButton.addEventListener('click', function (e) {
            let searchInput = searchButton.previousElementSibling;
            searchInput.classList.toggle('search_act');
            console.log(searchInput);
        })
    })
}
openSearch();

var swiper = new Swiper(".s1", {
    slidesPerView: 3,
    loop: true,
    autoplay: true,
    speed: 3000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
     breakpoints: {
            475: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
});

let burgerMenu = document.querySelector('.burger_menu');
let mobileNavigation = document.querySelector('.mobile_navigation');

burgerMenu.addEventListener('click', (e) => {
    burgerMenu.querySelector('.burger__').classList.toggle('burg_act');
    mobileNavigation.classList.toggle('nav_act');
    document.body.classList.toggle('overflow_hidden');
});