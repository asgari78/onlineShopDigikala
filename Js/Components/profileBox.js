import {
    profileBox,
    profileIcon,
    onAll2
} from '../Components/findElements.js';
export {
    openProfileBox
}
profileIcon.addEventListener('click', () => { openProfileBox() })
onAll2.addEventListener('click', () => { openProfileBox() })
function openProfileBox() {
    if (window.innerWidth >= 768) {
        if (!profileIcon.classList.contains('active')) {
            profileBox.style.display = 'block';
            profileIcon.classList.add('active');
            onAll2.style.display = 'block';
        } else {
            profileBox.style.display = 'none';
            onAll2.style.display = 'none';
            profileIcon.classList.remove('active');
        }
    } else {
        location.assign('../Pages/profile.html')
    }
}