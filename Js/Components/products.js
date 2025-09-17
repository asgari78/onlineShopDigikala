import {
    ulProduct
} from './findElements.js';
export { category, products, AllProducts }
let category = class {
    daste = ['پایه اول', 'پایه دوم', 'پایه سوم', 'پایه چهارم', 'پایه پنجم', 'پایه ششم', 'رسانه', 'آموزش معلمان', 'بازی و سرگرمی']
    icons = ['fa-user-alt', 'fa-user-ninja', 'fa-user-astronaut', 'fa-user-tie', 'fa-user-md', 'fa-user-graduate', 'fa-file-image', 'fa-book', 'fa-gamepad']
    aval = ['ریاضی', 'علوم', 'آموزش قرآن', 'فارسی', 'نگارش فارسی'];
    dovom = ['ریاضی', 'علوم', 'آموزش قرآن', 'هدیه های آسمان', 'فارسی', 'نگارش فارسی'];
    sevom = ['ریاضی', 'علوم', 'آموزش قرآن', 'هدیه های آسمان', 'مطالعات', 'فارسی', 'نگارش فارسی'];
    chaharom = ['ریاضی', 'علوم', 'آموزش قرآن', 'هدیه های آسمان', 'مطالعات', 'فارسی', 'نگارش فارسی'];
    panjom = ['ریاضی', 'علوم', 'آموزش قرآن', 'هدیه های آسمان', 'مطالعات', 'فارسی', 'نگارش فارسی'];
    sheshom = ['ریاضی', 'علوم', 'آموزش قرآن', 'هدیه های آسمان', 'کار و فناوری', 'تفکر و پژوهش', 'مطالعات', 'فارسی', 'نگارش فارسی'];
    arrSubs = [this.aval, this.dovom, this.sevom, this.chaharom, this.panjom, this.sheshom]
}
let products = class {
    constructor(name, price, srcImg, id, countInShop, subject, insub, offPrice, type) {
        this.name = name;
        this.price = price;
        this.srcImg = srcImg;
        this.id = id;
        this.countInShop = countInShop;
        this.subject = subject;
        this.insub = insub;
        this.offPrice = offPrice;
        this.type = type;
    }
    countInCart = 0;
    bestPrice = false;
    dataCreate = new Date();
    saleCount = 0;
    Shegeft = false;
    liked = false;
    alarmed = false;
    separatorNum(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    normalNum(x) {
        return Number(x.replace(/[^0-9.-]+/g, ""));
    }
    creatShegeftProduct() {
        let newLi = document.createElement('li');
        newLi.classList.add('offProduct')
        newLi.id = this.id;
        newLi.innerHTML = `<img src="${this.srcImg}">
        <div class="name-text">${this.name}</div>
        <div class="offBox">${Math.round(((this.price - this.offPrice) / this.price) * 100)}<span>%</span></div>
        <div class="price-text">
            <div class='mainPriceDiv'>
                <output>${this.separatorNum(this.offPrice)}</output>
                <span>تومان</span>
            </div>
            <div class = 'offPriceDiv'>
                <p>${this.separatorNum(this.price)}</p>
            </div>
        </div>
        <div class = 'typeText'>
            <p>${this.type}</p>
        </div>
        <div class="addProductIcon offMood">
            <div class = 'minusBtn'><i class = 'fa fa-minus'></i></div>
            <div class = 'countText'><p>${this.countInCart}</p></div>
            <div class = 'plusBtn'><i class = 'fa fa-plus'></i></div>
        </div>`
        ulProduct.appendChild(newLi);
    }
}

let AllProducts = []

let book_1_Name = "کتاب تیزهوشان جامع گاج ششم IQ";
let book_1_src = "../../Images/Products/books/book_1.jpg";
let book_1 = new products(book_1_Name, 245000, book_1_src, '1', 10, 'sheshom', 'jame', 188000, 'کتاب چاپی');
book_1.Shegeft = true;
book_1.bestPrice = true;
book_1.dataCreate = new Date(2023, 3, 12);
AllProducts.push(book_1);

let book_2_Name = "کتاب ششم جامع گاج EQ";
let book_2_src = "../../Images/Products/books/book_2.jpg";
let book_2 = new products(book_2_Name, 155000, book_2_src, '2', 10, 'sheshom', 'jame', 145000, 'کتاب چاپی');
book_2.Shegeft = true;
book_2.dataCreate = new Date(2023, 3, 13);
AllProducts.push(book_2);

let book_3_Name = "کتاب پنجم جامع خیلی سبز";
let book_3_src = "../../Images/Products/books/book_3.jpg";
let book_3 = new products(book_3_Name, 228000, book_3_src, '3', 15, 'panjom', 'jame', 205000, 'کتاب چاپی');
book_3.Shegeft = true;
book_3.dataCreate = new Date(2023, 3, 14);
AllProducts.push(book_3);

let book_4_Name = "کتاب ریاضی پنجم سیرتاپیاز گاج";
let book_4_src = "../../Images/Products/books/book_4.jpg";
let book_4 = new products(book_4_Name, 212000, book_4_src, '4', 11, 'panjom', 'riazi', 187000, 'کتاب چاپی');
book_4.Shegeft = true;
book_4.dataCreate = new Date(2023, 3, 15);
AllProducts.push(book_4);

let book_5_Name = "کتاب جامع پنجم قند و عسل گاج";
let book_5_src = "../../Images/Products/books/book_5.jpg";
let book_5 = new products(book_5_Name, 305000, book_5_src, '5', 31, 'panjom', 'jame', 287000, 'کتاب چاپی');
book_5.Shegeft = true;
book_5.dataCreate = new Date(2023, 3, 22);
AllProducts.push(book_5);

let book_6_Name = "کتاب خرچنگ غورباقه ننویسیم پنجم گاج";
let book_6_src = "../../Images/Products/books/book_6.jpg";
let book_6 = new products(book_6_Name, 185000, book_6_src, '6', 16, 'panjom', 'farsi', 137000, 'کتاب چاپی');
book_6.Shegeft = true;
book_6.bestPrice = true;
book_6.dataCreate = new Date(2023, 3, 26);
AllProducts.push(book_6);

let book_7_Name = "کتاب ریاضی پنجم کارپوچینو پنجم گاج";
let book_7_src = "../../Images/Products/books/book_7.jpg";
let book_7 = new products(book_7_Name, 305000, book_7_src, '7', 19, 'panjom', 'riazi', 287000, 'کتاب چاپی');
book_7.Shegeft = true;
book_7.dataCreate = new Date(2023, 3, 26);
AllProducts.push(book_7);

let book_8_Name = "کتاب علوم پنجم سیر تا پیاز گاج";
let book_8_src = "../../Images/Products/books/book_8.jpg";
let book_8 = new products(book_8_Name, 248000, book_8_src, '8', 25, 'panjom', 'olom', 212000, 'کتاب چاپی');
book_8.Shegeft = true;
book_8.bestPrice = true;
book_8.dataCreate = new Date(2023, 3, 26);
AllProducts.push(book_8);

let book_9_Name = "ماجراهای من و درسام جامع ششم خیلی سبز";
let book_9_src = "../../Images/Products/books/book_9.jpg";
let book_9 = new products(book_9_Name, 248000, book_9_src, '9', 13, 'sheshom', 'olom', 212000, 'کتاب چاپی');
book_9.Shegeft = true;
book_9.dataCreate = new Date(2023, 3, 26);
AllProducts.push(book_9);

let book_10_Name = "PDF کتاب درسی ریاضی ششم";
let book_10_src = "../../Images/Products/Pdfs/pdf_1.jpg";
let book_10 = new products(book_10_Name, 12000, book_10_src, '10', 11, 'sheshom', 'riazi', 5000, 'PDF');
book_10.Shegeft = true;
book_10.dataCreate = new Date(2023, 4, 2);
AllProducts.push(book_10);

let book_11_Name = "PDF کتاب درسی فارسی ششم";
let book_11_src = "../../Images/Products/Pdfs/pdf_2.jpg";
let book_11 = new products(book_11_Name, 12000, book_11_src, '11', 23, 'sheshom', 'farsi', 5000, 'کتاب چاپی');
book_11.Shegeft = true;
book_11.bestPrice = true;
book_11.dataCreate = new Date(2023, 4, 3);
AllProducts.push(book_11);

let book_12_Name = "PDF کتاب درسی علوم ششم";
let book_12_src = "../../Images/Products/Pdfs/pdf_3.gif";
let book_12 = new products(book_12_Name, 12000, book_12_src, '12', 34, 'sheshom', 'olom', 5000, 'کتاب چاپی');
book_12.Shegeft = true;
book_12.bestPrice = true;
book_12.dataCreate = new Date(2023, 4, 6);
AllProducts.push(book_12);

let book_13_Name = "PDF کتاب درسی نگارش ششم";
let book_13_src = "../../Images/Products/Pdfs/pdf_4.gif";
let book_13 = new products(book_13_Name, 12000, book_13_src, '13', 5, 'sheshom', 'negaresh', 5000, 'کتاب چاپی');
book_13.Shegeft = true;
book_13.bestPrice = true;
book_13.dataCreate = new Date(2023, 4, 7);
AllProducts.push(book_13);

let book_14_Name = "کتاب علوم پنجم سیر تا پیاز گاج";
let book_14_src = "../../Images/Products/books/book_14.jpg";
let book_14 = new products(book_14_Name, 248000, book_14_src, '14', 8, 'chaharom', 'olom', 212000, 'کتاب چاپی');
book_14.Shegeft = true;
book_14.bestPrice = true;
book_14.dataCreate = new Date(2023, 4, 7);
AllProducts.push(book_14);

let book_15_Name = "کتاب علوم پنجم سیر تا پیاز گاج";
let book_15_src = "../../Images/Products/books/book_15.jpg";
let book_15 = new products(book_15_Name, 248000, book_15_src, '15', 16, 'chaharom', 'olom', 212000, 'کتاب چاپی');
book_15.Shegeft = true;
book_15.bestPrice = true;
book_15.dataCreate = new Date(2023, 4, 11);
AllProducts.push(book_15);

let book_16_Name = "کتاب علوم پنجم سیر تا پیاز گاج";
let book_16_src = "../../Images/Products/books/book_16.jpg";
let book_16 = new products(book_16_Name, 248000, book_16_src, '16', 19, 'chaharom', 'olom', 212000, 'کتاب چاپی');
book_16.Shegeft = true;
book_16.bestPrice = true;
book_16.dataCreate = new Date(2023, 4, 11);
AllProducts.push(book_16);

let book_17_Name = "کتاب علوم پنجم سیر تا پیاز گاج";
let book_17_src = "../../Images/Products/books/book_17.jpg";
let book_17 = new products(book_17_Name, 248000, book_17_src, '17', 21, 'sevom', 'olom', 212000, 'کتاب چاپی');
book_17.Shegeft = true;
book_17.bestPrice = true;
book_17.dataCreate = new Date(2023, 4, 11);
AllProducts.push(book_17);

let book_18_Name = "کتاب علوم پنجم سیر تا پیاز گاج";
let book_18_src = "../../Images/Products/books/book_18.jpg";
let book_18 = new products(book_18_Name, 248000, book_18_src, '18', 6, 'sevom', 'olom', 212000, 'کتاب چاپی');
book_18.Shegeft = true;
book_18.bestPrice = true;
book_18.dataCreate = new Date(2023, 4, 21);
AllProducts.push(book_18);

let book_19_Name = "کتاب علوم پنجم سیر تا پیاز گاج";
let book_19_src = "../../Images/Products/books/book_19.jpg";
let book_19 = new products(book_19_Name, 248000, book_19_src, '19', 15, 'dovom', 'olom', 212000, 'کتاب چاپی');
book_19.Shegeft = true;
book_19.bestPrice = true;
book_19.dataCreate = new Date(2023, 4, 22);
AllProducts.push(book_19);

let book_20_Name = "کتاب علوم پنجم سیر تا پیاز گاج";
let book_20_src = "../../Images/Products/books/book_20.jpg";
let book_20 = new products(book_20_Name, 248000, book_20_src, '20', 21, 'dovom', 'olom', 212000, 'کتاب چاپی');
book_20.Shegeft = true;
book_20.bestPrice = true;
book_20.dataCreate = new Date(2023, 4, 25);
AllProducts.push(book_20);

AllProducts.map(pro => {
    pro.saleCount = Math.floor(Math.random() * 30);
})