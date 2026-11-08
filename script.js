const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

// Hamburger click karne par menu open/close hoga
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Kisi link par click karte hi menu apne aap close ho jaye
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

//contact page
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const business =
        document.getElementById("business").value;

    const phone =
        document.getElementById("phone").value;

    const message =
        document.getElementById("message").value;

    const whatsappMessage =
        `NEW WEBSITE INQUIRY
Name: ${name}
Email: ${email}
Business: ${business}
Phone: ${phone}
Project Details:
${message}`;

    const whatsappURL =
        `https://wa.me/919887560939?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
    form.reset();
});




