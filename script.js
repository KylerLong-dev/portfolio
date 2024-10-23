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

function linearScrollTo(targetElement, duration) {
  let startPosition = window.pageYOffset;
  let targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeLinear(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
          requestAnimationFrame(animation);
      } else {
          // Correct any small offset in the scroll position at the end
          window.scrollTo(0, targetPosition);
      }
  }

  // Linear easing function for consistent speed
  function easeLinear(t, b, c, d) {
      return c * t / d + b;
  }

  requestAnimationFrame(animation);
}

// Attach event listener for anchor links to trigger custom scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute('href'));

      if (window.innerWidth <= 768) {
          // Apply custom scroll for mobile, with a fixed duration (e.g., 1200ms)
          linearScrollTo(targetSection, 1200);
      } else {
          // Use default smooth scrolling for larger screens
          targetSection.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});






