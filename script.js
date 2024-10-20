document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Hide the form and show the thank you message
    document.getElementById('contact-form').style.display = 'none'; // Optionally hide the form
    document.getElementById('thank-you').style.display = 'block'; // Show thank you message
});
