function generateStars() {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 100; // Adjust this number for more or fewer stars

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Set fixed size for stars
        const size = '2px'; // Fixed size for consistency
        const posX = Math.random() * 100 + '%'; // Random horizontal position
        const posY = Math.random() * 100 + '%'; // Random vertical position

        star.style.width = size; // Set the width
        star.style.height = size; // Set the height
        star.style.top = posY; // Set vertical position
        star.style.left = posX; // Set horizontal position

        // Append the star to the container
        starContainer.appendChild(star);
    }
}

// Call the function to generate stars on page load
generateStars();

const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        // Create stars
        for (let i = 0; i < 30; i++) { // Increase the number of stars
            const star = document.createElement('div');
            star.classList.add('star');
            // Set fixed size for the stars
            star.style.width = '2px'; // Fixed size
            star.style.height = '2px'; // Fixed size
            // Set random positions for stars within the service card
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            service.appendChild(star);
        }
    });

    service.addEventListener('mouseleave', () => {
        // Remove stars on mouse leave
        const stars = service.querySelectorAll('.star');
        stars.forEach(star => star.remove());
    });
});


window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'flex'; 
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let currentIndex = 0;

function showNext() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length; 
    const offset = -currentIndex * (items[0].offsetWidth + 20); 
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

// Automatically change items every 2 seconds
setInterval(showNext, 2000);

document.querySelector('textarea').placeholder = "Hello,\n\n" +
"I would like to create a mobile responsive website for my business. Can you help?\n\n" +
"Thanks!";





