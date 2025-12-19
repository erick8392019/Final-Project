
    function openModal() {
        document.getElementById("signupModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("signupModal").style.display = "none";
    }

    // Function to show the modal when a "Sign up" button is clicked
    const signUpButtons = document.querySelectorAll('.membership button');
    signUpButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Form validation
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Stop form submission for validation

        const email = document.getElementById('email').value;
        const cardNumber = document.getElementById('cardNumber').value;

        // Check if email format is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if credit card is numeric
        if (isNaN(cardNumber) || cardNumber.length < 13 || cardNumber.length > 19) {
            alert("Please enter a valid credit card number (13-19 digits).");
            return;
        }

        // If validation passes, you can process the form
        alert("Registration successful!");
        closeModal();

        // Optionally, clear the form fields after submission
        document.getElementById('registrationForm').reset();
    });
