document.addEventListener('DOMContentLoaded', () => {
    // Navigation button handlers
    const portfolioBtn = document.getElementById('portfolioBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');

    // Navigation functions
    const navigateTo = (page) => {
        window.location.href = `/${page}`;
    };

    // Event listeners
    if(portfolioBtn) {
        portfolioBtn.addEventListener('click', () => navigateTo('portfolio.html'));
    }
    
    if(aboutBtn) {
        aboutBtn.addEventListener('click', () => navigateTo('about.html'));
    }
    
    if(contactBtn) {
        contactBtn.addEventListener('click', () => navigateTo('contact.html'));
    }

    // Back to home button handler (for other pages)
    const homeBtn = document.getElementById('/homeBtn');
    if(homeBtn) {
        homeBtn.addEventListener('click', () => navigateTo('index.html'));
    }
});
