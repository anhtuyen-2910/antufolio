function handleNavigation(targetPage) {
    document.body.classList.add('fade-out'); // Add fade-out animation
    setTimeout(function() {
        window.location.href = targetPage;  // Navigate after fade-out
    }, 1000);  // Wait for fade-out duration
}

document.getElementById('logo').addEventListener('click', () => handleNavigation('home.html'));
document.getElementById('button-work').addEventListener('click', () => handleNavigation('work.html'));
document.getElementById('button-about').addEventListener('click', () => handleNavigation('about.html'));


document.addEventListener("DOMContentLoaded", function() {
    // Typewriter effect for the intro-contact (div element)
    const introContactElement = document.getElementById('intro-contact');
    introContactElement.style.minWidth = "250px";  // Adjust based on the longest text
    introContactElement.style.minHeight = "40px"; 
    
    // Initialize Typed.js for the div element with intro text
    const typed1 = new Typed(introContactElement, {
        strings: [
            'feel free to contact me for further info.',
            'feel free to bond a new collaboration.',
            'feel free to discuss about your dream.'
        ],
        typeSpeed: 50,        // Set typing speed (in milliseconds)
        backSpeed: 30,        // Set backspacing speed (in milliseconds)
        backDelay: 1000,      // Delay before starting to backspace
        startDelay: 500,      // Delay before starting the typing effect
        smartBackspace: true, // Ensures smart backspacing
        loop: true,           // Loop the animation indefinitely
        showCursor: false,    // Hide the cursor
    });

    // JavaScript: Add event listeners for each milk div
document.getElementById('milk1').addEventListener('click', function() {
    // Redirect to Facebook
    window.open('https://www.instagram.com/antu_au_chocolat/', '_blank'); 
});

document.getElementById('milk2').addEventListener('click', function() {
    // Redirect to Instagram
    window.open('mailto:tuyenguyenanh@gmail.com', '_blank');
});

document.getElementById('milk3').addEventListener('click', function() {
    // Open Gmail compose window
    window.location.href = 'https://www.facebook.com/albertantu.luvyoualot'; 
});


    // Typewriter effect on input field's placeholder
    const typed2 = new Typed('#typeInput', {
        strings: ['or just put in this', 'short messages', 'simple thoughts hereeeee'],
        typeSpeed: 100,        // Set typing speed (in milliseconds)
        backSpeed: 0,          // Disable backspacing
        attr: 'placeholder',   // Target the placeholder attribute
        bindInputFocusEvents: true,  // Bind events to input focus
        loop: true,            // Loop the animation indefinitely
        showCursor: false,     // Hide the cursor
    });
});

