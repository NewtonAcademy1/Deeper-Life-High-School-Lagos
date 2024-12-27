const form = document.getElementById('signupForm');
const thankYou = document.getElementById('thankYou');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const ctaButton = document.getElementById('ctaButton');

ctaButton.addEventListener('click', function(){
    thankYou.style.display = 'block'
    alert('Thanks you for signing up!')
})


// Initialize current index
let currentIndex = 0;

// Ensure the first image is visible
images[currentIndex].classList.add('active');

// Function to display the next image
function showNextSlide() {
    images[currentIndex].classList.remove('active'); // Hide the current image
    currentIndex = (currentIndex + 1) % images.length; // Increment index (loop back to 0 if at the end)
    images[currentIndex].classList.add('active'); // Show the new image
}

// Function to display the previous image
function showPrevSlide() {
    images[currentIndex].classList.remove('active'); // Hide the current image
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index (loop to the last if at the start)
    images[currentIndex].classList.add('active'); // Show the new image
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    console.log('Previous button clicked'); // Debugging message
    showPrevSlide();
});

nextBtn.addEventListener('click', () => {
    console.log('Next button clicked'); // Debugging message
    showNextSlide();
});

// Optional: Auto-play functionality
setInterval(showNextSlide, 5000); // Automatically change the slide every 5 seconds

