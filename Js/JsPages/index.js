import {
    banner, mdjdIcon, menuIcon, onAll, onAll3,
    profileIcon, onAll2, AddressDiv, onAll4,
    closeAddressBtn, imgsSlider,
    menuBarCon, rightMenuDiv, supportBox, searchDiv, ulProduct
} from '../Components/findElements.js';
import { openRightMenu, closeRightMenu } from '../Components/rightMenu.js';
import { openSearchBox } from '../Components/searchBox.js';
import { openProfileBox } from '../Components/profileBox.js';
import { openCartBox, closeCartBox } from '../Components/cartBox.js';
import { openAddressBox, closeAddressBox } from '../Components/selectAddress.js';
import { openSupportBox } from '../Components/supportBox.js';
import { creatProduct } from '../Components/shegeft.js';
import { showBottuns, hideBottuns } from '../Components/slider.js';
import { openRed, closeRed } from '../Components/megaListAd.js';
import { } from '../Components/shegeft.js';
import { filtering } from '../Components/newst.js';
import { filterCell } from '../Components/cellest.js';
import { toTop } from '../Components/footer.js';
export { myResize }
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
    banner.style.width = `${innerWidth}px`;
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
