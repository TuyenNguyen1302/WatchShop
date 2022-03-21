var btnToggle = document.querySelector('.dropdown-toggle');
btnToggle.addEventListener('click', function(){
    document.querySelector('.dropdown-menu').classList.toggle('open');
})

import listProduct from "/data/ListProduct.json" assert { type : "json"};
console.log(listProduct);

var card = document.querySelector('.list-product');

// load data
card.innerHTML = '';
listProduct.forEach(item => {
    let newCard = document.createElement('div');
    newCard.classList.add('card-detail');
    newCard.innerHTML = `<a href="#" class="card-img">
                        <img src="${item.img1}" alt="No Image">
                        <img src="${item.img2}" alt="No Image">
                        </a>
                        <div class="sale">
                            <span>${item.sale}</span>
                        </div>
                        <div class="card-btn">
                            <button class="card-shopping icon">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </button>
                            <button class="card-like icon">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                            <button class="card-view icon">
                                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                            </button>
                        </div>
                        <div class="card-info">
                            <div class="category">
                                <a href=""><small>${item.category}</small></a>
                            </div>
                            <h3 class="name">${item.name}</h3>
                            <div class="rating">
                                <span>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                </span>
                            </div>
                            <div class="price">
                                <del class="old">${item.old} ₫</del>
                                <span class="new"><big>${item.new} ₫</big></span>
                            </div>
                        </div>`;
    card.appendChild(newCard);
})