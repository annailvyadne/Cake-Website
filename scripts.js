document.addEventListener('DOMContentLoaded', () => {
    const aboutContent = document.querySelector('.about-content');

    const handleScroll = () => {
        const rect = aboutContent.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            aboutContent.classList.add('fade-in');
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to handle the animation
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply fade-in effect
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once the item is visible
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each gallery item
    galleryItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all card elements
    const cards = document.querySelectorAll('.card');

    // Function to handle the animation
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply fade-in effect
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once the card is visible
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Select all accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');

    // Function to handle the animation
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply fade-in effect
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once the item is visible
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each accordion button
    accordionButtons.forEach(button => {
        observer.observe(button);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Select contact form and info sections
    const contactForm = document.querySelector('.contact-form');
    const contactInfo = document.querySelector('.contact-info');

    // Function to handle the animation
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger fade-in
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the item is visible
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe contact form and info sections
    if (contactForm) observer.observe(contactForm);
    if (contactInfo) observer.observe(contactInfo);
});

