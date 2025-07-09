const menu_mobile = document.querySelector('.hamburger-menu-small-container');
const hambuguer_button = document.querySelector('.hamburger-menu-small');
const hamburger_menu_small_icon = document.querySelector('.hamburger-menu-small-icon');
const navbar_mobile = document.querySelectorAll('.hamburger-menu-small-container a');
const navbar_larger = document.querySelectorAll('.navigation-menu-larger a');

hambuguer_button.addEventListener('click', () => {
    menu_mobile.classList.toggle('hamburger-menu-small-container-active');
    hamburger_menu_small_icon.textContent === '📌' ? hamburger_menu_small_icon.textContent = '📍' : hamburger_menu_small_icon.textContent = '📌';
});

function getActualRoute() {
    const pathname = window.location.pathname;
    const route = pathname.split('/').pop();

    const route_map = {
        'index.html': 'home',
        'chamber.html': 'chamber',
        'final.html': 'final',
        '': 'home'
    }

    return route_map[route] || 'home';
}

function setActiveNav() {
    const current_route = getActualRoute();

    navbar_mobile.forEach(item => {
        item.classList.remove('active');
    });

    navbar_larger.forEach(item => {
        item.classList.remove('active');
    });

    navbar_mobile.forEach(item => {
        if (item.classList.contains(current_route)) {
            item.classList.add('active');
        }
    });

    navbar_larger.forEach(item => {
        if (item.classList.contains(current_route)) {
            item.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
});



