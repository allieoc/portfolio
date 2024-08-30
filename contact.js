document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email via EmailJS
    emailjs.send("service_hja0c6j", "template_3cwc7zl", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        // Hide the form
        document.getElementById('contact-form').style.display = 'none';

        // Show the thank you message
        document.getElementById('thank-you-message').style.display = 'block';
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});