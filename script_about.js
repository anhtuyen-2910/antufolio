function handleNavigation(targetPage) {
    document.body.classList.add('fade-out'); // Add fade-out animation
    setTimeout(function() {
        window.location.href = targetPage;  // Navigate after fade-out
    }, 1000);  // Wait for fade-out duration
}

document.getElementById('logo').addEventListener('click', () => handleNavigation('home.html'));
document.getElementById('button-work').addEventListener('click', () => handleNavigation('work.html'));
document.getElementById('button-contact').addEventListener('click', () => handleNavigation('contact.html'));


document.addEventListener("DOMContentLoaded", function() {
    const introAboutElement = document.getElementById('intro-about');  // Get the element

    introAboutElement.style.minWidth = "250px";   // Adjust based on the longest text
    introAboutElement.style.minHeight = "40px"; 
    // Initialize Typed.js with the correct settings
    const typed = new Typed(introAboutElement, {
        strings: [
            'myself during being a clown.',
            'myself during being a freelance artist.',
            'myself during being a normal person.'
        ],
        typeSpeed: 50,      // Set typing speed (in milliseconds)
        backSpeed: 30,      // Set backspacing speed (in milliseconds)
        backDelay: 1000,    // Delay before starting to backspace
        startDelay: 500,    // Delay before starting the typing effect
        smartBackspace: true, // Ensures smart backspacing
        loop: true,   // Loop the animation indefinitely
        showCursor: false
    });
});

// Select the fortune elements and the paper
const fortune1 = document.getElementById('fortune1');
const fortune2 = document.getElementById('fortune2');
const paper = document.getElementById('paper');

// Flags to check if each fortune has been clicked
let fortune1Clicked = false;
let fortune2Clicked = false;

// Function to handle the click event for fortune1
fortune1.addEventListener('click', () => {
    if (fortune1Clicked) return;  // If fortune1 has already been clicked, do nothing
    
    // Move fortune1 left and show the paper
    fortune1.style.transition = 'transform 1s ease-out';
    fortune1.style.transform = 'translateX(-20vw) rotate(-45deg)';
    paper.style.transition = 'opacity 1s ease-out';
    paper.style.opacity = '1';

    // Mark fortune1 as clicked
    fortune1Clicked = true;

    // Check if both fortunes have been clicked to trigger reset
    checkBothClicked();
});

// Function to handle the click event for fortune2
fortune2.addEventListener('click', () => {
    if (fortune2Clicked) return;  // If fortune2 has already been clicked, do nothing

    // Move fortune2 right and show the paper
    fortune2.style.transition = 'transform 1s ease-out';
    fortune2.style.transform = 'translateX(20vw) rotate(-45deg)';
    paper.style.transition = 'opacity 1s ease-out';
    paper.style.opacity = '1';

    // Mark fortune2 as clicked
    fortune2Clicked = true;

    // Check if both fortunes have been clicked to trigger reset
    checkBothClicked();
});

// Function to check if both fortunes have been clicked, and trigger their return
function checkBothClicked() {
    // If both fortunes have been clicked, wait for the animation to finish before resetting
    if (fortune1Clicked && fortune2Clicked) {
        setTimeout(() => {
            // Reset fortune1
            fortune1.style.transition = 'transform 1s ease-in-out';  // Smooth transition
            fortune1.style.transform = 'translateX(0) rotate(0)';
            
            // Reset fortune2
            fortune2.style.transition = 'transform 1s ease-in-out';  // Smooth transition
            fortune2.style.transform = 'translateX(0) rotate(0)';

            // Reset paper opacity
            paper.style.opacity = '0';

            // Reset the flags to allow the action to repeat
            fortune1Clicked = false;
            fortune2Clicked = false;
        }, 2000);  // 2000ms = total animation time (1s for each fortune)
    }
}
