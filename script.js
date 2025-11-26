/*
    SCRIPT.JS - AuraGear Gaming Mouse Site
    Simple JavaScript for UI Interactivity
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');

    navToggle.addEventListener('click', () => {
        // Toggle the 'nav-open' class on the menu
        navMenu.classList.toggle('nav-open');
        
        // Toggle hamburger icon animation
        hamburger.classList.toggle('is-active');

        // Toggle ARIA expanded attribute for accessibility
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Simple functionality for the Contact Form (prevents submission for static site)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real application, you would send this data to a server.
            alert('Thank you for your message! This is a static demo, so the data was not sent to a server.');
            
            // Optionally clear the form
            contactForm.reset();
        });
    }

    // Optional: Add a subtle animation/reveal for sections on scroll (not implemented for simplicity)
});