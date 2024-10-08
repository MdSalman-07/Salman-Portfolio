const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active'); // Toggle the active class on the menu toggle
});

document.getElementById('download-pdf').onclick = function() {
    const pdfUrl = 'assets/resume/Salman_Ansari - Oct, 2024.pdf'; // Update this with the actual path to your PDF file
    window.open(pdfUrl, '_blank'); // Open PDF in a new tab
};


// portfolio section
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-item');
    const tabElements = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    tabElements.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'grid';
    const activeTab = Array.from(tabElements).find(tab => tab.textContent === tabId.replace('tab', 'Tab '));
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

//skills
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});
 




