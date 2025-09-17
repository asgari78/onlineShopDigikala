import { cartBoxItems, cartIcon, cartOutNum } from '../Components/findElements.js';
import { AllProducts } from './products.js';
import { updateLi } from './shegeft.js';
export { openCartBox, closeCartBox, updateCart, trushOrMin }
window.addEventListener('DOMContentLoaded', () => {
    cartBoxItems.style.display = 'none';
    updateCart();
})


if (window.innerWidth > 540) {
    cartIcon.children[0].addEventListener('mouseover', openCartBox)
    cartIcon.children[0].addEventListener('mousedown', openCartBoxPcSmall)
    cartIcon.addEventListener('mouseleave', closeCartBox)
} else {
    cartIcon.children[0].addEventListener('touchstart', openCartBoxMobile)
}



let heightOff;
function openCartBox() {
    if (!cartBoxItems.classList.contains('active') && window.innerWidth >= 768) {
        updateCart();
        clearTimeout(heightOff);
        cartBoxItems.style.display = 'flex';
        cartBoxItems.classList.remove('off');
        cartBoxItems.classList.add('active');
    }
}
function openCartBoxPcSmall() {
    location.assign('../Pages/cart.html')
}
function openCartBoxMobile() {
    location.assign('../Pages/cart.html')
}
function closeCartBox() {
    cartBoxItems.classList.add('off');
    cartBoxItems.classList.remove('active');
    heightOff = setTimeout(() => {
        cartBoxItems.style.display = 'none';
    }, 300)
}
let myItems = [];
let myUlCart = cartBoxItems.children[1].children[0];
let liImgs = [];
let liNames = [];
let liAddBtns = [];
let liMinBtns = [];
let myLis = myUlCart.children;
let sumPrices = 0;
function updateCart() {
    myItems = [];
    let myUl = cartBoxItems.children[1].children[0];
    for (let obj of AllProducts) {
        if (obj.countInCart > 0) {
            myItems.push(obj);
        }
    }
    if (myItems.length == 0) {
        myUl.innerHTML = `<div class="emptyDiv">
            <img src="Images/Spesial/empty-cart.svg">
            <h1>سبد خرید شما خالی است!</h1>
            </div>`;
        myUl.parentNode.classList.remove('item');
        myUl.parentNode.classList.add('noItem');
        myUl.parentNode.nextElementSibling.style.display = 'none';
    } else {
        myUl.parentNode.classList.remove('noItem');
        myUl.parentNode.classList.add('item');
        myUl.parentNode.nextElementSibling.style.display = 'flex';
        myUl.innerHTML = ''
        for (let item of myItems) {
            let myLi = document.createElement('li');
            myLi.className = 'product-in-cart';
            myLi.innerHTML = `<div class="right-info">
            <img src="${item.srcImg}" class="product-img">
            <div class="add-rmv-box">
                <div class="rem-icon">
                    <i class="fa fa-minus"></i>
                </div>
                <output class="count-this-product">${item.countInCart}</output>
                <div class="add-icon">
                    <i class="fa fa-plus"></i>
                </div>
            </div>
            </div>
            <div class="left-info">
            <h2 class="product-name">${item.name}</h2>
            <div class="price-info-in-cart">
                <div class="discount">
                    <output class="discount-num">${item.separatorNum(item.price - item.offPrice)}</output>
                    <span class="toman-text">تومان</span>
                    <span class="discount-text">تخفیف</span>
                </div>
                <div class="this-count">
                    <output class="count-num">${item.separatorNum(item.offPrice)}</output>
                    <span class="toman-text">تومان</span>
                </div>
                <div class="special-best">
                    <p>بهترین قیمت در 30 روز گذشته</p>
                </div>
            </div >
            </div > `;
            if (item.offPrice != item.price) {
                myLi.children[1].children[1].children[0].style.display = 'flex';
            } else {
                myLi.children[1].children[1].children[0].style.display = 'none';
            }
            if (item.bestPrice) {
                myLi.children[1].children[1].children[2].style.display = 'flex';
            } else {
                myLi.children[1].children[1].children[2].style.display = 'none';
            }
            myUlCart.appendChild(myLi);
            liImgs = [];
            liNames = [];
            liAddBtns = [];
            liMinBtns = [];
            sumPrices = 0;
            for (let myItem of myItems) {
                sumPrices += myItem.price * myItem.countInCart;
                let numm = [...myLis].indexOf(myLi);
                liImgs.push(myLis[numm].children[0].children[0]);
                liNames.push(myLis[numm].children[1].children[0]);
                liAddBtns.push(myLis[numm].children[0].children[1].children[2]);
                liMinBtns.push(myLis[numm].children[0].children[1].children[0]);
            }
            for (let liAddBtn of liAddBtns) {
                liAddBtn.addEventListener('click', addInCart);
            }
            for (let liMinBtn of liMinBtns) {
                liMinBtn.addEventListener('click', remInCart);
            }
            cartBoxItems.children[2].children[0].children[1].children[0].innerHTML = item.separatorNum(sumPrices);
        }
    }
    let sumCount = 0;
    for (let myItem of myItems) {
        sumCount += myItem.countInCart;
    }

    cartOutNum.innerHTML = sumCount;
}
function addInCart(e) {
    let myLi = e.target.parentNode.parentNode.parentNode.parentNode;
    let myLis = myLi.parentNode.children;
    let numm = [...myLis].indexOf(myLi);
    myItems[numm].countInCart++;
    updateCart();
    updateLi();
    trushOrMin(numm);
}
function remInCart(e) {
    let myLi = e.target.parentNode.parentNode.parentNode.parentNode;
    let myLis = myLi.parentNode.children;
    let numm = [...myLis].indexOf(myLi);
    myItems[numm].countInCart--;
    updateCart();
    updateLi();
    trushOrMin(numm);
}
function trushOrMin(numm) {
    if (myItems[numm]) {
        if (myItems[numm].countInCart == 1) {
            liMinBtns[numm].children[0].className = 'fa fa-trash-alt';
        } else {
            liMinBtns[numm].children[0].className = 'fa fa-minus';
        }
    }
}