import { cellest } from './findElements.js';
import { AllProducts } from './products.js';
let newArr = [...AllProducts];
let last;
let sCArr = [];
let maxCell;
let newArr2 = [];
window.addEventListener('DOMContentLoaded', filterCell);

export function filterCell() {
    newArr.map(item => {
        sCArr.push(item.saleCount);
    })
    sCArr.sort(function (a, b) {
        return a - b;
    });
    let lenthArr = newArr.length - 12;
    for (let i = 0; i < lenthArr; i++) {
        sCArr.shift();
    };
    const filterSaleCount = (value) => {
        if (sCArr.includes(value.saleCount)) {
            return value;
        }
    }
    newArr2 = newArr.filter(filterSaleCount);
    let removeCount = newArr2.length - 12;
    if (newArr2.length > 12) {
        for (let i = 0; i < removeCount; i++) {
            newArr2.pop()
        }
        createPro()
    } else {
        createPro()
    }
    function createPro() {
        newArr2.map(item => {
            cellest[0].innerHTML += `<div class="newProduct">
            <div class="rightImg">
                <img src="${item.srcImg}" alt="">
            </div>
            <div class="leftName">
                <p class="newPName">${item.name}</p>
            </div>
        </div>`;
        })
    }
}