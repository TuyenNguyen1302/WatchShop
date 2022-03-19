$(document).ready(function () {
    $('.list-card').slick({
        slidesToShow: 4,
        slidesToScroll: 1, //move 1 lần ? ảnh (default: 1)
        infinite: true, //lặp lại vô tận -> tới cuối quay lại đầu
        // autoplay: true,
        // autoplaySpeed: 1000, // 2s tự động move

        // Custom nút prev, next
        arrows: true, //xuất hiện nút prev, next
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-left-long' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-right-long' aria-hidden='true'></i></button>",

        draggable: false, // dùng chuột -> move ảnh
    });
})

var searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', function () {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})

// FEMAL
var showImg = document.querySelector('.show-img');
var listImg = document.querySelectorAll('.list-img img');
var btnLeft = document.querySelector('.left');
var btnRight = document.querySelector('.right');

var currentIndex = 0;
function updateImg(index) {
    currentIndex = index;
    showImg.src = listImg[index].getAttribute('src');
}
btnLeft.addEventListener('click', function () {
    showImg.style.animation = '';

    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }

    setTimeout(() => {
        updateImg(currentIndex);
        showImg.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)
})

btnRight.addEventListener('click', function () {
    showImg.style.animation = '';

    if (currentIndex == listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    setTimeout(() => {
        updateImg(currentIndex);
        showImg.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)

})

function autoShow() {
    showImg.style.animation = '';
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }

    setTimeout(() => {
        updateImg(currentIndex);
        showImg.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)
    setTimeout(autoShow, 2000);
}

autoShow();

// POPUP CARD
var close = document.querySelector('.popup-item i');
var open = document.querySelectorAll('.card-btn .card-view');
var popup = document.querySelector('.popup-card');
var body = document.querySelector('body');

function togglePopup(e) {
    popup.classList.toggle('hide');
    body.classList.toggle('scroll-none');
}

open.forEach(e => {
    e.addEventListener('click', togglePopup);
});
close.addEventListener('click', togglePopup);
popup.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) togglePopup(e);
})

// POPUP IMG
var popupShowImg = document.querySelector('.popupImg');
var popupListImg = document.querySelectorAll('.popup-list-img img');

var popupCurrentIndex = 0;

function updateImagePopup(popupIndex) {
    popupCurrentIndex = popupIndex;
    popupShowImg.src = popupListImg[popupIndex].getAttribute('src');
}
popupListImg.forEach((imgE, popupIndex) => {
    imgE.addEventListener('click', function (e) {
        updateImagePopup(popupIndex);
    })
})

// POPUP TAB
function openTab(evt, tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName('tablink');
    for (i = 0; i < tabcontent.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// HEADER SCROLL
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.nav').style.cssText = `padding: 10px;`;
        document.querySelector('.heading-logo').style.cssText = `width: 100px;`;
    } else {
        document.querySelector('.nav').style.cssText = `padding: 20px `;
        document.querySelector('.heading-logo').style.cssText = `width: 130px;`;
    }
}