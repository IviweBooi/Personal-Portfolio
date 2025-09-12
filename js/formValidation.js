// Form validation and feedback functionality

class FormValidator {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.inputs = {
            name: this.form.querySelector('input[name="name"]'),
            email: this.form.querySelector('input[name="email"]'),
            phone: this.form.querySelector('input[name="phone"]'),
            niche: this.form.querySelector('input[name="website-niche"]'),
            message: this.form.querySelector('textarea[name="message"]')
        };
        this.errorElements = {
            name: document.getElementById('name-error'),
            email: document.getElementById('email-error'),
            phone: document.getElementById('phone-error'),
            niche: document.getElementById('niche-error'),
            message: document.getElementById('message-error')
        };
        this.init();
    }

    init() {
        // Add event listeners for real-time validation
        Object.keys(this.inputs).forEach(key => {
            const input = this.inputs[key];
            input.addEventListener('input', () => this.handleInput(key, input));
            input.addEventListener('blur', () => this.validateField(key, input));
        });

        // Initialize character counters
        this.updateCharacterCounters();
    }

    handleInput(fieldName, input) {
        // Only update character counter for textarea
        if (fieldName === 'message') {
            this.updateCharacterCounter(fieldName, input);
        }
        this.clearError(fieldName);
        
        // Real-time validation for some fields
        if (fieldName === 'email' && input.value.length > 0) {
            this.validateEmail(input.value, fieldName);
        }
    }

    updateCharacterCounter(fieldName, input) {
        if (fieldName !== 'message') return;
        
        const inputGroup = input.closest('.input-group');
        const charCount = inputGroup.querySelector('.char-count');
        
        if (charCount) {
            const maxLength = input.getAttribute('maxlength');
            const currentLength = input.value.length;
            charCount.textContent = `${currentLength}/${maxLength}`;
            
            // Change color when approaching limit
            if (currentLength > maxLength * 0.8) {
                charCount.style.color = 'rgba(255, 179, 50, 0.9)';
            } else if (currentLength === parseInt(maxLength)) {
                charCount.style.color = 'rgba(255, 79, 79, 0.9)';
            } else {
                charCount.style.color = 'rgba(255,255,255,0.5)';
            }
        }
    }

    updateCharacterCounters() {
        // Only initialize character counter for textarea
        this.updateCharacterCounter('message', this.inputs.message);
    }

    validateField(fieldName, input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    errorMessage = 'Name must be at least 2 characters long';
                    isValid = false;
                } else if (value.length > 50) {
                    errorMessage = 'Name cannot exceed 50 characters';
                    isValid = false;
                } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                    errorMessage = 'Name can only contain letters and spaces';
                    isValid = false;
                }
                break;

            case 'email':
                isValid = this.validateEmail(value, fieldName);
                break;

            case 'phone':
                if (value.length < 10) {
                    errorMessage = 'Phone number must be at least 10 digits';
                    isValid = false;
                } else if (value.length > 15) {
                    errorMessage = 'Phone number cannot exceed 15 digits';
                    isValid = false;
                } else if (!/^[+]?[0-9\s\-()]+$/.test(value)) {
                    errorMessage = 'Please enter a valid phone number';
                    isValid = false;
                }
                break;

            case 'niche':
                if (value.length < 3) {
                    errorMessage = 'Please describe your project (minimum 3 characters)';
                    isValid = false;
                } else if (value.length > 100) {
                    errorMessage = 'Description cannot exceed 100 characters';
                    isValid = false;
                }
                break;

            case 'message':
                if (value.length < 10) {
                    errorMessage = 'Message must be at least 10 characters long';
                    isValid = false;
                } else if (value.length > 500) {
                    errorMessage = 'Message cannot exceed 500 characters';
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            this.showError(fieldName, errorMessage);
            input.classList.add('invalid');
            input.classList.remove('valid');
        } else {
            this.clearError(fieldName);
            input.classList.add('valid');
            input.classList.remove('invalid');
        }

        return isValid;
    }

    validateEmail(email, fieldName) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;
        let errorMessage = '';

        if (email.length === 0) {
            errorMessage = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }

        if (!isValid) {
            this.showError(fieldName, errorMessage);
        }

        return isValid;
    }

    showError(fieldName, message) {
        const errorElement = this.errorElements[fieldName];
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    clearError(fieldName) {
        const errorElement = this.errorElements[fieldName];
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
    }

    validateForm() {
        let isFormValid = true;
        
        Object.keys(this.inputs).forEach(key => {
            const input = this.inputs[key];
            const fieldValid = this.validateField(key, input);
            if (!fieldValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }
}

// Initialize form validator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FormValidator();
});