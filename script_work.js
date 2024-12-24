function handleNavigation(targetPage) {
    document.body.classList.add('fade-out'); // Add fade-out animation
    setTimeout(function() {
        window.location.href = targetPage;  // Navigate after fade-out
    }, 1000);  // Wait for fade-out duration
}

document.getElementById('logo').addEventListener('click', () => handleNavigation('home.html'));
document.getElementById('button-about').addEventListener('click', () => handleNavigation('about.html'));
document.getElementById('button-contact').addEventListener('click', () => handleNavigation('contact.html'));
document.getElementById('button1').addEventListener('click', () => handleNavigation('each_work_1.html'));
document.getElementById('button2').addEventListener('click', () => handleNavigation('each_work_2.html'));
document.getElementById('button3').addEventListener('click', () => handleNavigation('each_work_3.html'));
document.getElementById('button4').addEventListener('click', () => handleNavigation('each_work_4.html'));
document.getElementById('button5').addEventListener('click', () => handleNavigation('each_work_5.html'));
document.getElementById('button6').addEventListener('click', () => handleNavigation('each_work_6.html'));

document.addEventListener("DOMContentLoaded", function() {
    const introWorkElement = document.getElementById('intro-work');  // Get the element

    introWorkElement.style.minWidth = "250px";   // Adjust based on the longest text
    introWorkElement.style.minHeight = "40px"; 
    // Initialize Typed.js with the correct settings
    const typed = new Typed(introWorkElement, {
        strings: [
            'myself during being a character designer.',
            'myself during being a animation designer.',
            'myself during being an enthusiastic teammate.'
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

