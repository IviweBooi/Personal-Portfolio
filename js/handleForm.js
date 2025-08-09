const fullName = document.querySelector('.full-name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const websiteNiche = document.querySelector('.website-niche');
const message = document.querySelector('.message');
const submitBtn = document.querySelector('#submit-btn');

// Initialize EmailJS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Ensure config is loaded before initializing EmailJS
    if (window.CONFIG && window.CONFIG.EMAILJS_PUBLIC_KEY) {
        emailjs.init({
            publicKey: window.CONFIG.EMAILJS_PUBLIC_KEY,
        });
    } else {
        console.error('EmailJS configuration not found');
    }
});

function sendEmail(){
    // Validate form before sending
    if(!validateForm()){
        showError('Please fill in all required fields correctly.');
        return;
    }

    // Show loading state
    setLoadingState(true);
    
    const templateParams = {
        name: fullName.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        subject: websiteNiche.value.trim(),
        message: `
Name: ${fullName.value.trim()}
Email: ${email.value.trim()}
Phone: ${phone.value.trim()}
Website Niche: ${websiteNiche.value.trim()}

Message: ${message.value.trim()}
        `
    };

    // Check if EmailJS is properly configured
    if (!window.CONFIG || !window.CONFIG.EMAILJS_SERVICE_ID || !window.CONFIG.EMAILJS_TEMPLATE_ID) {
        setLoadingState(false);
        showError('Email service is not properly configured.');
        return;
    }

    emailjs.send(window.CONFIG.EMAILJS_SERVICE_ID, window.CONFIG.EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => {
        setLoadingState(false);
        showSuccess();
        resetForm();
    })
    .catch((error) => {
        setLoadingState(false);
        console.error('EmailJS Error:', error);
        showError('Failed to send message. Please try again or contact me directly.');
    });      
}

function validateForm() {
    // Trimmed values from the input fields
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const websiteNicheValue = websiteNiche.value.trim();
    const messageValue = message.value.trim();

    // Individual field validations
    const isNameValid = validateName(fullNameValue);
    const isEmailValid = validateEmail(emailValue);
    const isPhoneValid = validatePhone(phoneValue);
    const isNicheValid = websiteNicheValue.length >= 2;
    const isMessageValid = messageValue.length >= 10;

    // Overall form validity
    const isFormValid = isNameValid && isEmailValid && isPhoneValid && isNicheValid && isMessageValid;

    // Update field visual feedback
    updateFieldValidation(fullName, isNameValid);
    updateFieldValidation(email, isEmailValid);
    updateFieldValidation(phone, isPhoneValid);
    updateFieldValidation(websiteNiche, isNicheValid);
    updateFieldValidation(message, isMessageValid);

    // Update submit button state
    updateSubmitButton(isFormValid);

    return isFormValid;
}

// Attach event listeners to input fields
const inputs = [fullName, email, phone, websiteNiche, message];
inputs.forEach(input => {
    input.addEventListener('input', validateForm);
});

// Prevent form submission via Enter key and handle submit button
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    sendEmail(); // Call the sendEmail function directly
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default button behavior
    sendEmail(); // Call the sendEmail function directly
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.length > 0 && emailRegex.test(email);
}

function validateName(name) {
    return name.length >= 2 && /^[a-zA-Z\s]+$/.test(name);
}

function validatePhone(phone) {
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    // Accept phone numbers with 10-15 digits
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
}

function updateFieldValidation(field, isValid) {
    if (field.value.trim() === '') {
        // No validation styling for empty fields
        field.classList.remove('valid', 'invalid');
    } else if (isValid) {
        field.classList.remove('invalid');
        field.classList.add('valid');
    } else {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }
}

function updateSubmitButton(isValid) {
    submitBtn.disabled = !isValid;
    if (isValid) {
        submitBtn.classList.remove('disabled');
        submitBtn.classList.add('enabled');
    } else {
        submitBtn.classList.add('disabled');
        submitBtn.classList.remove('enabled');
    }
}

function setLoadingState(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.classList.add('loading');
    } else {
        submitBtn.textContent = 'Submit';
        submitBtn.classList.remove('loading');
        validateForm(); // Re-validate to set proper button state
    }
}

function showSuccess() {
    document.querySelector('#success').style.display = 'flex';
    document.querySelector('#error').style.display = 'none';
}

function showError(message) {
    const errorElement = document.querySelector('#error');
    const errorText = errorElement.querySelector('p');
    if (errorText) {
        errorText.textContent = message;
    }
    errorElement.style.display = 'flex';
    document.querySelector('#success').style.display = 'none';
}

function resetForm() {
    fullName.value = '';
    email.value = '';
    phone.value = '';
    websiteNiche.value = '';
    message.value = '';
    
    // Remove validation classes
    const inputs = [fullName, email, phone, websiteNiche, message];
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
    
    // Reset button state
    updateSubmitButton(false);
}



