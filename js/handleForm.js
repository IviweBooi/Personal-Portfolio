const fullName = document.querySelector('.full-name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const websiteNiche = document.querySelector('.website-niche');
const message = document.querySelector('.message');
const submitBtn = document.querySelector('#submit-btn');

function sendEmail(){
    if(!validateForm()){
        return;
    }
    const templateParams = {
        name: fullName.value,
        email: email.value,
        message: `
            Name: ${fullName.value}
            Email: ${email.value}
            Phone: ${phone.value}
            Website Niche: ${websiteNiche.value}
            
            Message: ${message.value}
        `
    };

    emailjs.send(window.CONFIG.EMAILJS_SERVICE_ID, window.CONFIG.EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => {
        document.querySelector('#success').style.display = 'flex';
         submitBtn.classList.remove('enabled');
        submitBtn.classList.add('disabled');
        // reset the form
        fullName.value = '';
        email.value = '';
        phone.value = '';
        websiteNiche.value = '';
        message.value = '';
        },
        (error) => {
            console.log('FAILED...', error);
            document.querySelector('#error').style.display = 'flex';
        },
    );      
}

function validateForm() {
    // Initialize the validity flag to true
    let isValid = true;

    // Trimmed values from the input fields
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const websiteNicheValue = websiteNiche.value.trim();
    const messageValue = message.value.trim();

    // Array of input values for validation
    const inputValues = [fullNameValue, emailValue, phoneValue, websiteNicheValue, messageValue];

    // Check if any field is empty
    for (const value of inputValues) {
        if (!value) {
            isValid = false;
            break; // Exit the loop if any field is invalid
        }
    }

    // Enable or disable the submit button based on validation
    submitBtn.disabled = !isValid; // Disable if not valid

    // Update button classes based on the validity state
    if (isValid && validateEmail(emailValue)) {
        submitBtn.classList.remove('disabled');
        submitBtn.classList.add('enabled');
    } else {
        submitBtn.classList.add('disabled');
        submitBtn.classList.remove('enabled');
    }

    return isValid; // Return the validity status
}

// Attach event listeners to input fields
const inputs = [fullName, email, phone, websiteNiche, message];
inputs.forEach(input => {
    input.addEventListener('input', validateForm);
});


submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default button behavior
    sendEmail(); // Call the sendEmail function directly
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


