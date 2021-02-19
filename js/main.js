'use strict';

let buttonChange = document.querySelector('#change');
let textChange = document.querySelector('#color');


buttonChange.addEventListener('click', () =>{
  let randomHex = Math.floor(Math.random()*16777215).toString(16);
  textChange.textContent = '#' + randomHex;
  document.body.style.backgroundColor = '#' + randomHex;
});

