function generateStars() {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 100; // You can adjust this number for more or fewer stars

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 2 + 1 + 'px'; // Stars will be between 1px and 3px
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

window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'flex'; // Show as flex to ensure centering
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


