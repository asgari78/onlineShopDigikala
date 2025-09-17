import {
    products, AllProducts
} from '../Components/products.js';
import { updateCart } from './cartBox.js';
export {
    creatProduct, updateLi
}
let shegPrdcts = [];
AllProducts.map(item => {
    if (item.Shegeft) {
        shegPrdcts.push(item)
    }
})
function creatProduct() {
    for (let shegPrdct of shegPrdcts) {
        shegPrdct.creatShegeftProduct();
    }
}
let ShgPrdctLis;
let liImgs = [];
let liNames = [];
let liAddBtns = [];
let liMinBtns = [];
let liCounts = [];
let myLi;
window.addEventListener('DOMContentLoaded', () => {
    ShgPrdctLis = document.querySelectorAll('li.offProduct');
    for (let ShgPrdctLi of ShgPrdctLis) {
        liImgs.push(ShgPrdctLi.children[0]);
        liNames.push(ShgPrdctLi.children[1]);
        liAddBtns.push(ShgPrdctLi.children[5].children[2]);
        liMinBtns.push(ShgPrdctLi.children[5].children[0]);
        liCounts.push(ShgPrdctLi.children[5].children[1]);
    }
    for (let i = 0; i < ShgPrdctLis.length; i++) {
        mytime.push(i);
    }
    for (let liCount of liCounts) {
        liCount.addEventListener('click', (e) => {
            if (liCount.parentNode.classList.contains('offMoodFull')) {
                liCount.parentNode.classList.remove('offMoodFull');
                liCount.parentNode.classList.add('onMood');
            }
            myLi = e.target.parentNode.parentNode;
            let myUlArr = myLi.parentNode.children;
            let numm = [...myUlArr].indexOf(myLi) - 1;
            clearInterval(mytime[numm]);
            mytime[numm] = setInterval(() => { timeOffOn(numm) }, 3000);
        })
    }
    for (let liAddBtn of liAddBtns) {
        liAddBtn.addEventListener('click', addToCart)
    }
    for (let liMinBtn of liMinBtns) {
        liMinBtn.addEventListener('click', remToCart)
    }
})
function timeOffOn(number) {
    myLi = liAddBtns[number].parentNode.parentNode;
    let myUlArr = myLi.parentNode.children;
    let numm = [...myUlArr].indexOf(myLi) - 1;
    if (parseInt(shegPrdcts[numm].countInCart) == 0) {
        liAddBtns[number].parentNode.classList.remove('onMood');
        liAddBtns[number].parentNode.classList.remove('offMoodFull');
        liAddBtns[number].parentNode.classList.add('offMood');
    } else {
        liAddBtns[number].parentNode.classList.remove('onMood');
        liAddBtns[number].parentNode.classList.remove('offMood');
        liAddBtns[number].parentNode.classList.add('offMoodFull');
    }
    clearInterval(mytime[number]);
}
let mytime = [];
function addToCart(e) {
    myLi = e.target.parentNode.parentNode;
    let numm = [...ShgPrdctLis].indexOf(myLi);
    if (e.target.parentNode.classList.contains('offMood')) {
        e.target.parentNode.classList.remove('offMood');
        e.target.parentNode.classList.add('onMood');
    }
    clearInterval(mytime[numm]);
    mytime[numm] = setInterval(() => { timeOffOn(numm) }, 3000);
    shegPrdcts[numm].countInCart++;
    updateLi();

}
function remToCart(e) {
    myLi = e.target.parentNode.parentNode;
    let numm = [...ShgPrdctLis].indexOf(myLi);
    let count = liCounts[numm];
    if (parseInt(count.children[0].innerHTML) > 0) {
        clearInterval(mytime[numm]);
        mytime[numm] = setInterval(() => { timeOffOn(numm) }, 3000);
        shegPrdcts[numm].countInCart--;
        updateLi();
    }
}
function updateLi() {
    updateCart();
    for (let item of ShgPrdctLis) {
        let numm = [...ShgPrdctLis].indexOf(item);
        let count = liCounts[numm];
        let remBtn = count.previousElementSibling;
        count.children[0].innerHTML = shegPrdcts[numm].countInCart;
        if (parseInt(count.children[0].innerHTML) == 0) {
            remBtn.style.opacity = .3;
            clearInterval(mytime[numm]);
            mytime[numm] = setInterval(() => { timeOffOn(numm) }, 500);
        } else {
            remBtn.style.opacity = 1;
        }
    }
}