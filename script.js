// gets the "back to top" button
const backToTopButton = document.getElementById('back-to-top');

// detecting scroll events
window.addEventListener('scroll', () => {
    // checks how far the user has scrolled down the page
    if (window.scrollY > 1200) { // the button appears when the user has scrolled to this point of the page
        backToTopButton.style.display = 'block'; // shows the button
        backToTopButton.style.opacity = '1'; // makes the button visible
    } else {
        backToTopButton.style.opacity = '0'; // gradually hides the button
        setTimeout(() => {
            backToTopButton.style.display = 'none'; // hides the button completely
        }, 300); // transition duration
    }
});



