document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animation');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Unobserve after animation
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animation');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Unobserve after animation
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Slideshow
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow-container .slide');
    const totalSlides = slides.length;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlides();
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    showSlides(); // Initial call to display slides
});