import "../Components/slider.js"
import "../Components/cartBox.js"
import "../Components/cellest.js"
import "../Components/footer.js"
import "../Components/megaListAd.js"
import "../Components/newst.js"
import "../Components/products.js"
import "../Components/profileBox.js"
import "../Components/questionIndex.js"
import "../Components/rightMenu.js"
import "../Components/searchBox.js"

import {
    mdjdIcon, menuIcon, onAll, onAll3, onAll2, onAll4, imgsSlider,
    menuBarCon, rightMenuDiv, supportBox, searchDiv,
} from '../Components/findElements.js';
import { openRightMenu, closeRightMenu } from '../Components/rightMenu.js';
import { creatProduct } from '../Components/shegeft.js';
document.addEventListener('DOMContentLoaded', () => {
    creatProduct();
    myResize();
})

window.addEventListener('resize', () => {
    myResize()
})
function myResize() {
    if (document.body.style.overflow === 'scroll') {
        document.body.style.width = `${innerWidth}px`;
    } else {
        document.body.style.width = `${innerWidth}px`;
    }
    document.body.style.height = `${innerHeight}px`;
    let fullItems = [onAll, onAll2, onAll3, onAll4];
    for (let fullItem of fullItems) {
        fullItem.style.width = `${innerWidth}px`;
        fullItem.style.height = `${innerHeight}px`;
    }
    imgsSlider.style.width = `${innerWidth}px`;
    menuBarCon.style.width = `${innerWidth}px`;
    rightMenuDiv.style.height = `${innerHeight}px`;
    if (supportBox.style.height) {
        supportBox.style.height = `${innerHeight}px`;
        supportBox.style.width = `${innerWidth}px`;
    }
    if (searchDiv.style.height) {
        searchDiv.style.height = `${innerHeight}px`;
        searchDiv.style.width = `${innerWidth}px`;
    }
}
mdjdIcon.addEventListener('click', () => { location.reload() })
menuIcon.addEventListener('click', () => { openRightMenu() })
onAll.addEventListener('click', () => { closeRightMenu() })
