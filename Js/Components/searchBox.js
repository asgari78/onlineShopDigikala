import {
    searchDiv, searchBoxPc, backOfSearch, searchInp,
    searchInpPc, onAll5, searchInpInDiv, searchPcUls
} from '../Components/findElements.js';
import { AllProducts } from '../Components/products.js'
export {
    openSearchBox
}
window.addEventListener('resize', resizeSearch)
searchInp.addEventListener('click', () => { openSearchBox() })
backOfSearch.addEventListener('click', closeSearchBox);
onAll5.addEventListener('click', closeSearchBox)
function openSearchBox() {
    if (window.innerWidth < 768) {
        if (recItems.length !== 0) { searchDiv.children[2].style.display = 'block' }
        recDiv.innerHTML = ``;
        for (let item of recItems) {
            recDiv.appendChild(item);
        }
        searchDiv.style.height = `${innerHeight}px`;
        searchDiv.style.width = `${innerWidth}px`;
        searchDiv.style.top = `-48px`;
        searchDiv.style.left = `0px`;
        searchDiv.style.display = `block`;
        searchInpInDiv.focus();
        document.body.style.overflowY = 'hidden';
    } else {
        if (!searchBoxPc.classList.contains('active')) {
            if (recItems.length !== 0) { searchBoxPc.children[2].style.display = 'flex' }
            recDivPc.innerHTML = ``;
            for (let item of recItems) {
                recDivPc.appendChild(item);
            }
            checkScrollSearch();
            searchBoxPc.classList.add('active');
            searchBoxPc.style.display = 'flex';
            let inpRect = searchInp.getBoundingClientRect();
            searchBoxPc.style.width = `${inpRect.width}px`;
            searchInpPc.focus();
            onAll5.style.display = 'block'
        }
    }
}
function closeSearchBox() {
    searchDiv.style.height = `0px`
    searchDiv.style.top = '200vh';
    searchDiv.style.display = 'none';
    searchBoxPc.classList.remove('active');
    searchBoxPc.style.display = 'none';
    onAll5.style.display = 'none';
    document.body.style.overflowY = 'auto';
}
function resizeSearch() {
    if (window.innerWidth < 768 && searchBoxPc.classList.contains('active')) {
        searchBoxPc.classList.remove('active');
        searchBoxPc.style.display = 'none';
        onAll5.style.display = 'none';
        searchDiv.style.top = 0;
    } else if (window.innerWidth > 768 && !searchBoxPc.classList.contains('active') && searchDiv.style.top === '0px') {
        searchBoxPc.classList.add('active');
        searchBoxPc.style.display = 'flex';
        onAll5.style.display = 'block';
        searchDiv.style.top = '100vh';
    }
    let inpRect = searchInpPc.getBoundingClientRect();
    searchBoxPc.style.width = `${inpRect.width + 312}px`;
}
let ulScroll;
let intervalRight;
let intervalLeft;
function checkScrollSearch() {
    for (let searchPcUl of searchPcUls) {
        let mmm1;
        let mmm2;
        let rightBtn = searchPcUl.parentNode.parentNode.parentNode.children[1];
        let leftBtn1 = searchPcUls[0].parentNode.parentNode.parentNode.children[2];
        let leftBtn2 = searchPcUls[1].parentNode.parentNode.parentNode.children[2];
        let mainDiv = searchPcUl.parentNode.parentNode.parentNode.parentNode;
        mmm2 = searchPcUls[1].lastElementChild.getBoundingClientRect();
        let mDRect = mainDiv.getBoundingClientRect();
        if (searchPcUls[0].lastElementChild) {
            mmm1 = searchPcUls[0].lastElementChild.getBoundingClientRect();
            if (mDRect.left < mmm1.left - 52) {
                leftBtn1.style.display = 'none';
            } else {
                leftBtn1.style.display = 'flex';
            }
        }
        if (searchPcUl.scrollLeft > -5) {
            rightBtn.style.display = 'none';
        } else {
            rightBtn.style.display = 'flex';
        }
        if (mDRect.left < mmm2.left - 52) {
            leftBtn2.style.display = 'none';
        } else {
            leftBtn2.style.display = 'flex';
        }
        searchPcUl.addEventListener('scroll', checkScrollSearch)
        rightBtn.addEventListener('mouseover', toRight);
        leftBtn1.addEventListener('mouseover', toLeft);
        leftBtn2.addEventListener('mouseover', toLeft);
        rightBtn.addEventListener('mouseout', () => {
            clearInterval(intervalLeft);
            clearInterval(intervalRight);
        });
        leftBtn1.addEventListener('mouseout', () => {
            clearInterval(intervalLeft);
            clearInterval(intervalRight);
        });
        leftBtn2.addEventListener('mouseout', () => {
            clearInterval(intervalLeft);
            clearInterval(intervalRight);
        });
    }
}
function toRight(e) {
    ulScroll = e.target.parentNode.children[3].children[0].children[0];
    clearInterval(intervalLeft);
    clearInterval(intervalRight);
    intervalRight = setInterval(mytime1, 2);
}
function toLeft(e) {
    ulScroll = e.target.parentNode.children[3].children[0].children[0];
    clearInterval(intervalLeft);
    clearInterval(intervalRight);
    intervalLeft = setInterval(mytime2, 2)
}
function mytime1() {
    ulScroll.scrollTo(ulScroll.scrollLeft + 1, 0);
    checkScrollSearch()
}
function mytime2() {
    ulScroll.scrollTo(ulScroll.scrollLeft - 1, 0)
    checkScrollSearch()
}
//////////////////////////////////////////////////////////////////////
let resultUl;
let mySeachTxt;
let child2;
let child2pc;
let child3;
let child3pc;
child3 = document.querySelector('.popular-search');
child3pc = document.querySelector('.papular-search2');
let containerDiv = document.createElement('div');
let cats = [[], [], [], [], [], [], [], [], []];
let pdctUl = document.createElement('ul');
pdctUl.className = 'mainUl';
let ulCat = document.createElement('ul');
ulCat.className = 'ulCat';
let daste = ['پایه اول', 'پایه دوم', 'پایه سوم', 'پایه چهارم', 'پایه پنجم', 'پایه ششم', 'رسانه', 'آموزش معلمان', 'بازی و سرگرمی']
let txtArr = [];
let mySet = [];
let mySetCat = [];
let timeForSet;
let recDiv = searchDiv.children[2].children[1];
let recDivPc = searchBoxPc.children[2].children[3].children[0].children[0];
let recItems = [];
let trashIcon = [];
if (recItems.length == 0) {
    searchDiv.children[2].style.display = 'none';
    searchBoxPc.children[2].style.display = 'none';
} else {
    searchDiv.children[2].style.display = 'block';
    searchBoxPc.children[2].style.display = 'block';
}
AllProducts.map(item => {
    switch (item.subject) {
        case 'aval': cats[0].push(item); break;
        case 'dovom': cats[1].push(item); break;
        case 'sevom': cats[2].push(item); break;
        case 'chaharom': cats[3].push(item); break;
        case 'panjom': cats[4].push(item); break;
        case 'sheshom': cats[5].push(item); break;
        case 'media': cats[6].push(item); break;
        case 'teacher': cats[7].push(item); break;
        case 'game': cats[8].push(item);
    }
})
searchInpPc.addEventListener('keyup', (e) => {
    mySeachTxt = searchInpPc.value;
    searchInpPc.value.length >= 3 ? serachStart(mySeachTxt, e) : endStart();
    if (searchInpPc.value.length >= 3) {
        clearTimeout(timeForSet);
        timeForSet = setTimeout(() => { setRecently(searchInpPc.value) }, 1500);
    } else {
        clearTimeout(timeForSet);
    }
})
searchInpInDiv.addEventListener('keyup', (e) => {
    mySeachTxt = searchInpInDiv.value;
    searchInpInDiv.value.length >= 3 ? serachStart(mySeachTxt, e) : endStart();
    if (searchInpInDiv.value.length >= 3) {
        clearTimeout(timeForSet);
        timeForSet = setTimeout(() => { setRecently(searchInpInDiv.value) }, 1500);
    } else {
        clearTimeout(timeForSet);
    }
})
function serachStart(txt, e) {
    hideSection();
    createUl(txt, e);
    createCat(txt, e);
}
function hideSection() {
    child2 = searchDiv.children[2];
    child2pc = searchBoxPc.children[2];
    pdctUl.style.display = 'flex';
    ulCat.style.display = 'flex';
    if (child2 && child2pc) {
        child2.style.display = 'none';
        child2pc.style.display = 'none';
    }
    if (child3) { child3.style.display = 'none'; }
    if (child3pc) { child3pc.style.display = 'none'; }
}
function endStart() {
    pdctUl.style.display = 'none';
    ulCat.style.display = 'none';
    if (recItems.length !== 0) {
        if (child2) { child2.style.display = 'block' }
        if (child2pc) { child2pc.style.display = 'flex' }
    }
    child3.style.display = 'block';
    child3pc.style.display = 'flex';
    checkScrollSearch()
}
function createUl(txt, e) {
    pdctUl.innerHTML = '';
    resultUl = [];
    if (!(e.key == ' ')) {
        txtArr = txt.split(' ');
        txtArr.filter(item => { item !== '' })
    }
    AllProducts.map(item => {
        for (let word of txtArr) {
            if (word.length >= 3 && item.name.search(word) !== -1) {
                resultUl.push(item);
            }
        }
        mySet = new Set(resultUl)
    })
    if (mySet !== []) {
        for (let prod of mySet) {
            let newLi = document.createElement('li');
            newLi.className = 'liResult'
            newLi.innerHTML = `
                <img src = '${prod.srcImg}'>
                <div class = 'name'>${prod.name}</div>`
            pdctUl.appendChild(newLi);
        }
    }
    if (pdctUl.innerHTML == '') {
        let emptyTxt = document.createElement('p');
        emptyTxt.innerHTML = `نتیجه ای یافت نشد`;
        emptyTxt.className = 'emptyTxt';
        pdctUl.appendChild(emptyTxt);
    }
    containerDiv.className = 'containerDiv';
    containerDiv.appendChild(pdctUl);
    window.innerWidth < 768 ? searchDiv.appendChild(containerDiv) : searchBoxPc.appendChild(containerDiv);
}
function createCat(txt, e) {
    ulCat.innerHTML = '';
    for (let i = 0; i < cats.length; i++) {
        let setItemArr = [];
        cats[i].map(item => {
            for (let word of txtArr) {
                if (word.length >= 3 && item.name.search(word) !== -1) {
                    if (setItemArr == '') {
                        setItemArr.push(item);
                        mySetCat = new Set(setItemArr);
                        if (mySetCat !== []) {
                            for (let prod of mySetCat) {
                                let itemCat = document.createElement('li');
                                itemCat.className = 'itemCat';
                                itemCat.innerHTML = `<i class="fa fa-search"></i>
                                    <p class="myTxt">${txt}</p>
                                    <p class="myCat">در ${daste[i]}</p>`
                                ulCat.appendChild(itemCat);
                            }
                        }
                    }
                }
            }
        })
    }
    window.innerWidth < 768 ? searchDiv.appendChild(ulCat) : searchBoxPc.appendChild(ulCat);
}
function setRecently(txt) {
    let newEl = document.createElement('li');
    newEl.innerHTML = `<p>${txt}</p> <i class="fa fa-angle-left"></i>`
    if (window.innerWidth < 768) {
        newEl.className = 'select-item-search';
        recItems.push(newEl);
        recDiv.innerHTML = ``;
        for (let item of recItems) {
            recDiv.appendChild(item);
        }
    } else {
        newEl.className = 'last-search-item';
        recItems.push(newEl);
        recDivPc.innerHTML = ``;
        for (let item of recItems) {
            recDivPc.appendChild(item);
        }
    }
    trashIcon = document.querySelectorAll('.fa-trash-alt');
    trashIcon[0].addEventListener('click', () => {
        clearRecently();
    })
    trashIcon[1].addEventListener('click', () => {
        clearRecently();
    })
}
function clearRecently() {
    recItems = [];
    recDiv.innerHTML = ``;
    searchDiv.children[2].style.display = 'none';
    searchBoxPc.children[2].style.display = 'none';
}