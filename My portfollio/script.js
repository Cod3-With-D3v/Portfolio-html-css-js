

var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true


})



// Get form element
const contactForm = document.querySelector('#contact-form');

// Add submit event listener
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Send email using mailto
    const mailtoLink = `mailto:devusaini159@gmail.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    // Open default mail client
    window.location.href = mailtoLink;

    // Reset form
    contactForm.reset();
});

