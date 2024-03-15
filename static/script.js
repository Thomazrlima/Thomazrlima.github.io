
document.addEventListener('DOMContentLoaded', function () {
    const intro = document.querySelector('.intro');
    const cards = document.querySelectorAll('.card');

    setTimeout(function () {
        intro.classList.add('show');
    }, 500);

    window.addEventListener('scroll', function () {
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('show');
            }
        });
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});