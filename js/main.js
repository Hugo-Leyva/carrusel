document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 400,
        dist: -90,
        shift: -10,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false
    });
});