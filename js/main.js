// This file contains the JavaScript functionality for the CatPhotoApp.
// It includes the logic for toggling dark mode and handling the burger button's click events to show or hide the navigation menu.

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const burgerButton = document.getElementById('burger-button');
    const navMenu = document.getElementById('nav-menu');

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Toggle navigation menu
    burgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});