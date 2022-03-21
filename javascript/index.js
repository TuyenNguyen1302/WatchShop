// HEADER SCROLL
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.nav').style.cssText = `padding: 10px;`;
        document.querySelector('.heading-logo').style.cssText = `width: 100px;`;
    } else {
        document.querySelector('.nav').style.cssText = `padding: 20px `;
        document.querySelector('.heading-logo').style.cssText = `width: 130px;`;
    }
}

// NÚT SEARCH HEADER
var searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', function () {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
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