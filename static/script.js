document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('nav a[href="#' + id + '"]').classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                if (entry.target.classList.contains('gameboy-text')) {
                    typeText(0, entry.target);
                }
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => {
        observer.observe(el);
    });

    function typeText(index, target) {
        const originalText = target.textContent;
        target.textContent = '';

        function typeChar(index) {
            target.textContent = originalText.slice(0, index);
            if (index < originalText.length) {
                setTimeout(function () {
                    typeChar(index + 1);
                }, 100);
            }
        }

        typeChar(0);
    }
});
