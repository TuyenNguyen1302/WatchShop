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
function updateImg(index){
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

function autoShow(){
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
    setTimeout(autoShow,2000);
}

autoShow();