import {
    cityBox, onAll4, AddressDiv, AddressDiv2, addAddress, addAddressForm,
    iCAddressF, addressBtn, itemsCityBox, IcCloseAddBox
} from '../Components/findElements.js';
import {
    myResize
} from '../JsPages/index.js';
export {
    openAddressBox,
    closeAddressBox
}
window.addEventListener('resize', AddressSize);
window.addEventListener('resize', myResize);
AddressDiv.addEventListener('click', openAddressBox);
AddressDiv2.addEventListener('click', openAddressBox);
onAll4.addEventListener('click', closeAddressBox);
IcCloseAddBox.addEventListener('click', closeAddressBox);

function openAddressBox() {
    onAll4.style.display = 'block';
    cityBox.style.opacity = 1;
    document.body.style.overflowY = 'hidden';
    if (window.innerWidth < 768) {
        cityBox.classList.remove('pcAddress');
        cityBox.classList.add('mobileAddress');
        cityBox.style.bottom = `${0}px`;
        cityBox.style.width = `${innerWidth}px`;
        cityBox.style.left = `${0}px`
    } else if (window.innerWidth >= 768) {
        cityBox.classList.remove('mobileAddress');
        cityBox.classList.add('pcAddress');
        cityBox.style.bottom = `${window.innerHeight / 1.8}px`
        cityBox.style.left = `${window.innerWidth / 2}px`
        cityBox.style.width = `${innerWidth / 1.65}px`;
    }
}
function closeAddressBox() {
    cityBox.style.opacity = 0;
    cityBox.style.bottom = `-200vh`
    onAll4.style.display = 'none';
    cityBox.classList.remove('mobileAddress');
    cityBox.classList.remove('pcAddress');
    document.body.style.overflowY = 'scroll';
}
function AddressSize() {
    if (cityBox.classList.contains('pcAddress') || cityBox.classList.contains('mobileAddress')) {
        openAddressBox();
    }
    sizeFormCity()
    if (myAddress.length == 0) {
        setOutAdd('');
    } else {
        const myChecked = document.querySelector('div.items-city-box ul input:checked');
        setOutAdd(myAddress[[...itemsCityBox.children].indexOf(myChecked.parentNode) - 1])
    }
}


/////////////////////////////////////////////////////////////////////////

const myAddress = [];
let myIdAdd = 0;
class AddressesClass {
    constructor(posting, stating, citing, mahaling, pelaking, vaheding, coding) {
        this.posting = posting;
        this.stating = stating;
        this.citing = citing;
        this.mahaling = mahaling;
        this.pelaking = pelaking;
        this.vaheding = vaheding;
        this.coding = coding;
    }
    addAddress(newAdd) {
        myAddress.push(newAdd)
    }
}
class CitysClass {
    constructor(name, cits, mahals) {
        this.name = name;
        this.cits = cits;
        this.mahals = mahals;
    }
}
const myCity = [];
const qom = new CitysClass(
    'قم',
    ['کهک', 'قم', 'سلفچگان', 'جعفریه', 'قنوات', 'دستجرد'],
    ['', ['باجک', 'سالاریه', 'صفاییه', 'شیخ آباد', 'پردیسان', 'شهرک قدس'], '', '', '', '']
)
const tehran = new CitysClass(
    'تهران',
    ['شاهدشهر', 'پیشوا', 'جوادآباد', 'ارجمند', 'ری', 'نصیرشهر', 'رودهن', 'اندیشه', 'نسیم شهر', 'صباشهر', 'ملارد', 'شمشک', 'پاکدشت', 'باقرشهر', 'احمد آباد مستوفی', 'کیلان', 'قرچک', 'فردوسیه', 'گلستان', 'ورامین', 'فیروزکوه', 'فشم', 'پرند', 'آبعلی', 'چهاردانگه', 'تهران', 'بومهن', 'وحیدیه', 'صفادشت', 'لواسان', 'فرون اباد', 'کهریزک', 'رباطکریم', 'آبسرد', 'باغستان', 'صالحیه', 'شهریار', 'قدس', 'تجریش', 'شریف آباد', 'حسن آباد', 'اسلامشهر', 'دماوند', 'پردیس'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
)
const markazi = new CitysClass(
    'مرکزی',
    ['آستانه', 'خنجین', 'نراق', 'کمیجان', 'آشتیان', 'رازقان', 'مهاجران', 'غرق آباد', 'خنداب', 'قورچی باشی', 'خشکرود', 'ساروق', 'محلات', 'شازند', 'ساوه', 'میلاجرد', 'تفرش', 'زاویه', 'اراک', 'توره', 'نوبران', 'فرمهین', 'دلیجان', 'پرندک', 'کارچان', 'نیمور', 'هندودر', 'آوه', 'جاورسیان', 'خمین', 'مامونیه', 'داودآباد', 'شهباز'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
)
myCity.push(qom);
myCity.push(tehran);
myCity.push(markazi);
let validArr = [0, 0, 0, 0, 0, 0];
const textArea = addAddressForm.children[1].children[0].children[1];
const stateInp = addAddressForm.children[1].children[1].children[0].children[1];
const cityInp = addAddressForm.children[1].children[1].children[1].children[1];
const mahalInp = addAddressForm.children[1].children[2].children[1];
const pelak = addAddressForm.children[1].children[3].children[0].children[0].children[1];
const vahed = addAddressForm.children[1].children[3].children[0].children[1].children[1];
const codePost = addAddressForm.children[1].children[3].children[1].children[1];
const stateBox = document.querySelector('div.SelectState ul.statesUl');
const stateIcon = document.querySelector('div.SelectState i');
const CityBox = document.querySelector('div.SelectCity ul.cityUl');
const cityIcon = document.querySelector('div.SelectCity i.fa-caret-down');
const malahBox = document.querySelector('div.selectMahal ul.mahalUl');
const mahalIcon = document.querySelector('div.selectMahal i.fa-caret-down');
//******************
window.addEventListener('DOMContentLoaded', sizeFormCity);
window.addEventListener('DOMContentLoaded', loadInfo);
addAddress.addEventListener('click', openAddBox);
itemsCityBox.children[0].addEventListener('click', openAddBox);
iCAddressF.addEventListener('click', closeAddBox)
textArea.addEventListener('blur', () => { validationInp(textArea) })
pelak.addEventListener('blur', () => { validationInp(pelak) })
codePost.addEventListener('blur', () => { validationInp(codePost) })
stateInp.addEventListener('blur', () => { validationSelect(stateInp) })
cityInp.addEventListener('blur', () => { validationSelect(cityInp) })
mahalInp.addEventListener('blur', () => { validationSelect(mahalInp) })
stateInp.addEventListener('click', openStateBox);
stateIcon.addEventListener('click', openStateBox);
cityInp.addEventListener('click', openCity);
cityIcon.addEventListener('click', openCity);
mahalInp.addEventListener('click', openMahalBox);
mahalIcon.addEventListener('click', openMahalBox);
textArea.addEventListener('input', checkBtn);
cityInp.addEventListener('input', checkBtn);
mahalInp.addEventListener('input', checkBtn);
stateInp.addEventListener('input', checkBtn);
pelak.addEventListener('input', checkBtn);
codePost.addEventListener('input', checkBtn);
let myLabels;
document.body.addEventListener('click', (e) => {
    if (e.target !== stateInp && e.target !== stateIcon && stateBox.style.display === 'flex') {
        stateBox.style.display = 'none';
        stateBox.previousElementSibling.className = 'fa fa-caret-down'
    }
    if (e.target !== cityInp && e.target !== cityIcon && CityBox.style.display === 'flex') {
        CityBox.style.display = 'none'
        CityBox.previousElementSibling.className = 'fa fa-caret-down'
    }
    if (e.target !== mahalInp && e.target !== mahalIcon && malahBox.style.display === 'flex') {
        malahBox.style.display = 'none'
        malahBox.previousElementSibling.className = 'fa fa-caret-down'
    }
})
function loadInfo() {
    stateBox.innerHTML = '';
    let funcCreate;
    for (let city of myCity) {
        stateBox.innerHTML += `<li>${city.name}</li>`
    }
    let itemsState = [...stateBox.children]
    for (let item of itemsState) {
        item.addEventListener('click', () => { funcCreate(item.innerHTML) });
        funcCreate = (val) => {
            stateInp.value = val;
            cityInp.value = '';
            mahalInp.value = '';
            validArr[2] = 0;
            validArr[3] = 0;
            validationSelect(stateInp);
            checkBtn();
            for (let city of myCity) {
                if (city.name === val) {
                    CityBox.innerHTML = '';
                    for (let i of city.cits) {
                        CityBox.innerHTML += `<li>${i}</li>`
                    }
                    for (let item of CityBox.children) {
                        item.addEventListener('click', () => {
                            cityInp.value = item.innerHTML;
                            mahalInp.value = '';
                            validArr[3] = 0;
                            validationSelect(cityInp);
                            checkBtn();
                            for (let i of city.cits) {
                                if (i === item.innerHTML) {
                                    if (city.mahals[city.cits.indexOf(i)] === '') {
                                        mahalInp.parentNode.style.display = 'none'
                                        validArr[3] = 1;
                                        checkBtn();
                                    } else {
                                        mahalInp.parentNode.style.display = 'block';
                                        validArr[3] = 0;
                                        checkBtn();
                                        malahBox.innerHTML = '';
                                        for (let m of city.mahals[city.cits.indexOf(i)]) {
                                            malahBox.innerHTML += `<li>${m}</li>`
                                        }
                                        for (let item of malahBox.children) {
                                            item.addEventListener('click', () => {
                                                mahalInp.value = item.innerHTML;
                                                validationSelect(mahalInp);
                                                checkBtn();
                                            })
                                        }
                                    }
                                }

                            }
                        })
                    }
                }
            }
        }
    }
    funcCreate('تهران');
    if (myAddress.length == 0) {
        setOutAdd('');
    } else {
        const myChecked = document.querySelector('div.items-city-box ul input:checked');
        setOutAdd(myAddress[[...itemsCityBox.children].indexOf(myChecked.parentNode) - 1])
    }
}
function sizeFormCity() {
    addAddressForm.style.width = `${window.innerWidth}px`;
    addAddressForm.style.height = `${window.innerHeight}px`;
    addAddressForm.style.top = 0;
    addAddressForm.style.left = 0;
    document.body.scroll = 'none';
    addAddressForm.children[1].style.height = `${window.innerHeight - 150}px`;
    stateBox.style.display = 'none';
    CityBox.style.display = 'none';
    malahBox.style.display = 'none';
}
function openAddBox() {
    addAddressForm.style.display = 'flex';
}
function closeAddBox() {
    addAddressForm.style.display = 'none';
}
function validationInp(item) {
    let validNuN = /[a-zA-Zا-ی]/;
    let validPost = /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/;
    switch (item) {
        case textArea:
            if (item.value === ``) {
                item.style.borderBottom = `2px solid red`;
                item.previousElementSibling.children[1].innerHTML = 'آدرس نمی تواند خالی باشد';
                validArr[0] = 0;
                checkBtn();
            } else if (item.value.length < 16) {
                item.style.borderBottom = `2px solid red`;
                item.previousElementSibling.children[1].innerHTML = 'آدرس نمی تواند کمتر از 16 کارکتر باشد ';
                validArr[0] = 0;
                checkBtn();
            } else {
                item.style.borderBottom = `none`
                item.previousElementSibling.children[1].innerHTML = '';
                validArr[0] = 1;
                checkBtn();
            }
            break;
        case pelak:
            if (item.value === ``) {
                item.style.borderBottom = `2px solid red`;
                item.previousElementSibling.children[1].innerHTML = 'پلاک نمی تواند خالی باشد';
                validArr[4] = 0;
                checkBtn();
            } else if (validNuN.test(item.value)) {
                item.style.borderBottom = `2px solid red`;
                item.previousElementSibling.children[1].innerHTML = 'پلاک باید عددی باشد';
                validArr[4] = 0;
                checkBtn();
            } else {
                item.style.borderBottom = `none`
                item.previousElementSibling.children[1].innerHTML = '';
                validArr[4] = 1;
                checkBtn();
            }
            break;
        case codePost:
            if (item.value === ``) {
                item.style.borderBottom = `2px solid red`;
                item.previousElementSibling.children[1].innerHTML = 'کد پستی نمی تواند خالی باشد';
                validArr[5] = 0;
                checkBtn();
            } else if (validNuN.test(item.value)) {
                item.style.borderBottom = `2px solid red`;
                item.previousElementSibling.children[1].innerHTML = 'کد پستی باید عددی باشد';
                validArr[5] = 0;
                checkBtn();
            } else if (!validPost.test(item.value)) {
                item.style.borderBottom = `2px solid red`;
                item.previousElementSibling.children[1].innerHTML = 'کد پستی صحیح نمی باشد';
                validArr[5] = 0;
                checkBtn();
            } else {
                item.style.borderBottom = `none`
                item.previousElementSibling.children[1].innerHTML = '';
                validArr[5] = 1;
                checkBtn();
            }
    }
}
function validationSelect(item) {
    let Ulitems = item.nextElementSibling.nextElementSibling.children;
    let itemTxt = [];
    for (let Ulitem of Ulitems) { itemTxt.push(Ulitem.innerHTML) }
    if (itemTxt.includes(item.value)) {
        item.style.borderBottom = `none`;
        validArr[item.id] = 1;
        checkBtn();
    } else {
        item.style.borderBottom = `2px solid red`;
        validArr[item.id] = 0;
        checkBtn();
    }
}
function openStateBox() {
    if (stateBox.style.display == 'none') {
        stateBox.style.display = 'flex';
        stateBox.previousElementSibling.className = 'fa fa-caret-up'
    } else {
        stateBox.style.display = 'none';
        stateBox.previousElementSibling.className = 'fa fa-caret-down'
    }
}
function openCity() {
    if (CityBox.style.display == 'none') {
        CityBox.style.display = 'flex';
        CityBox.previousElementSibling.className = 'fa fa-caret-up'
    } else {
        CityBox.style.display = 'none';
        CityBox.previousElementSibling.className = 'fa fa-caret-down'
    }
}
function openMahalBox() {
    if (malahBox.style.display == 'none') {
        malahBox.style.display = 'flex';
        malahBox.previousElementSibling.className = 'fa fa-caret-up'
    } else {
        malahBox.style.display = 'none';
        malahBox.previousElementSibling.className = 'fa fa-caret-down'
    }
}
function checkBtn() {
    if (validArr[0] == 1 && validArr[1] == 1 && validArr[2] == 1 && validArr[3] == 1 && validArr[4] == 1 && validArr[5] == 1) {
        addressBtn.classList.add('active');
        addressBtn.addEventListener('click', setAddress);
    } else {
        addressBtn.classList.remove('active');
    }
}
function setAddress() {
    if (addressBtn.classList.contains('active')) {
        const addressNew = new AddressesClass(textArea.value, stateInp.value, cityInp.value, mahalInp.value, pelak.value, vahed.value, codePost.value);
        addressNew.addAddress(addressNew);
        itemsCityBox.innerHTML = `<li class="add-item-city"><i class="far fa-plus-square"></i><span>افزودن آدرس</span></li>`
        for (let item of myAddress) {
            myIdAdd++;
            itemsCityBox.innerHTML += `<li>
                <label for="me${myIdAdd}">${item.stating},${item.citing} , ${item.posting}</label>
                <input type="radio" name="address" id="me${myIdAdd}">
                <label for="me${myIdAdd}" class="inputRadio"></label>
            </li>`
        }
        closeAddBox();
        if (itemsCityBox.children.length === 2) {
            itemsCityBox.children[1].children[1].checked = true;
            setOutAdd(myAddress[0])
            closeAddressBox();
        } else {
            setOutAdd(myAddress[myAddress.length - 1])
            itemsCityBox.children[itemsCityBox.children.length - 1].children[1].checked = true;
        }
        myLabels = document.querySelectorAll('div.items-city-box ul label');
        for (let label of myLabels) {
            label.addEventListener('click', checkedDone)
        }
        textArea.value = ''
        stateInp.value = ''
        cityInp.value = ''
        mahalInp.value = ''
        pelak.value = ''
        codePost.value = ''
        vahed.value = ''
        validArr = [0, 0, 0, 0, 0, 0];
        checkBtn();
        itemsCityBox.children[0].addEventListener('click', openAddBox);
    }
}
function setOutAdd(item) {
    if (item === '') {
        if (innerWidth < 1500) {
            AddressDiv.children[0].children[1].innerHTML = 'انتخاب آدرس';
            AddressDiv2.children[1].innerHTML = 'آدرس خود را انتخاب کنید';
        }
        if (innerWidth < 1250) {
            AddressDiv2.children[1].innerHTML = 'انتخاب آدرس';
        }
        if (innerWidth < 890) {
            AddressDiv2.children[1].innerHTML = 'آدرس';
        }
        if (innerWidth < 820) {
            AddressDiv2.children[1].innerHTML = '';
        }
    } else {
        if (innerWidth < 1500) {
            AddressDiv.children[0].children[1].innerHTML = `ارسال به ${item.stating}, ${item.citing} پلاک : ${item.pelaking}`
            AddressDiv2.children[1].innerHTML = `ارسال به ${item.stating}, ${item.citing} پلاک : ${item.pelaking}`
        }
        if (innerWidth < 1250) {
            AddressDiv2.children[1].innerHTML = `ارسال به ${item.stating}, ${item.citing}`
        }
        if (innerWidth < 900) {
            AddressDiv2.children[1].innerHTML = `ارسال به ${item.stating}`
        }
        if (innerWidth < 850) {
            AddressDiv2.children[1].innerHTML = `${item.stating}`
        }
        if (innerWidth < 825) {
            AddressDiv2.children[1].innerHTML = ``
        }
    }
}
function checkedDone() {
    setTimeout(() => {
        const myChecked = document.querySelector('div.items-city-box ul input:checked');
        setOutAdd(myAddress[[...itemsCityBox.children].indexOf(myChecked.parentNode) - 1])
    }, 100)
    setTimeout(() => { closeAddressBox() }, 200)
}