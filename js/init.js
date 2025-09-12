// Initialize dynamic content using constants
// This file replaces hardcoded values with dynamic content from constants.js

function initializePage() {
    // Wait for constants to be loaded
    if (typeof CONSTANTS === 'undefined') {
        setTimeout(initializePage, 100);
        return;
    }

    // Initialize favicon
    const favicon = document.getElementById('favicon');
    if (favicon) {
        favicon.href = CONSTANTS.PATHS.LOGO;
    }

    // Initialize logo text
    const logoText = document.getElementById('logo-text');
    if (logoText) {
        logoText.textContent = CONSTANTS.PERSONAL.INITIALS;
    }

    // Initialize email link and button
    const emailLink = document.getElementById('email-link');
    const sayHiText = document.getElementById('say-hi-text');
    const waveIcon = document.getElementById('wave-icon');
    
    if (emailLink) {
        emailLink.href = `mailto:${CONSTANTS.PERSONAL.EMAIL}`;
    }
    if (sayHiText) {
        sayHiText.textContent = CONSTANTS.BUTTONS.SAY_HI;
    }
    if (waveIcon) {
        waveIcon.src = CONSTANTS.PATHS.ICONS.WAVE;
    }

    // Initialize gradient image
    const gradientImage = document.getElementById('gradient-image');
    if (gradientImage) {
        gradientImage.src = CONSTANTS.PATHS.GRADIENT;
    }

    // Initialize landing page content
    const greetingText = document.getElementById('greeting-text');
    const mainTitle = document.getElementById('main-title');
    const mainDescription = document.getElementById('main-description');
    
    if (greetingText) {
        greetingText.textContent = CONSTANTS.PERSONAL.GREETING;
    }
    if (mainTitle) {
        mainTitle.textContent = CONSTANTS.PERSONAL.TITLE;
    }
    if (mainDescription) {
        mainDescription.textContent = CONSTANTS.PERSONAL.DESCRIPTION;
    }

    // Initialize buttons
    const seeWorkBtn = document.getElementById('see-work-btn');
    const resumeLink = document.getElementById('resume-link');
    const resumeText = document.getElementById('resume-text');
    const downloadIcon = document.getElementById('download-icon');
    const arrowDownIcon = document.getElementById('arrow-down-icon');
    
    if (seeWorkBtn) {
        seeWorkBtn.textContent = CONSTANTS.BUTTONS.SEE_MY_WORK;
    }
    if (resumeLink) {
        resumeLink.href = CONSTANTS.PATHS.RESUME;
    }
    if (resumeText) {
        resumeText.textContent = CONSTANTS.BUTTONS.GET_MY_RESUME;
    }
    if (downloadIcon) {
        downloadIcon.src = CONSTANTS.PATHS.ICONS.DOWNLOAD;
    }
    if (arrowDownIcon) {
        arrowDownIcon.src = CONSTANTS.PATHS.ICONS.ARROW_DOWN;
    }

    // Initialize navigation menu
    initializeNavigation();
    
    // Initialize about section
    initializeAboutSection();
    
    // Initialize design process section
    initializeDesignProcess();
    
    // Initialize skills section
    initializeSkills();
    
    // Initialize FAQs section
    initializeFAQs();
}

function initializeNavigation() {
    const navMenu = document.querySelector('#menu ul');
    if (navMenu && CONSTANTS.NAVIGATION) {
        // Clear existing navigation items
        navMenu.innerHTML = '';
        
        // Add navigation items from constants
        CONSTANTS.NAVIGATION.forEach(item => {
            const li = document.createElement('li');
            li.className = item.class;
            li.textContent = item.text;
            navMenu.appendChild(li);
        });
    }
}

function initializeAboutSection() {
    // Initialize about section title
    const aboutTitle = document.querySelector('.about-me h1');
    if (aboutTitle) {
        aboutTitle.textContent = `Meet ${CONSTANTS.PERSONAL.NAME.split(' ')[0]}`;
    }
    
    // Initialize about paragraphs
    const aboutParagraphs = document.querySelectorAll('.about-me .left-div p');
    const aboutTexts = [
        CONSTANTS.ABOUT_TEXT.INTRO,
        CONSTANTS.ABOUT_TEXT.ACADEMIC,
        CONSTANTS.ABOUT_TEXT.FUTURE
    ];
    
    aboutParagraphs.forEach((p, index) => {
        if (aboutTexts[index]) {
            p.textContent = aboutTexts[index];
        }
    });
}

function initializeDesignProcess() {
    // Initialize design process image
    const designImage = document.querySelector('.design-process img');
    if (designImage) {
        designImage.src = CONSTANTS.PATHS.DESIGN_IMAGE;
    }
    
    // Initialize design process text
    const processSubtitle = document.querySelector('.design-process-text p');
    const processTitle = document.querySelector('.design-process .right-div h1');
    const processDescription = document.querySelector('.design-process .right-div > p');
    
    if (processSubtitle) {
        processSubtitle.textContent = CONSTANTS.DESIGN_PROCESS.SUBTITLE;
    }
    if (processTitle) {
        processTitle.textContent = CONSTANTS.DESIGN_PROCESS.TITLE;
    }
    if (processDescription) {
        processDescription.textContent = CONSTANTS.DESIGN_PROCESS.DESCRIPTION;
    }
    
    // Initialize process buttons
    const bookCallBtn = document.querySelector('.book-a-free-call');
    const seeProjectsBtn = document.querySelector('.see-projects');
    
    if (bookCallBtn) {
        bookCallBtn.textContent = CONSTANTS.BUTTONS.BOOK_FREE_CALL;
    }
    if (seeProjectsBtn) {
        const btnText = seeProjectsBtn.querySelector('span') || seeProjectsBtn;
        btnText.textContent = CONSTANTS.BUTTONS.SEE_PROJECTS;
    }
    
    // Initialize process cards
    const processCards = document.querySelectorAll('.design-process .card');
    processCards.forEach((card, index) => {
        if (CONSTANTS.PROCESS_STEPS[index]) {
            const step = CONSTANTS.PROCESS_STEPS[index];
            const counter = card.querySelector('.counter');
            const icon = card.querySelector('img');
            const title = card.querySelector('h2');
            const explanation = card.querySelector('.explanation');
            
            if (counter) counter.textContent = step.number;
            if (icon) icon.src = step.icon;
            if (title) title.textContent = step.title;
            if (explanation) explanation.textContent = step.description;
        }
    });
}

function initializeSkills() {
    const skillsContainer = document.querySelector('.about-me .right-div');
    if (skillsContainer && CONSTANTS.SKILLS) {
        // Clear existing skills
        skillsContainer.innerHTML = '';
        
        // Add skills from constants
        CONSTANTS.SKILLS.forEach(skill => {
            const p = document.createElement('p');
            p.textContent = skill;
            skillsContainer.appendChild(p);
        });
    }
}

function initializeFAQs() {
    // Initialize FAQ title
    const faqTitle = document.querySelector('.faqs-page h1');
    if (faqTitle) {
        faqTitle.textContent = CONSTANTS.FAQS.TITLE;
    }
    
    // Initialize FAQ cards container
    const faqsContainer = document.querySelector('.faqs-page .inner-div');
    if (faqsContainer && CONSTANTS.FAQS.QUESTIONS) {
        // Remove existing card-div (placeholder)
        const existingCard = faqsContainer.querySelector('.card-div');
        if (existingCard) {
            existingCard.remove();
        }
        
        // Create FAQ cards from constants
        CONSTANTS.FAQS.QUESTIONS.forEach((faq, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card-div';
            cardDiv.innerHTML = `
                <div>
                    <p>${faq.question}</p>
                    <img src="assets/icons/plus.svg" alt="more icon" class="plus-icon">
                    <img src="assets/icons/minus.svg" alt="less icon" class="minus-icon">
                </div>
                <div class="collapsible-content" style="display: none">
                    <p>${faq.answer}</p>
                </div>
            `;
            faqsContainer.appendChild(cardDiv);
        });
        
        // Add click event listeners for collapsible functionality
        addFAQEventListeners();
    }
}

function addFAQEventListeners() {
    const faqCards = document.querySelectorAll('.faqs-page .card-div');
    
    faqCards.forEach(card => {
        const questionDiv = card.querySelector('div:first-child');
        const collapsibleContent = card.querySelector('.collapsible-content');
        const plusIcon = card.querySelector('.plus-icon');
        const minusIcon = card.querySelector('.minus-icon');
        
        questionDiv.addEventListener('click', () => {
            const isVisible = collapsibleContent.style.display !== 'none';
            
            if (isVisible) {
                // Hide content
                collapsibleContent.style.display = 'none';
                plusIcon.style.display = 'flex';
                minusIcon.style.display = 'none';
            } else {
                // Show content
                collapsibleContent.style.display = 'block';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'flex';
            }
        });
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}