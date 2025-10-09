# Personal Portfolio - Iviwe Booi

![Portfolio Preview](assets/images/myLogo.png)

A modern, responsive, and SEO-optimized personal portfolio website showcasing my skills, projects, and professional journey as a Full Stack Developer.

## 🌟 Live Demo

[View Live Portfolio](https://iviwebooi.co.za)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [SEO & Performance](#seo--performance)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contact Form Setup](#contact-form-setup)
- [Security](#security)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This portfolio website represents my journey as a software developer and final-year Computer Science student at the University of Cape Town (UCT). It showcases my technical skills, projects, and certifications, and provides a professional platform for potential employers and collaborators to learn about my work.

### Key Highlights:
- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimised for all devices and screen sizes
- **Interactive Elements**: Custom cursor, smooth scrolling, and dynamic content
- **Contact Integration**: Fully functional contact form with EmailJS and robust validation
- **Real-time Validation**: Live form validation with visual feedback
- **Project Showcase**: Yet to show detailed project presentations with videos and descriptions

## ✨ Features

### 🎨 Design & UX
- **Custom Cursor**: Smooth animated cursor that follows mouse movement
- **Smooth Scrolling**: Seamless navigation between sections
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Modern Animations**: Subtle transitions and hover effects
- **Professional Typography**: Clean, readable font hierarchy

### 📱 Sections
- **Landing Page**: Compelling introduction with call-to-action buttons
- **About Me**: Personal story and professional background
- **Projects**: Showcase of technical projects with videos and descriptions
- **Certifications**: Professional certifications and achievements
- **FAQs**: Common questions about my work and experience
- **Contact**: Professional contact form and social links

### 🔧 Functionality
- **Contact Form**: Advanced EmailJS integration with comprehensive validation
- **Form Validation**: Real-time validation with visual feedback (name, email, phone, message)
- **Loading States**: Visual feedback during form submission with spinner animation
- **Error Handling**: Graceful error handling with user-friendly messages
- **Resume Download**: Direct download link for my CV
- **Social Links**: Professional social media integration
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Icon Optimization**: Intelligent SVG icon caching and preloading system
- **Performance Monitoring**: Real-time icon load time tracking and optimization

### 🚀 SEO & Performance
- **Complete SEO Suite**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Google Search Console**: Verified and indexed for search visibility
- **XML Sitemap**: Human-readable styled sitemap with visual enhancements
- **Robots.txt**: Proper search engine crawling directives
- **Semantic HTML**: Schema.org structured data for rich snippets
- **Performance Optimized**: Icon caching, lazy loading, and optimized assets
- **Mobile-First**: Responsive design with optimal mobile performance

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and custom animations
- **JavaScript (ES6+)**: Interactive functionality, form validation, and animations
- **EmailJS**: Advanced contact form integration with error handling

### Deployment & Hosting
- **Netlify**: Static site hosting and deployment
- **Git**: Version control and collaboration

### Design & Assets
- **Custom Icons**: SVG icons for consistent design
- **Optimized Images**: Compressed images for fast loading
- **Video Content**: Project demonstration videos

## 🔍 SEO & Performance

This portfolio is fully optimized for search engines and performance:

### Search Engine Optimization
- **Meta Tags**: Complete set of meta tags including title, description, keywords, and viewport
- **Open Graph**: Facebook and social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing with custom cards
- **Structured Data**: Schema.org Person markup for rich snippets
- **Google Search Console**: Verified property for search performance monitoring
- **XML Sitemap**: Comprehensive sitemap with visual styling for human readability
- **Robots.txt**: Proper crawling directives for search engines

### Performance Optimization
- **Icon Optimizer**: Intelligent SVG icon caching and preloading system
  - Automatic detection of slow-loading icons (>50ms threshold)
  - Aggressive caching using Cache API
  - Critical icon preloading for instant access
  - Performance monitoring with console logging
- **Optimized Assets**: Compressed images and minified code
- **Lazy Loading**: Efficient resource loading strategies
- **Mobile-First**: Responsive design optimized for all devices

### Technical SEO Features
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Accessibility**: ARIA labels and keyboard navigation support
- **Fast Loading**: Optimized for Core Web Vitals
- **Mobile Responsive**: Perfect mobile experience for better rankings

## 📁 Project Structure

```
Personal Portfolio/
├── assets/
│   ├── files/
│   │   └── resume.pdf
│   ├── icons/
│   │   ├── arrow-down.svg
│   │   ├── arrow-up.svg
│   │   ├── github.svg
│   │   ├── linkedin.svg
│   │   └── ... (other icons)
│   ├── images/
│   │   ├── myLogo.png
│   │   ├── me.jpeg
│   │   ├── gradient.png
│   │   └── ... (other images)
│   └── videos/
│       ├── calculator.mp4
│       ├── weatherApp.mp4
│       └── ... (project videos)
├── css/
│   ├── styles.css         # Main stylesheet
│   ├── media-queries.css  # Responsive design
│   └── variables.css      # CSS custom properties
├── js/
│   ├── config.example.js  # EmailJS configuration template (safe for git)
│   ├── config.js          # EmailJS configuration (gitignored for security)
│   ├── constants.js       # Application constants
│   ├── formValidation.js  # Form validation logic
│   ├── handleForm.js      # Form submission and EmailJS integration
│   ├── handleForm.test.js # Form testing utilities
│   ├── iconOptimizer.js   # SVG icon optimization and caching
│   ├── init.js           # Application initialization
│   └── utils.js          # General utility functions
├── index.html
├── netlify.toml          # Netlify deployment configuration
├── robots.txt            # Search engine crawling directives
├── sitemap.xml           # XML sitemap for search engines
├── sitemap.xsl           # XSL stylesheet for sitemap visualization
├── .gitignore            # Git ignore rules (includes config.js)
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Git (for version control)
- Text editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Iviwebooi/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Open the project**
   ```bash
   # Open index.html in your browser
   # Or use a local server for development
   python -m http.server 8000
   # or
   npx serve.
   ```

3. **Customize the content**
   - Update personal information in `index.html`
   - Replace images in `assets/images/`
   - Modify styling in `css/styles.css`
   - Update JavaScript functionality in `js/` files

## 🌐 Deployment

### Netlify Deployment

1. **Connect to Netlify**
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Configure build settings (publish directory: `.`)

2. **Environment Variables**
   Set up the following environment variables in Netlify:
   ```
   EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```

3. **Deploy**
   - Netlify will automatically deploy on every push to the main branch
   - Your site will be available at `https://your-site-name.netlify.app`

### Manual Deployment
- Upload all files to your web hosting provider
- Ensure all file paths are correct
- Test the contact form functionality

## 📧 Contact Form Setup

### EmailJS Configuration

The contact form features advanced validation and EmailJS integration for reliable email delivery.

1. **Create EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new email service (Gmail, Outlook, etc.)
   - Note your Public Key, Service ID, and Template ID

2. **Create Email Template**
   ```html
   Subject: New Contact from Portfolio - {{name}}
   
   Name: {{name}}
   Email: {{email}}
   Phone: {{phone}}
   Website Niche: {{subject}}
   
   Message:
   {{message}}
   ```

3. **Configure Environment Variables**
   For production (Netlify), set these environment variables:
   ```
   EMAILJS_PUBLIC_KEY=your_public_key_here
   EMAILJS_SERVICE_ID=your_service_id_here
   EMAILJS_TEMPLATE_ID=your_template_id_here
   ```
   
   For local development, update `js/config.js` with your credentials.

4. **Form Validation Features**
   - **Name**: Minimum 2 characters, letters and spaces only
   - **Email**: Valid email format validation
   - **Phone**: 10-15 digit phone numbers (flexible formatting)
   - **Website Niche**: Minimum 2 characters
   - **Message**: Minimum 10 characters
   - **Real-time Feedback**: Visual validation with colored borders
   - **Loading States**: Spinner animation during submission

5. **Test the Form**
   - Fill out all fields with valid data
   - Submit and check for success/error messages
   - Verify emails are received correctly
   - Test validation by entering invalid data

## 🔒 Security

This portfolio implements several security best practices:

### Configuration Security
- **Sensitive Data Protection**: EmailJS configuration keys are excluded from git tracking
- **Environment Variables**: Production credentials stored securely in Netlify environment variables
- **Git Ignore**: `config.js` file containing API keys is properly gitignored
- **Example Configuration**: `config.example.js` provides a safe template for setup

### Development Security
- **Local Development**: Use actual credentials in local `config.js` (not tracked)
- **Production Deployment**: Credentials injected via environment variables
- **No Hardcoded Secrets**: All sensitive data properly externalized

### Setup Instructions
1. **Local Development**:
   ```bash
   # Copy the example config
   cp js/config.example.js js/config.js
   # Update js/config.js with your actual EmailJS credentials
   ```

2. **Production Deployment**:
   - Set environment variables in Netlify dashboard
   - Credentials are automatically injected during build
   - No manual configuration needed

### Security Features
- **Form Validation**: Prevents malicious input and ensures data integrity
- **Error Handling**: Graceful error handling without exposing sensitive information
- **HTTPS**: Secure communication for all form submissions
- **Input Sanitization**: Proper validation and sanitization of user inputs

## 🎨 Customization

### Personal Information
- Update name, title, and description in `index.html`
- Replace profile image in `assets/images/me.jpeg`
- Update resume in `assets/files/resume.pdf`
- Update contact information (email, phone, social links)

### EmailJS Configuration
- Update EmailJS credentials in `js/config.js` for local development
- Set environment variables for production deployment
- Customize email template in your EmailJS dashboard
- Modify validation rules in `js/handleForm.js` if needed

### Styling
- Modify colours in `css/styles.css`
- Update fonts and typography
- Adjust animations and transitions
- Customize form validation styles (valid/invalid states)

### Projects
- Add new projects to the projects section
- Include project videos in `assets/videos/`
- Update project descriptions and links

### Social Links
- Update social media URLs in the contact section
- Add or remove social platforms as needed

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: booiiviwe4394@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/iviwe-booi-6b467129a/]
- **GitHub**: [https://github.com/IviweBooi]
- **Portfolio**: [https://iviwebooi.co.za]

---

## 🎯 Recent Updates

- ✅ **SEO Optimization**: Complete SEO suite with meta tags, structured data, and sitemap
- ✅ **Performance Enhancement**: Icon optimization system with caching and preloading
- ✅ **Security Improvements**: Proper handling of sensitive configuration data
- ✅ **Google Search Console**: Verified and indexed for search visibility
- ✅ **Styled Sitemap**: Human-readable XML sitemap with visual enhancements

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Iviwe Booi - Full Stack Developer*

