// script.js

// Function to validate the contact form
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorContainer = document.getElementById('error-container');
    let isValid = true;
    errorContainer.innerHTML = ''; // Clear previous error messages

    if (name.trim() === '') {
        showError('Name is required.');
        isValid = false;
    }

    // A simple email validation pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        showError('Invalid email address.');
        isValid = false;
    }

    if (message.trim() === '') {
        showError('Message is required.');
        isValid = false;
    }

    return isValid;
}

// Function to display an error message
function showError(message) {
    const errorContainer = document.getElementById('error-container');
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = message;
    errorContainer.appendChild(errorParagraph);
}

// Add event listener for the contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        if (!validateContactForm()) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
}

const tracker = document.getElementById("mouse-tracker");

      document.addEventListener("mousemove", (e) => {
        const trail = document.createElement("div");
        trail.classList.add("trail");
        trail.style.left = `${e.pageX}px`;
        trail.style.top = `${e.pageY}px`;
        tracker.appendChild(trail);

        setTimeout(() => {
          trail.style.width = "0px";
          trail.style.height = "0px";
          trail.style.opacity = "0";
          setTimeout(() => {
            tracker.removeChild(trail);
          }, 400);
        }, 10);
      });