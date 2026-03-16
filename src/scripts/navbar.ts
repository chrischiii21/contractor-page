// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const topBar = document.getElementById('top-bar');

if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
}

// Hide top bar on scroll
let lastScrollTop = 0;
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (topBar) {
        if (scrollTop > scrollThreshold) {
            topBar.style.maxHeight = '0';
            topBar.style.overflow = 'hidden';
            topBar.style.opacity = '0';
        } else {
            topBar.style.maxHeight = '40px';
            topBar.style.overflow = 'visible';
            topBar.style.opacity = '1';
        }
    }

    lastScrollTop = scrollTop;
});

// Mobile Trades We Serve dropdown
const mobileTradesButton = document.getElementById('mobile-trades-button');
const mobileTradesMenu = document.getElementById('mobile-trades-menu');
const mobileTradesIcon = document.getElementById('mobile-trades-icon');

if (mobileTradesButton && mobileTradesMenu && mobileTradesIcon) {
    mobileTradesButton.addEventListener('click', () => {
        const isHidden = mobileTradesMenu.classList.contains('hidden');

        if (isHidden) {
            mobileTradesMenu.classList.remove('hidden');
            mobileTradesIcon.style.transform = 'rotate(180deg)';
        } else {
            mobileTradesMenu.classList.add('hidden');
            mobileTradesIcon.style.transform = 'rotate(0deg)';
        }
    });
}

// Mobile About dropdown
const mobileAboutButton = document.getElementById('mobile-about-button');
const mobileAboutMenu = document.getElementById('mobile-about-menu');
const mobileAboutIcon = document.getElementById('mobile-about-icon');

if (mobileAboutButton && mobileAboutMenu && mobileAboutIcon) {
    mobileAboutButton.addEventListener('click', () => {
        const isHidden = mobileAboutMenu.classList.contains('hidden');

        if (isHidden) {
            mobileAboutMenu.classList.remove('hidden');
            mobileAboutIcon.style.transform = 'rotate(180deg)';
        } else {
            mobileAboutMenu.classList.add('hidden');
            mobileAboutIcon.style.transform = 'rotate(0deg)';
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const nav = document.querySelector('nav');

    if (mobileMenu && !mobileMenu.classList.contains('hidden') && nav && !nav.contains(target)) {
        mobileMenu.classList.add('hidden');
        if (menuIcon && closeIcon) {
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }
});

// Close mobile menu on window resize to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        if (menuIcon && closeIcon) {
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }
});
