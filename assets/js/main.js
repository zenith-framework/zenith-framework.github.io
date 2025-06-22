// Navigation toggle for mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebar-close');
const backToTop = document.getElementById('back-to-top');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

if (sidebarClose) {
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
}

// Close sidebar on link click (for mobile UX)
document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});

// Code tabs functionality
document.querySelectorAll('.code-tabs').forEach(tabs => {
    const tabButtons = tabs.querySelectorAll('.tab-btn');
    const tabPanes = tabs.querySelectorAll('.tab-pane');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.getAttribute('data-tab');
            tabs.querySelector(`#${tab}`).classList.add('active');
        });
    });
});

// Back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Sidebar search filter
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        document.querySelectorAll('.sidebar-menu li').forEach(li => {
            const text = li.textContent.toLowerCase();
            li.style.display = text.includes(query) ? '' : 'none';
        });
    });
} 