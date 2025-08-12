document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Clear previous messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    // Validate Name
    if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email
    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Enter a valid email address';
        isValid = false;
    }

    // Validate Message
    if (message === '') {
        messageError.textContent = 'Message cannot be empty';
        isValid = false;
    }

    // If valid, show success
    if (isValid) {
        successMessage.textContent = '✅ Form submitted successfully! (No actual sending)';
        successMessage.style.color = 'green';
        document.getElementById('contactForm').reset();
    }
});
