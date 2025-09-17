import { backToTop } from './findElements.js';

backToTop.addEventListener('click', toTop);
window.addEventListener('scroll', checkStart)
document.addEventListener('DOMContentLoaded', checkStart)

export function toTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function checkStart() {
    if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
}