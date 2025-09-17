import {
    itemsHL, redHover, boxMega, categoryIB, leftList, onAll2
} from './findElements.js';
import {
    category
} from './products.js';
export { openRed, closeRed }
categoryIB.children[0].addEventListener('mouseover', openMega);
categoryIB.children[1].addEventListener('mouseover', openMega);
categoryIB.addEventListener('mouseleave', closeMega);
let ulparent;
let timeCloseMega;
for (let itemHL of itemsHL) {
    itemHL.addEventListener('mouseover', openRed);
    itemHL.addEventListener('mouseleave', closeRed);
    ulparent = itemHL.parentNode;
}
document.addEventListener('DOMContentLoaded', () => {
    boxMega.style.display = 'none';
    let subLiNames;
    let myCat = new category();
    let LiNames = myCat.daste;
    let LiIcons = myCat.icons;
    for (let i = 0; i < LiNames.length; i++) {
        let newLi = document.createElement('li');
        let txt = document.createTextNode(LiNames[i]);
        let icon = document.createElement('i');
        icon.classList.add(`fa`);
        icon.classList.add(`${LiIcons[i]}`);
        newLi.appendChild(icon);
        newLi.appendChild(txt);
        newLi.id = i;
        boxMega.children[0].children[0].appendChild(newLi);
        if (i === 0) {
            newLi.classList.add('active');
            createSubLi()
        };
        newLi.addEventListener('mouseover', toggleActive);
    }
    function toggleActive(e) {
        let allLis = boxMega.children[0].children[0].children;
        for (let allLi of allLis) {
            if (allLi.classList.contains('active')) {
                allLi.classList.remove('active')
            }
        }
        if (!e.target.classList.contains('active')) {
            e.target.classList.add('active')
        }
        createSubLi();
    }
    function createSubLi() {
        boxMega.children[1].children[1].innerHTML = '';
        let allLis = boxMega.children[0].children[0].children;
        for (let allLi of allLis) {
            if (allLi.classList.contains('active')) {
                subLiNames = myCat.arrSubs[allLi.id];
                for (let subLiName of subLiNames) {
                    let newSubLi = document.createElement('li');
                    let Subtxt = document.createTextNode(subLiName);
                    newSubLi.appendChild(Subtxt);
                    boxMega.children[1].children[1].appendChild(newSubLi);
                }
            }
        }
    }
})
function openRed(e) {
    let itemWidth = parseFloat(e.target.clientWidth);
    let rect = e.target.getBoundingClientRect();
    let ulRect = e.target.parentNode.getBoundingClientRect();
    let itemPos = parseFloat(rect.left - ulRect.left + 1);
    redHover.style.left = `${itemPos}px`;
    redHover.style.width = `${itemWidth}px`;
}
function closeRed() {
    redHover.style.width = `0px`;
}
function openMega(e) {
    if (!boxMega.classList.contains('active')) {
        clearTimeout(timeCloseMega);
        boxMega.style.display = 'flex';
        boxMega.classList.remove('off')
        boxMega.classList.add('active')
    }
}
function closeMega(e) {
    e.preventDefault();
    boxMega.classList.add('off');
    boxMega.classList.remove('active');
    timeCloseMega = setTimeout(() => {
        boxMega.style.display = 'none';
    }, 300);
}