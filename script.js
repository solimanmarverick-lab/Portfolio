// ===== Scroll reveal animations =====
// Add class "reveal-left", "reveal-right", or "reveal-up" to any element
// to have it animate in as it scrolls into view.
// Add "stagger-1" through "stagger-5" to a group of items to cascade them in.

document.addEventListener('DOMContentLoaded', () => {
    const revealEls = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // if this reveal element is a skill-bar, animate its fill width too
                const fill = entry.target.querySelector ? entry.target.querySelector('.bar-fill') : null;
                if (fill && fill.dataset.width) {
                    setTimeout(() => {
                        fill.style.transition = 'width 1.1s ease';
                        fill.style.width = fill.dataset.width;
                    }, 150);
                }

                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
});