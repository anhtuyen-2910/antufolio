window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading').classList.add('zoom-in');
    }, 2000); // 2 seconds delay (same as the spinner animation time)

    setTimeout(function() {
        document.getElementById('loading').style.display = 'none'; // Hide the loading screen
        window.location.href = 'home.html'; // Redirect to the home page
    }, 3000); // 3 seconds delay (2s for zoom-in + 1s for spinner)
};

function handleNavigation(targetPage) {
    document.body.classList.add('fade-out'); // Add fade-out animation
    setTimeout(function() {
        window.location.href = targetPage;  // Navigate after fade-out
    }, 1000);  // Wait for fade-out duration
}

document.getElementById('button-work').addEventListener('click', () => handleNavigation('work.html'));
document.getElementById('button-about').addEventListener('click', () => handleNavigation('about.html'));
document.getElementById('button-contact').addEventListener('click', () => handleNavigation('contact.html'));

// Correcting the declaration and initializing Typed.js
document.addEventListener("DOMContentLoaded", function() {
    const introHomeElement = document.getElementById('intro-home');  // Get the element

    // Initialize Typed.js with the correct settings
    const typed = new Typed(introHomeElement, {
        strings: [
            'created by a multimedia designer based in Saigon, Vietnam.',
            'created by the loneliest comedian try to be a coder.',
            'created by an inside joker who looks like a rapper or something else.'
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

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to check if element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// When the user scrolls, check if the element is visible
window.addEventListener('scroll', function() {
    const words = document.querySelectorAll('.abstract-text .word'); // Target the .word elements

    words.forEach(word => {
        if (isInViewport(word)) {
            word.classList.add('visible'); // Add the class to trigger the animation
        }
    });
});

document.getElementById('bannerA').addEventListener('mouseenter', function() {
    const bannerB = document.getElementById('bannerB');
    bannerB.style.display = 'block';  // Ensure it's visible
    setTimeout(() => objectB.classList.add('show'), 10);  // Add the 'show' class to trigger the slide-in

    let fadeEffect = setInterval(function() {
        if (bannerB.style.opacity < 1) {
            bannerB.style.opacity = parseFloat(bannerB.style.opacity) + 0.05;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
});

document.getElementById('bannerA').addEventListener('mouseleave', function() {
    const bannerB = document.getElementById('bannerB');
    bannerB.classList.remove('show');  // Trigger slide-out by removing the 'show' class
    setTimeout(() => objectB.style.display = 'none', 300);  // Hide after animation

    let fadeEffect = setInterval(function() {
        if (bannerB.style.opacity > 0) {
            bannerB.style.opacity = parseFloat(bannerB.style.opacity) - 0.05;
        } else {
            bannerB.style.display = 'none';  // Hide after fading out
            clearInterval(fadeEffect);
        }
    }, 50);
});

document.addEventListener('DOMContentLoaded', function() {
    // Handle comb click
    document.getElementById('comb').addEventListener('click', function() {
        console.log('Comb clicked!');  // Check if click is firing

        // Toggle the 'squish' class on the comb
        document.getElementById('comb').classList.toggle('squish');
        
        // Toggle the 'squished' class on the mascot
        document.getElementById('mascotA').classList.toggle('squished');

        // Automatically return to default after 2 seconds (adjust timing as needed)
        setTimeout(function() {
            // Reset comb to default state
            document.getElementById('comb').classList.remove('squish');
            
            // Reset mascotA to default state
            document.getElementById('mascotA').classList.remove('squished');
        }, 500);  // 2 seconds delay for resetting
    });
});


document.getElementById('button-bowA').addEventListener('click', function() {
    // Add a fade-out animation before navigating
    document.body.classList.add('fade-out'); // Add a fade-out class (you need to define it in CSS)

    // Wait for the fade-out effect to finish, then navigate
    setTimeout(function() {
        window.location.href = 'work.html';
    }, 1000); // Wait 1 second for the fade-out effect
});

document.getElementById('button-bowB').addEventListener('click', function() {
    // Add a fade-out animation before navigating
    document.body.classList.add('fade-out'); // Add a fade-out class (you need to define it in CSS)

    // Wait for the fade-out effect to finish, then navigate
    setTimeout(function() {
        window.location.href = 'about.html';
    }, 1000); // Wait 1 second for the fade-out effect
});

document.getElementById('button-bowC').addEventListener('click', function() {
    // Add a fade-out animation before navigating
    document.body.classList.add('fade-out'); // Add a fade-out class (you need to define it in CSS)

    // Wait for the fade-out effect to finish, then navigate
    setTimeout(function() {
        window.location.href = 'contact.html';
    }, 1000); // Wait 1 second for the fade-out effect
});