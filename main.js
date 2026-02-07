document.addEventListener('DOMContentLoaded', function () {
    var cta = document.querySelector('.cta');
    if (cta) {
        cta.addEventListener('click', function () {
            cta.style.pointerEvents = 'none';
            cta.style.opacity = '0.6';
        });
    }
});
