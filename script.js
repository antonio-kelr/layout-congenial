window.revelar = ScrollReveal({reset:true})

revelar.reveal('.sectio-top', {
    duration: 2000,
    distance: '80px'
})

window.addEventListener('scroll', function() {
    var minhaSectio = document.querySelector('.minha-sectio');
    var scrollPos = window.scrollY;

    if (scrollPos > 0) {
        minhaSectio.classList.add('scroll');
    } else {
        minhaSectio.classList.remove('scroll');
    }
});


const nome = 'antoino';