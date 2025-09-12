// Constants file to centralize all hardcoded values
// This improves maintainability and follows best coding practices

const CONSTANTS = {
    // Personal Information
    PERSONAL: {
        NAME: 'Iviwe Booi',
        INITIALS: 'IB',
        EMAIL: 'booiiviwe4394@gmail.com',
        TITLE: 'Building the Future, One Line of Code at a Time.',
        DESCRIPTION: 'Software Dev. Passionate about crafting innovative solutions with modern technologies.',
        UNIVERSITY: 'University of Cape Town (UCT)',
        GREETING: "Hey! I'm Iviwe Booi"
    },

    // File Paths
    PATHS: {
        RESUME: 'assets/files/IviweBooiResume.pdf',
        LOGO: 'assets/images/myLogo.png',
        GRADIENT: 'assets/images/gradient.png',
        DESIGN_IMAGE: 'assets/images/design.jpg',
        ICONS: {
            WAVE: 'assets/icons/wave.svg',
            ARROW_DOWN: 'assets/icons/arrow-down.svg',
            DOWNLOAD: 'assets/icons/download.svg',
            ARROW: 'assets/icons/arrow.svg',
            BULB: 'assets/icons/bulb.svg',
            TASKS: 'assets/icons/tasks.svg'
        }
    },

    // Colors
    COLORS: {
        PRIMARY: 'rgba(179, 255, 50, 1)',
        PRIMARY_HOVER: 'rgba(179, 255, 79, 1)',
        PRIMARY_TRANSPARENT: 'rgba(179, 255, 50, 0.5)',
        WHITE: '#fff',
        BLACK: '#000',
        DARK_GRAY: '#0d0d0d',
        MEDIUM_GRAY: 'rgb(48,48,48)',
        LIGHT_GRAY: 'rgba(100,100,100,0.1)',
        WHITE_TRANSPARENT: 'rgba(255,255,255,0.1)',
        WHITE_SEMI: 'rgba(255,255,255,0.2)',
        WHITE_BORDER: 'rgba(255,255,255,0.5)',
        WHITE_FULL_BORDER: 'rgba(255,255,255,1)',
        SUCCESS: 'rgba(79, 255, 50, 0.8)',
        ERROR: 'rgba(255, 50, 50, 0.8)'
    },

    // Typography
    TYPOGRAPHY: {
        FONT_SIZES: {
            SMALL: '12px',
            MEDIUM: '14px',
            NORMAL: '16px',
            LARGE: '18px',
            XL: '25px',
            XXL: '50px',
            HERO: '80px',
            MEGA: '90px'
        },
        LINE_HEIGHTS: {
            TIGHT: '18px',
            NORMAL: '20px',
            RELAXED: '24px',
            LOOSE: '65px',
            HERO: '100px',
            MEGA: '110px'
        }
    },

    // Spacing
    SPACING: {
        XS: '5px',
        SMALL: '8px',
        MEDIUM: '10px',
        NORMAL: '15px',
        LARGE: '20px',
        XL: '30px',
        XXL: '40px',
        XXXL: '60px'
    },

    // Border Radius
    BORDER_RADIUS: {
        SMALL: '5px',
        MEDIUM: '10px',
        LARGE: '20px',
        XL: '21px'
    },

    // Skills
    SKILLS: [
        'Figma',
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Node.js',
        'Java',
        'Python',
        'Pytest',
        'REST APIs',
        'Flask',
        'Jest',
        'Chrome DevTools',
        'Git',
        'GitHub',
        'GitLab',
        'Netlify',
        'Linux',
        'Visual Studio Code',
        'PyCharm',
        'Postman',
        'Agile Development',
        'OOP',
        'Software Engineering',
        'UI/UX Design',
        'Responsive Web Design',
        'Version Control',
        'Problem Solving',
        'Team Collaboration'
    ],

    // Navigation Items
    NAVIGATION: [
        { text: 'About', class: 'about-btn' },
        { text: 'Projects', class: 'projects-btn' },
        { text: 'Certs', class: 'certs-btn' },
        { text: 'FAQs', class: 'FAQs-btn' },
        { text: 'Contact', class: 'contact-btn' }
    ],

    // Button Text
    BUTTONS: {
        SEE_MY_WORK: 'See My Work',
        GET_MY_RESUME: 'Get My Resume',
        SAY_HI: 'Say Hi',
        BOOK_FREE_CALL: 'Book a Free Call',
        SEE_PROJECTS: 'See Projects'
    },

    // Process Steps
    PROCESS_STEPS: [
        {
            number: '1',
            icon: 'assets/icons/bulb.svg',
            title: 'Define Your Vision',
            description: 'Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.'
        },
        {
            number: '2',
            icon: 'assets/icons/tasks.svg',
            title: 'Submit Your Request',
            description: 'Easily submit your design requirements through my email, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.'
        }
    ],

    // About Me Text
    ABOUT_TEXT: {
        INTRO: "Hello! I'm Iviwe Booi, a passionate software developer and final-year Computer Science student at the University of Cape Town (UCT). My journey in the tech world has been fueled by a deep curiosity and a desire to create innovative solutions that make a difference. With a solid foundation in HTML, CSS, JavaScript, Java, and Python, I have honed my skills through various personal projects that reflect my creativity and technical prowess. I thrive on the challenge of transforming ideas into dynamic and responsive applications, ensuring that they not only function seamlessly but also provide an engaging user experience.",
        ACADEMIC: "Throughout my academic career, I have embraced opportunities to expand my knowledge and collaborate with fellow students on exciting projects. My experience has equipped me with a strong understanding of software development principles and best practices, empowering me to tackle complex problems with confidence.",
        FUTURE: "As I approach the next chapter of my career, I am eager to leverage my skills in a professional environment where I can contribute to impactful projects and continue to grow as a developer. I am excited about the possibilities that lie ahead and look forward to connecting with like-minded individuals who share my passion for technology. Thank you for visiting my portfolio, and I hope you enjoy exploring my work!"
    },

    // Design Process Text
    DESIGN_PROCESS: {
        TITLE: 'Process',
        SUBTITLE: 'Design process',
        DESCRIPTION: 'Crafting Innovative Solutions that Inspire and Elevate Brands Through Thoughtful Development.'
    },

    // FAQs
    FAQS: {
        TITLE: 'Frequently Asked Questions',
        DESCRIPTION: 'Common questions about my work and experience',
        QUESTIONS: [
            {
                question: 'What technologies do you specialize in?',
                answer: 'I specialize in modern web technologies including HTML5, CSS3, JavaScript (ES6+), Java, and Python. I also have experience with frameworks, version control (Git), and development tools like Visual Studio Code and PyCharm.'
            },
            {
                question: 'How long does it typically take to complete a project?',
                answer: 'Project timelines vary depending on complexity and requirements. A simple website might take 1-2 weeks, while more complex applications can take 4-8 weeks. I always provide detailed timelines during our initial consultation.'
            },
            {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes! I offer ongoing support and maintenance services. This includes bug fixes, updates, and minor modifications. I believe in building long-term relationships with my clients.'
            },
            {
                question: 'What is your development process?',
                answer: 'My process involves: 1) Understanding your vision and requirements, 2) Creating wireframes and prototypes, 3) Development with regular updates, 4) Testing and optimization, 5) Deployment and launch, 6) Ongoing support and maintenance.'
            },
            {
                question: 'Can you work with existing codebases?',
                answer: 'Absolutely! I have experience working with existing projects, whether it\'s adding new features, fixing bugs, optimizing performance, or modernizing legacy code. I always start by thoroughly understanding the existing architecture.'
            }
        ]
    }
};

// Make constants available globally
window.CONSTANTS = CONSTANTS;

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONSTANTS;
}