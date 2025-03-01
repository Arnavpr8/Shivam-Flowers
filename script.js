let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds (3000ms)
    setTimeout(showSlides, 3000);
}

// Start slideshow when page loads
document.addEventListener("DOMContentLoaded", showSlides);
