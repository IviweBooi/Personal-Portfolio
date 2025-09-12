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

// Event handlers for FAQ accordion functionality
const plusIcons = document.querySelectorAll('.plus-icon');
const minusIcons = document.querySelectorAll('.minus-icon');

plusIcons.forEach((plusIcon, index) => {
    plusIcon.addEventListener('click', function() {
        const cardDiv = this.closest('.card-div');
        const collapsibleContent = cardDiv.querySelector('.collapsible-content');
        const minusIcon = cardDiv.querySelector('.minus-icon');
        
        collapsibleContent.style.display = 'flex';
        this.style.display = 'none';
        minusIcon.style.display = 'block';
    });
});

minusIcons.forEach((minusIcon, index) => {
    minusIcon.addEventListener('click', function() {
        const cardDiv = this.closest('.card-div');
        const collapsibleContent = cardDiv.querySelector('.collapsible-content');
        const plusIcon = cardDiv.querySelector('.plus-icon');
        
        collapsibleContent.style.display = 'none';
        plusIcon.style.display = 'block';
        this.style.display = 'none';
    });
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
toggler.addEventListener('change', () => {
    // Apply the transform based on the checked state
    if (toggler.checked) {
        menu.style.transform = 'scaleY(1)'; // Show the menu
    } else {
        menu.style.transform = 'scaleY(0)'; // Hide the menu
    }
});

// Close mobile menu when clicking on navigation items
const navItems = document.querySelectorAll('#menu ul li');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        toggler.checked = false;
        menu.style.transform = 'scaleY(0)';
    });
});


// Handle close buttons for both success and error modals
const closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('#success').style.display = 'none';
        document.querySelector('#error').style.display = 'none';
    });
});

// Handle "Book a Free Call" button - scroll to contact section
document.querySelector('.book-a-free-call').addEventListener('click', () => {
    document.querySelector('.contact-me').scrollIntoView({ 
        behavior: 'smooth'
    });
});

// Project data with live URLs and GitHub links
const projectData = [
    {
        title: 'Weather App',
        liveUrl: 'https://weather-app-iviwe.netlify.app', // Replace with actual live URL
        githubUrl: 'https://github.com/IviweBooi/weather-app',
        description: 'A responsive weather application that provides real-time weather data with beautiful animations and intuitive user interface.'
    },
    {
        title: 'Contacts Manager',
        liveUrl: 'https://contacts-manager-iviwe.netlify.app', // Replace with actual live URL
        githubUrl: 'https://github.com/IviweBooi/contacts-app',
        description: 'A comprehensive contact management system with CRUD operations, search functionality, and modern UI design.'
    },
    {
        title: 'Superhero Database',
        liveUrl: 'https://superhero-database-iviwe.netlify.app', // Replace with actual live URL
        githubUrl: 'https://github.com/IviweBooi/superhero-app',
        description: 'An interactive superhero database with detailed character information, search filters, and engaging visual design.'
    },
    {
        title: 'Pine City Zoo',
        liveUrl: 'https://pine-city-zoo-iviwe.netlify.app', // Replace with actual live URL
        githubUrl: 'https://github.com/IviweBooi/pine-city-zoo',
        description: 'A virtual zoo experience with interactive animal exhibits, educational content, and immersive navigation.'
    },
    {
        title: 'Calculator App',
        liveUrl: 'https://calculator-app-iviwe.netlify.app', // Replace with actual live URL
        githubUrl: 'https://github.com/IviweBooi/calculator-app',
        description: 'A sleek calculator application with advanced mathematical operations, memory functions, and responsive design.'
    }
];

// Handle live app links
const liveLinks = document.querySelectorAll('.live-link');
liveLinks.forEach((link, index) => {
    if (projectData[index] && projectData[index].liveUrl) {
        link.href = projectData[index].liveUrl;
    } else {
        // If no live URL, disable the link and show coming soon
        link.href = '#';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Live demo coming soon!');
        });
    }
});

// Handle GitHub links (already set in HTML, but we can update them here if needed)
const githubLinks = document.querySelectorAll('.github-link');
githubLinks.forEach((link, index) => {
    if (projectData[index] && projectData[index].githubUrl) {
        link.href = projectData[index].githubUrl;
    }
});



// Handle video loading errors and add fallback images
const projectVideos = document.querySelectorAll('.project-card video');
const fallbackImages = [
    'assets/images/weather-app.png',
    'assets/images/contacts.png', 
    'assets/images/anonymous.jpg', // Superhero app fallback
    'assets/images/anonymous.jpg', // Zoo app fallback
    'assets/images/calculator-pic.jpeg'
];

projectVideos.forEach((video, index) => {
    video.addEventListener('error', () => {
        // Create fallback image element
        const img = document.createElement('img');
        img.src = fallbackImages[index] || 'assets/images/anonymous.jpg';
        img.alt = `Project ${index + 1} Preview`;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        // Replace video with image
        video.parentNode.replaceChild(img, video);
    });
    
    // Add loading state
    video.addEventListener('loadstart', () => {
        video.style.opacity = '0.5';
    });
    
    video.addEventListener('canplay', () => {
        video.style.opacity = '1';
    });
});