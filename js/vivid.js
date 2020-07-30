let mainNav = document.getElementById("menu-nav");
let navbartoggle = document.getElementById('toggle');
navbartoggle.addEventListener('click', function() {
    mainNav.classList.toggle('burger');
})


(function($) {
    $(document).on('contextmenu', 'img', function() {
        return false;
    })
});