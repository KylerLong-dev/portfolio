document.addEventListener('DOMContentLoaded', function() {
    const starContainer = document.querySelector('.stars');
    
    // Create a specified number of stars
    const numStars = 100; // Adjust this to increase or decrease the number of stars

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Randomize position within the viewport
      const posX = Math.random() * 100; // Random position in percentage
      const posY = Math.random() * 100; // Random position in percentage
      const duration = Math.random() * 5 + 3; // Random animation duration (3 to 8 seconds)
      
      // Set CSS properties for random positioning and animation
      star.style.left = `${posX}vw`;
      star.style.top = `${posY}vh`;
      star.style.animationDuration = `${duration}s`;
      
      // Append star to the container
      starContainer.appendChild(star);
    }
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

//Hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none'; // Hide the menu if it's currently displayed
    } else {
        nav.style.display = 'flex'; // Show the menu if it's currently hidden
    }
});



