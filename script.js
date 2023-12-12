// Function to add animation class to elements
function animateSections() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    // Add fadeIn animation to header
    header.classList.add('fadeIn');

    // Add slideIn animation to sections
    sections.forEach((section, index) => {
        section.classList.add('slideIn');
    });
}

function animateFooter() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const footerElements = document.querySelectorAll('footer div');

    // Add fadeIn animation to header
    header.classList.add('fadeIn');

    // Add slideIn animation to sections
    sections.forEach((section, index) => {
        section.classList.add('slideIn');
    });

    // Add scaleIn animation to footer elements
    footerElements.forEach((element, index) => {
        element.classList.add('scaleIn');
    });
}

// Call the animation function after the page has loaded
window.addEventListener('load', animateSections);
// Call the animation function after the page has loaded
window.addEventListener('load', animateFooter);