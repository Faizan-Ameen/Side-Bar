var menu = document.querySelector('#menu');
var cross = document.querySelector('#cross');
var main = document.querySelector('.main');
var navlinks = document.querySelectorAll('.navlink');
var cursor = document.querySelector('.cursor');
var nav_items = document.querySelector('.nav_items')


// Navbar Styling 
menu.addEventListener('click', function () {
    main.classList.add('active');
    menu.style.display = 'none';
})

cross.addEventListener('click', function () {
    main.classList.remove('active');
    menu.style.display = 'flex';
})


// Active Navlink and Moving Cursor Style 
navlinks.forEach(navlink => {
    navlink.addEventListener('mousemove', function () {
        var cursor = document.querySelector('.cursor');
        cursor.style.scale = 4;
    })

    navlink.addEventListener('mouseleave', function () {
        var cursor = document.querySelector('.cursor');
        cursor.style.scale = 1;
    })
    navlink.addEventListener('click', function () {
        navlinks.forEach(link => {
            link.classList.remove('link_active');
            this.classList.add('link_active');
        })
    })
})

window.addEventListener('mousemove', function (dets) {
    cursor.style.left = dets.x + 'px'
    cursor.style.top = dets.y + 'px'
})
