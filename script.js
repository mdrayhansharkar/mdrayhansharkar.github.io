const revealElements = document.querySelectorAll('.section, .hero-left, .hero-right');

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {

    cursorGlow.style.left = e.clientX + 'px';

    cursorGlow.style.top = e.clientY + 'px';

});

const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercent =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        scrollPercent + '%';
});
