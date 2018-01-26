'use strict';

var productNames = [];
var cart = [];

PhotoChoice.allPhotos = [];

var selectEL = document.getElementById('productList');
var imgElProductImage = document.getElementById('productImage');
var imgElconfirmImg = document.getElementById('confirmImg');
var pElFormProductName = document.getElementById('formProductName');
var pELconfirmQuantity = document.getElementById('confirmQuantity');
var formElorderForm = document.getElementById('orderForm');

// Create object constructor
function PhotoChoice(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.quantity = 0;
  PhotoChoice.allPhotos.push(this);
  productNames.push(this.name);
}

// Create instances of PhotoChoices
new PhotoChoice('bag', 'img/bag.jpg');
new PhotoChoice('banana', 'img/banana.jpg');
new PhotoChoice('bathroom', 'img/bathroom.jpg');
new PhotoChoice('boots', 'img/boots.jpg');
new PhotoChoice('breakfast', 'img/breakfast.jpg');
new PhotoChoice('bubblegum', 'img/bubblegum.jpg');
new PhotoChoice('chair', 'img/chair.jpg');
new PhotoChoice('cthulhu', 'img/cthulhu.jpg');
new PhotoChoice('dog-duck', 'img/dog-duck.jpg');
new PhotoChoice('dragon', 'img/dragon.jpg');
new PhotoChoice('pen', 'img/pen.jpg');
new PhotoChoice('pet-sweep', 'img/pet-sweep.jpg');
new PhotoChoice('scissors', 'img/scissors.jpg');
new PhotoChoice('shark', 'img/shark.jpg');
new PhotoChoice('sweep', 'img/sweep.png');
new PhotoChoice('tauntaun', 'img/tauntaun.jpg');
new PhotoChoice('unicorn', 'img/unicorn.jpg');
new PhotoChoice('usb', 'img/usb.gif');
new PhotoChoice('water-can', 'img/water-can.jpg');
new PhotoChoice('wine-glass', 'img/wine-glass.jpg');

function checkLocalStorage () {
  if (!localStorage.cart) {
    localStorage.cart = JSON.stringify([]);
  } else {
    cart = JSON.parse(localStorage.cart);
    confirmCart(cart[0]);
  }
}

function populateOptions () {
  for (var i in PhotoChoice.allPhotos) {
    var optionEl = document.createElement('option');
    optionEl.setAttribute('value', PhotoChoice.allPhotos[i].name);
    optionEl.textContent = PhotoChoice.allPhotos[i].name;
    selectEL.appendChild(optionEl);
  }
}

function confirmCart (objectAdded) {
  imgElconfirmImg.src = objectAdded.filepath;
  imgElconfirmImg.alt = objectAdded.name;
  pELconfirmQuantity.textContent = 'You have added ' + objectAdded.quantity + ' of ' + objectAdded.name;
}

function handleSubmit (e) {
  e.preventDefault();
  var quantity = e.target.quantity.value;
  var productName = pElFormProductName.textContent;
  var index = null;
  for (index in PhotoChoice.allPhotos) {
    if(PhotoChoice.allPhotos[index].name === productName) {
      PhotoChoice.allPhotos[index].quantity = quantity;
    }
  }
  cart = JSON.parse(localStorage.cart); // pull the array from local storage
  cart.push(PhotoChoice.allPhotos[index]); // update the array
  localStorage.cart = JSON.stringify(cart); // pass it back into local sotrage
  confirmCart(index);
}

function handleOptionSelect (e) {
  var productName = e.target.value;
  for (var i in productNames) {
    if(productNames[i] === productName) {
      imgElProductImage.alt = PhotoChoice.allPhotos[i].name;
      imgElProductImage.src = PhotoChoice.allPhotos[i].filepath;
      pElFormProductName.textContent = PhotoChoice.allPhotos[i].name;
    }
  }
}

selectEL.addEventListener('change', handleOptionSelect);

formElorderForm.addEventListener('submit', handleSubmit);

populateOptions();
checkLocalStorage();
