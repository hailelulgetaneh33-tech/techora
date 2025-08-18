document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    let index = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    });
});