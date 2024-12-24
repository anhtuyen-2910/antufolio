function handleNavigation(targetPage) {
    document.body.classList.add('fade-out'); // Add fade-out animation
    setTimeout(function() {
        window.location.href = targetPage;  // Navigate after fade-out
    }, 1000);  // Wait for fade-out duration
}

document.getElementById('logo').addEventListener('click', () => handleNavigation('home.html'));
document.getElementById('button-work').addEventListener('click', () => handleNavigation('work.html'));
document.getElementById('button-about').addEventListener('click', () => handleNavigation('about.html'));
document.getElementById('button-contact').addEventListener('click', () => handleNavigation('contact.html'));
document.getElementById('button').addEventListener('click', () => handleNavigation('work.html'));

// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// When the user scrolls, check if the image is visible
window.addEventListener('scroll', function() {
    const artworks = document.querySelectorAll('.artwork');
    
    artworks.forEach(artwork => {
        if (isInViewport(artwork)) {
            artwork.classList.add('visible'); // Add the class to trigger the animation
        }
    });
});

  