'use strict';

var productNames = [];
PhotoChoice.allPhotos = [];

function PhotoChoice(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.quantity = 0;
  PhotoChoice.allPhotos.push(this);
  productNames.push(this.name);
}

function cartLocalStorage() {
  productNames = localStorage.productNames.split(',');
  PhotoChoice.allPhotos = JSON.parse(localStorage.Photochoice.allPhotos);
}

function processOrder(event) {
  event.preventDefault();
  //display animated confirmation message
  
  //clear input feilds
  localStorage.clear();
}