let hamburger = $('.hamburger');
hamburger.click(hamburgerSwitch);

function hamburgerSwitch() {
    $('.sidebar').toggleClass("sidebar-off");
    $('.navbar').toggleClass("navbar-minimized");
    $('main').toggleClass("main-full");
    $('.blanket').toggleClass("blanket-on");
}

"use strict";

const key = "access_key=1d9f4ad80c325672be5c25918a2ac7db";
const baseUrl = "http://api.exchangeratesapi.io/v1/"

let rates;

const initialize = async () => {
  const url = `${baseUrl}latest?${key}`;
  
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      const convertFromInput = document.getElementById('convertFrom');
      const convertToInput = document.getElementById('convertTo');
      Object.keys(data.rates).forEach(type => {
        convertFromInput.appendChild(createOptionElement(type, true));
        convertToInput.appendChild(createOptionElement(type, false));
      })

      rates = data.rates;
    })
}
initialize();

const createOptionElement = (type, isFrom) => {
  const element = document.createElement("option")
  element.setAttribute("value", type);
  element.textContent = type;

  if(type === "USD" && isFrom) element.selected = true;
  if(type === "INR" && !isFrom) element.selected = true;

  return element;
}

const convertCurrency = async () => {
  value = document.getElementById('value').value;
  convertFrom = document.getElementById('convertFrom').value;
  convertTo = document.getElementById('convertTo').value;

  const result = (value * rates[convertTo]) / rates[convertFrom];

  const resultElement = document.querySelector('.display__result')
  resultElement.textContent = result.toFixed(3);
}