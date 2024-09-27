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

