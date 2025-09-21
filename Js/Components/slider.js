import {
    btnsSlide, imgsSlider, pointsSlider
} from './findElements.js';
export {
    showBottuns, hideBottuns
}
let btnPrev = btnsSlide.children[0];
let btnNext = btnsSlide.children[1];
const myCircle = [];
let count = imgsSlider.childElementCount - 1;
let index = 1;
let isTouching;
let xTouchStart;
let xTouchEnd;
let startTime;
let endTime;
let speed;
let min;
let max;
let timeMobile;
document.addEventListener('DOMContentLoaded', () => { circleSlide() })
document.addEventListener('DOMContentLoaded', setSize)
const imgs = document.querySelectorAll('div.images-slider img');

function setSize() {
    if (window.innerWidth < 600) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = `../../Images/slider/index/phone/${i + 1}.png`
        }
    } else if (window.innerWidth >= 600 && window.innerWidth < 900) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = `../../Images/slider/index/win/${i + 1}.png`
        }
    } else if (window.innerWidth >= 900) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = `../../Images/slider/index/expend/${i + 1}.png`
        }
    }
}

if (window.innerWidth > 540) {
    imgsSlider.addEventListener('mouseover', showBottuns)
    imgsSlider.addEventListener('mouseleave', hideBottuns)
    btnNext.addEventListener('click', () => { nextSlide() })
    btnPrev.addEventListener('click', () => { PrevSlide() })
    document.addEventListener('DOMContentLoaded', () => { setSliderTime() })
}
function showBottuns() {
    btnsSlide.style.opacity = 1;
}
function hideBottuns() {
    btnsSlide.style.opacity = 0;
}
function nextSlide() {
    if (index < count) {
        index++;
    } else {
        index = 1;
    }
    offOnCircle();
}
function PrevSlide() {
    if (index > 1) {
        index--;
    } else {
        index = count;
    }
    offOnCircle();
}
function setPos() {
    index === 1 ? min = count : min = index - 1;
    index === count ? max = 1 : max = index + 1;
    imgsSlider.children[index].style.right = '0vw';
    imgsSlider.children[min].style.right = '-100vw';
    imgsSlider.children[max].style.right = '100vw';
    imgsSlider.children[index].style.zIndex = 10;
    imgsSlider.children[min].style.zIndex = 9;
    imgsSlider.children[max].style.zIndex = 9;
}
function showSlide() {
    setPos();
    for (let i = 1; i <= count; i++) {
        imgsSlider.children[i].style.transition = 'all .5s'
    }
    if (index !== 1) {
        for (let i = 1; i < min; i++) {
            imgsSlider.children[i].style.right = `-${index - i}00vw`;
            if (index === count && i === 1) { imgsSlider.children[i].style.right = `100vw`; }
            imgsSlider.children[i].style.zIndex = 8;
        }
    }
    if (index !== count) {
        for (let i = max + 1; i <= count; i++) {
            imgsSlider.children[i].style.right = `${i - index}00vw`;
            if (index === 1 && i === count) { imgsSlider.children[i].style.right = `-100vw`; }
            imgsSlider.children[i].style.zIndex = 8;
        }
    }
}
function circleSlide() {
    for (let i = 1; i <= count; i++) {
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.id = i;
        myCircle.push(circle);
        pointsSlider.appendChild(circle);
        offOnCircle();
    }
    for (let i = 0; i < myCircle.length; i++) {
        if (window.innerWidth > 540) {
            myCircle[i].addEventListener('click', offOnCircle2);
        }
    }
    btnNext.addEventListener('click', offOnCircle)
    btnPrev.addEventListener('click', offOnCircle)
}
function offOnCircle() {
    for (let j = 0; j < myCircle.length; j++) { myCircle[j].classList.remove('active'); }
    myCircle[index - 1].classList.add('active')
    showSlide()
}
function offOnCircle2(e) {
    index = parseFloat(e.target.id);
    clearInterval(mySliderTime1);
    mySliderTime1 = setInterval(nextSlide, 5000);
    offOnCircle();
}
let mySliderTime1;
function setSliderTime() {
    mySliderTime1 = setInterval(nextSlide, 5000);
    btnNext.addEventListener('click', resetSrollTime)
    btnPrev.addEventListener('click', resetSrollTime)
    function resetSrollTime() {
        clearInterval(mySliderTime1);
        mySliderTime1 = setInterval(nextSlide, 5000);
    }
}


///////////////////////////////////////////////////////////

if (window.innerWidth < 540) {
    btnsSlide.style.pointerEvents = 'none'
    clearInterval(mySliderTime1);
    timeMobile = setInterval(setNums, 5000)
    setPos();
    imgsSlider.addEventListener('touchmove', touching)
    imgsSlider.addEventListener('touchstart', touchStarted)
    imgsSlider.addEventListener('touchend', toucheEnded)
}
function touchStarted(e) {
    if (!isTouching) {
        clearInterval(timeMobile)
        imgsSlider.children[index].style.transition = `all 0s linear`;
        imgsSlider.children[min].style.transition = `all 0s linear`;
        imgsSlider.children[max].style.transition = `all 0s linear`;
        xTouchStart = Math.floor(e.touches[0].clientX);
    }
    startTime = new Date().getTime();
}
let indexRect = imgsSlider.children[index].getBoundingClientRect();
function touching(e) {
    isTouching = true;
    setPos();
    indexRect = imgsSlider.children[index].getBoundingClientRect();
    imgsSlider.children[index].style.transform = `translateX(${Math.floor(e.touches[0].clientX - xTouchStart)}px)`;
    imgsSlider.children[min].style.transform = `translateX(${indexRect.left - 30}px)`;
    imgsSlider.children[max].style.transform = `translateX(${indexRect.left + 30}px)`;
    xTouchEnd = Math.floor(e.touches[0].clientX);
}
function toucheEnded(e) {
    endTime = new Date().getTime();
    speed = ((Math.abs(xTouchEnd - xTouchStart)) / (endTime - startTime) * 100);
    if (isTouching) {
        if (speed > 20) {
            if (indexRect.left > window.innerWidth / 30) {
                if (index < count) {
                    index++;
                } else {
                    index = 1;
                }
                moveTouch()
                moveForward()
            } else if (indexRect.right < window.innerWidth / 3 * 3) {
                if (index > 1) {
                    index--;
                } else {
                    index = count;
                }
                moveTouch()
                moveBack()
            } else {
                imgsSlider.children[index].style.transition = `all .1s linear`;
                imgsSlider.children[index].style.zIndex = 10;
                imgsSlider.children[index].style.transform = `translateX(0px)`;
                imgsSlider.children[min].style.transition = `all .1s linear`;
                imgsSlider.children[max].style.transition = `all .1s linear`;
                imgsSlider.children[min].style.transform = `translateX(0vw)`;
                imgsSlider.children[max].style.transform = `translateX(0vw)`;
            }
        } else {
            if (indexRect.left > window.innerWidth / 2.5) {
                if (index < count) {
                    index++;
                } else {
                    index = 1;
                }
                moveTouch()
                moveForward()
            }
            else if (indexRect.right < window.innerWidth / 1.8) {
                if (index > 1) {
                    index--;
                } else {
                    index = count;
                }
                moveTouch()
                moveBack()
            } else {
                imgsSlider.children[index].style.transition = `all .1s linear`;
                imgsSlider.children[index].style.zIndex = 10;
                imgsSlider.children[index].style.transform = `translateX(0px)`;
                imgsSlider.children[min].style.transition = `all .1s linear`;
                imgsSlider.children[max].style.transition = `all .1s linear`;
                imgsSlider.children[min].style.transform = `translateX(0vw)`;
                imgsSlider.children[max].style.transform = `translateX(0vw)`;
            }
        }
    }
    if (navigator.userAgentData.mobile) {
        for (let j = 0; j < myCircle.length; j++) { myCircle[j].classList.remove('active'); }
        myCircle[index - 1].classList.add('active')
    }
    isTouching = false;
    clearInterval(timeMobile);
    timeMobile = setInterval(setNums, 5000);
}
function moveTouch() {
    index === 1 ? min = count : min = index - 1;
    index === count ? max = 1 : max = index + 1;
    imgsSlider.children[index].style.transition = `all .1s linear`;
    imgsSlider.children[min].style.transition = `all .1s linear`;
    imgsSlider.children[max].style.transition = `all .1s linear`;
    imgsSlider.children[index].style.zIndex = 10;
}
function moveBack() {
    imgsSlider.children[index].style.transform = `translateX(-100vw)`;
    imgsSlider.children[min].style.transform = `translateX(200vw)`;
    imgsSlider.children[max].style.transform = `translateX(-100vw)`;
    imgsSlider.children[min].style.zIndex = 8;
    imgsSlider.children[max].style.zIndex = 9;
}
function moveForward() {
    imgsSlider.children[index].style.transform = `translateX(100vw)`;
    imgsSlider.children[min].style.transform = `translateX(100vw)`;
    imgsSlider.children[max].style.transform = `translateX(-100vw)`;
    imgsSlider.children[min].style.zIndex = 8;
    imgsSlider.children[max].style.zIndex = 9;
}
function setNums() {
    setPos();
    index < count ? index++ : index = 1;
    index === 1 ? min = count : min = index - 1;
    index === count ? max = 1 : max = index + 1;
    moveTouch();
    moveForward();
    if (navigator.userAgentData.mobile) {
        for (let j = 0; j < myCircle.length; j++) { myCircle[j].classList.remove('active'); }
        myCircle[index - 1].classList.add('active')
    }
}