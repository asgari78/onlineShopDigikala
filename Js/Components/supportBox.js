import {
    supportBox, backIconQuestion, questionItems, downQIcons,
    formBoxQuestion, openFQBtn, sendFQBtn, questionFormFname,
    questionFormPhoneNumber, questionFormEmailAd, questionFormTextarea,
    NumCharEnter, formLabels, questionIcon
} from '../Components/findElements.js';
export {
    openSupportBox
}
questionIcon.addEventListener('click', openSupportBox)
backIconQuestion.addEventListener('click', closeSupportBox)
openFQBtn.addEventListener('click', openForm);
sendFQBtn.addEventListener('click', sendForm);
questionFormFname.addEventListener('blur', validFormName);
questionFormEmailAd.addEventListener('blur', validFormEmail);
questionFormPhoneNumber.addEventListener('blur', validFormPhone);
questionFormTextarea.addEventListener('keyup', validFormTextArea);
let validArr1 = false, validArr2 = false, validArr3 = false, validArr4 = false;

function openSupportBox() {
    supportBox.style.height = `${innerHeight}px`;
    supportBox.style.width = `${innerWidth}px`;
    supportBox.style.display = `block`;
    supportBox.style.zIndex = 1000;
    document.body.style.overflowY = 'hidden';
}
function closeSupportBox() {
    supportBox.style.height = `0px`;
    supportBox.style.display = `none`;
    formBoxQuestion.style.display = 'none';
    document.body.style.overflowY = 'scroll';
}
function openForm() {
    formBoxQuestion.style.display = 'block';
}
function validFormName() {
    let fNameRex = /^[a-zA-Zا-ی ]{3,}$/g;
    if (fNameRex.test(questionFormFname.value)) {
        questionFormFname.className = 'trueVal';
        formLabels[0].innerHTML = `نام <span class="star">*</span>`
        validArr1 = true;
    }
    else {
        questionFormFname.className = 'falseVal';
        if (questionFormFname.value == '') {
            formLabels[0].innerHTML = `نام <span class="star">*</span> <span class='error'>نام خود را وارد کنید</span>`
        } else {
            formLabels[0].innerHTML = `نام <span class="star">*</span> <span class='error'>نام شما باید حداقل 3 کارکتر فارسی یا انگلیسی باشد</span>`
        }
        validArr1 = false;
    }
    checkSubmitBtn()
}
function validFormPhone() {
    let phoneRex = /^(\+98|0)?9\d{9}$/g;
    if (phoneRex.test(questionFormPhoneNumber.value)) {
        questionFormPhoneNumber.className = 'trueVal';
        formLabels[1].innerHTML = `شماره موبایل <span class="star">*</span>`;
        validArr2 = true;
    }
    else {
        questionFormPhoneNumber.className = 'falseVal';
        if (questionFormPhoneNumber.value == '') {
            formLabels[1].innerHTML = `شماره موبایل <span class="star">*</span> <span class='error'>شماره موبایل خود را وارد کنید</span>`
        } else {
            formLabels[1].innerHTML = `شماره موبایل <span class="star">*</span> <span class='error'>شماره موبایل را به درستی وارد کنید!</span>`
        }
        validArr2 = false;
    }
    checkSubmitBtn()
}
function validFormEmail() {
    let EmailRex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    if (EmailRex.test(questionFormEmailAd.value)) {
        questionFormEmailAd.className = 'trueVal';
        formLabels[2].innerHTML = `ایمیل <span class="star">*</span>`;
        validArr3 = true;
    }
    else {
        questionFormEmailAd.className = 'falseVal';
        if (questionFormEmailAd.value == '') {
            formLabels[2].innerHTML = `ایمیل <span class="star">*</span> <span class='error'>ایمیل خود را وارد کنید</span>`
        } else {
            formLabels[2].innerHTML = `ایمیل <span class="star">*</span> <span class='error'>ایمیل را به درستی وارد کنید!</span>`
        }
        validArr3 = false;
    }
    checkSubmitBtn()
}
function validFormTextArea(e) {
    let numCahr = 250;
    numCahr = 250 - questionFormTextarea.value.length
    if (numCahr > 250) { numCahr = 250 }
    if (numCahr < 0) { numCahr = 0 }
    NumCharEnter.innerHTML = numCahr;
    if (numCahr >= 0 && numCahr < 220) {
        questionFormTextarea.className = 'trueVal';
        formLabels[3].innerHTML = `متن سوال <span class="star">*</span>`
        validArr4 = true;
    } else {
        questionFormTextarea.className = 'falseVal';
        formLabels[3].innerHTML = `متن سوال <span class="star">*</span> <span class='error'>حداقل 30 کارکتر وارد کنید</span>`
        validArr4 = false;
    }
    checkSubmitBtn();
}
function checkSubmitBtn() {
    if (validArr4 && validArr3 && validArr2 && validArr1 && !sendFQBtn.classList.contains('active')) {
        sendFQBtn.classList.add('active');
    }
}
function sendForm() {
    if (sendFQBtn.classList.contains('active')) {
        formBoxQuestion.firstElementChild.reset();
        location.reload();
    }
}
for (let questionItem of questionItems) {
    questionItem.addEventListener('click', () => {
        if (!questionItem.classList.contains('active')) {
            questionItem.classList.add('active');
            downQIcons[Array(...questionItems).indexOf(questionItem)].className = 'fa fa-angle-up'
        } else {
            questionItem.classList.remove('active');
            downQIcons[Array(...questionItems).indexOf(questionItem)].className = 'fa fa-angle-down'
        }
    })
}