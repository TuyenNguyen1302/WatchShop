var searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function(){
        this.parentElement.classList.toggle('open'); 
        this.previousElementSibling.focus(); 
    })