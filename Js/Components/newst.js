import { newst } from './findElements.js';
import { AllProducts } from './products.js';
let newArr = [];
let last;
window.addEventListener('DOMContentLoaded', filtering);

export function filtering() {
    AllProducts.map(pro => {
        if (newArr.length > 0) {
            if (pro.dataCreate >= last.dataCreate) {
                newArr.push(pro)
            }
        }
        if (newArr.length == 0) {
            newArr.push(pro)
        }
        last = pro;
    })
    let lenthArr = newArr.length - 12;
    for (let i = 0; i < lenthArr; i++) {
        newArr.pop();
    };
    newArr.map(item => {
        newst[0].innerHTML += `<div class="newProduct">
        <div class="rightImg">
            <img src="${item.srcImg}" alt="">
        </div>
        <div class="leftName">
            <p class="newPName">${item.name}</p>
        </div>
    </div>`;
    })
}