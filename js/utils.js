// function for navbar transition
window.addEventListener('scroll', () => {
  const nav = document.querySelector('header');
  if (window.pageYOffset > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


// Select the cursor element
const cursor = document.getElementById('cursor');
let mouseX = 0; // Mouse X position
let mouseY = 0; // Mouse Y position
const speed = 0.1; // Speed factor (increase for slower movement, decrease for faster)

// Update mouse position on mouse move
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX; // Update the horizontal position
    mouseY = e.pageY; // Update the vertical position
});

// Function to update cursor position smoothly
function updateCursor() {
    // Get the current position of the cursor
    const cursorX = parseFloat(cursor.style.left) || 0;
    const cursorY = parseFloat(cursor.style.top) || 0;

    // Calculate the new position
    const newX = cursorX + (mouseX - cursorX) * speed;
    const newY = cursorY + (mouseY - cursorY) * speed;

    // Set the new position
    cursor.style.left = newX + 'px';
    cursor.style.top = newY + 'px';

    // Call the function again for the next frame
    requestAnimationFrame(updateCursor);
}

// Start the animation
updateCursor();


// Scroll to the next section when the arrow is clicked
document.querySelector('.arrow-down').addEventListener('click', () => {
    document.querySelector('.about-me').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
    });
});


// Event handler for the About button
document.querySelector('.about-btn').addEventListener('click', () => {
    document.querySelector('.about-me').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
    });
});

// Event handler for the Projects button
document.querySelector('.projects-btn').addEventListener('click', () => {
    document.querySelector('.projects').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
    });
});

// Event handler for the Contact button
document.querySelector('.contact-btn').addEventListener('click', () => {
    document.querySelector('.contact-me').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
    });
});

// Event handler for the FAQs button
document.querySelector('.FAQs-btn').addEventListener('click', () => {
    document.querySelector('.faqs-page').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
    });
});

// Event handler for the more button to see the question
document.querySelector('.plus-icon').addEventListener('click', function() {
    document.querySelector('.collapsible-content').style.display = 'flex';
    this.style.display = 'none';
    document.querySelector('.minus-icon').style.display = 'block';
});

// Event handler for the less button to hide the question
document.querySelector('.minus-icon').addEventListener('click', function() {
    document.querySelector('.collapsible-content').style.display = 'none';
    document.querySelector('.plus-icon').style.display = 'block';
    this.style.display = 'none';
});

// Event handler for the see-my-work button
document.querySelector('.see-my-work').addEventListener('click', () => {
    document.querySelector('.projects').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
    });
});

// Event handler for the see-projects button
document.querySelector('.see-projects').addEventListener('click', () => {
    document.querySelector('.projects').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
    });
});

// Event handler for the see-certs button
document.querySelector('.certs-btn').addEventListener('click', () => {
    document.querySelector('.certs-page').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
    });
});


const menu = document.querySelector('#menu');
const toggler = document.querySelector('.toggler');

// Add an event listener to the toggler
toggler.addEventListener('click', () => {
    // Toggle the aria-checked attribute
    const isChecked = toggler.getAttribute('aria-checked') === 'true';
    
    // Update the aria-checked attribute
    toggler.setAttribute('aria-checked', !isChecked);

    // Apply the transform based on the checked state
    if (!isChecked) {
        menu.style.transform = 'scaleY(1)'; // Show the menu
    } else {
        menu.style.transform = 'scaleY(0)'; // Hide the menu
    }
});


// Handle close buttons for both success and error modals
const closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('#success').style.display = 'none';
        document.querySelector('#error').style.display = 'none';
    });
});