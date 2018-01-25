'use strict';

var productNames = [];

PhotoChoice.allPhotos = [];

var selectEL = document.getElementById('productList');
var imgElProductImage = document.getElementById('productImage');
var pElFormProductName = document.getElementById('formProductName');

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

function handleSubmit (e) {
  var quantity = e.target.quantity.value;
}

function handleOptionSelect (e) {
  var productName = e.target.value;
  for (var i in productNames) {
    if(productNames[i] === productName) {
      imgElProductImage.alt = PhotoChoice.allPhotos[i].name;
      imgElProductImage.scr = PhotoChoice.allPhotos[i].filepath;
      pElFormProductName.textContent = PhotoChoice.allPhotos[i].name;
    }
  }
}

selectEL.addEventListener('change', handleOptionSelect);