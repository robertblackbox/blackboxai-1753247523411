// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize date input with today's date
    const dateInput = document.querySelector('.date-input');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
    
    // Handle swap locations functionality
    const swapIcon = document.querySelector('.swap-icon');
    const pickupInput = document.querySelector('.pickup .location-input');
    const dropoffInput = document.querySelector('.dropoff .location-input');
    
    if (swapIcon && pickupInput && dropoffInput) {
        swapIcon.addEventListener('click', function() {
            const pickupValue = pickupInput.value;
            const dropoffValue = dropoffInput.value;
            
            pickupInput.value = dropoffValue;
            dropoffInput.value = pickupValue;
            
            // Add visual feedback
            swapIcon.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                swapIcon.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }
    
    // Handle form submission
    const seePricesBtn = document.querySelector('.see-prices-btn');
    const bookingForm = document.querySelector('.booking-form');
    
    if (seePricesBtn && bookingForm) {
        seePricesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pickup = pickupInput.value.trim();
            const dropoff = dropoffInput.value.trim();
            
            // Basic validation
            if (!pickup) {
                alert('Please enter a pickup location');
                pickupInput.focus();
                return;
            }
            
            if (!dropoff) {
                alert('Please enter a dropoff location');
                dropoffInput.focus();
                return;
            }
            
            // Show loading state
            const originalText = seePricesBtn.textContent;
            seePricesBtn.textContent = 'Loading...';
            seePricesBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                seePricesBtn.textContent = originalText;
                seePricesBtn.disabled = false;
                
                // In a real app, this would redirect to pricing page
                alert(`Searching rides from ${pickup} to ${dropoff}`);
            }, 1500);
        });
    }
    
    // Handle dropdown menu (About section)
    const dropdownLink = document.querySelector('.dropdown');
    if (dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would show a dropdown menu
            console.log('About dropdown clicked');
        });
    }
    
    // Handle mobile menu toggle (for responsive design)
    function handleMobileMenu() {
        const header = document.querySelector('.header');
        const nav = document.querySelector('.main-nav');
        
        if (window.innerWidth <= 768) {
            // Add mobile menu functionality if needed
            console.log('Mobile view detected');
        }
    }
    
    // Listen for window resize
    window.addEventListener('resize', handleMobileMenu);
    handleMobileMenu(); // Call on initial load
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle login/signup buttons
    const loginButtons = document.querySelectorAll('.login-btn, .login-link');
    const signupButtons = document.querySelectorAll('.signup-btn, .create-account-link');
    const getStartedButtons = document.querySelectorAll('.get-started-btn');
    
    loginButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would redirect to login page
            console.log('Login clicked');
            alert('Redirecting to login page...');
        });
    });
    
    signupButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would redirect to signup page
            console.log('Signup clicked');
            alert('Redirecting to signup page...');
        });
    });
    
    getStartedButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would redirect to driver signup
            console.log('Get started clicked');
            alert('Redirecting to driver signup...');
        });
    });
    
    // Handle language selector
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would show language options
            console.log('Language selector clicked');
        });
    }
    
    // Add loading states to buttons
    function addLoadingState(button, originalText, loadingText = 'Loading...') {
        button.textContent = loadingText;
        button.disabled = true;
        button.style.opacity = '0.7';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.opacity = '1';
        }, 1000);
    }
    
    // Handle app download links
    const appLinks = document.querySelectorAll('.app-card');
    appLinks.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.qr-code')) {
                e.preventDefault();
                console.log('App download clicked');
                alert('Redirecting to app store...');
            }
        });
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, .nav-link, .app-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // Handle form input focus states
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = '#000';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = '';
        });
    });
    
    // Add animation to swap icon
    if (swapIcon) {
        swapIcon.style.transition = 'transform 0.3s ease';
        swapIcon.style.cursor = 'pointer';
    }
    
    // Console log for debugging
    console.log('Uber Lebanon website loaded successfully');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page is hidden');
    } else {
        console.log('Page is visible');
    }
});

// Error handling for any JavaScript errors
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});
