import {
    rightMenuDiv,
    onAll,
    categoryItems,
    lessons
} from '../Components/findElements.js';
export {
    openRightMenu,
    closeRightMenu,
    parentTarget,
    parentIndex
}
let parentTarget;
let parentIndex;
function openRightMenu() {
    rightMenuDiv.classList.add('opened');
    onAll.style.display = 'block';
    document.body.style.overflowY = 'hidden';
}
function closeRightMenu() {
    rightMenuDiv.classList.remove('opened');
    onAll.style.display = 'none';
    document.body.style.overflowY = 'scroll';
}
for (let categoryItem of categoryItems) {
    categoryItem.addEventListener('click', () => {
        if (categoryItem.children[1]) {
            if (categoryItem.classList.contains('active')) {
                for (let ci of categoryItems) {
                    closeCategoryLi(ci);
                }
                openCategoryLi(categoryItem);
            } else {
                closeCategoryLi(categoryItem);
            }
        } else {
            parentTarget = categoryItem.id;
        }

    })
}
for (let lesson of lessons) {
    lesson.addEventListener('click', (e) => {
        parentTarget = lesson.innerHTML;
        parentIndex = lesson.parentElement.parentElement.id;
        location.assign('../../pages/category.html');
        e.stopPropagation();
    })
}
function openCategoryLi(item) {
    item.classList.remove('active');
    item.classList.add('openDone');
    if (item.children[1]) {
        item.children[1].className = 'fa fa-angle-up';
    }
}
function closeCategoryLi(item) {
    item.classList.add('active');
    item.classList.remove('openDone');
    if (item.children[1]) {
        item.children[1].className = 'fa fa-angle-down'
    }
}