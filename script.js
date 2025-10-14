const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

/**
 * Toggles the 'show-mobile-menu' class on the body element.
 * This class controls the visibility of the mobile navigation and the overlay (via CSS).
 */
const toggleMenu = () => {
    document.body.classList.toggle("show-mobile-menu");
};

// Event listeners to open/close the menu using the icons
if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener('click', toggleMenu);
    menuCloseButton.addEventListener('click', toggleMenu);
}

// Close the menu when a navigation link is clicked (useful for single-page apps)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Check if the menu is currently open before closing
        if (document.body.classList.contains("show-mobile-menu")) {
            toggleMenu();
        }
    });
});
