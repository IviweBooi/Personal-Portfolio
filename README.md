# Personal Portfolio - Iviwe Booi

![Portfolio Preview](assets/images/myLogo.png)

A modern, responsive personal portfolio website showcasing my skills, projects, and professional journey as a software developer.

## 🌟 Live Demo

[View Live Portfolio](https://iviwebooiportfolio.netlify.app)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contact Form Setup](#contact-form-setup)
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
- **SEO Optimised**: Meta tags and semantic HTML structure

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
│   ├── styles.css
│   └── media-queries.css
├── js/
│   ├── config.js          # EmailJS configuration
│   ├── handleForm.js      # Form validation and EmailJS integration
│   ├── handleForm.test.js # Form testing utilities
│   └── utils.js           # General utility functions
├── index.html
├── netlify.toml
├── .gitignore
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
- **Portfolio**: [https://iviwebooiportfolio.netlify.app]

---

⭐ **Star this repository if you found it helpful!**


*Built with ❤️ by Iviwe Booi* 

