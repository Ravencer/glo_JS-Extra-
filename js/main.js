'use strict';


function DomElement(selector, height, width, bg, fontsize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.fontsize = fontsize;
  this.bg = bg;
}

DomElement.prototype.createElement = function(){
  let newElem;
  if(this.selector.slice(0,1) === '.'){
    newElem = document.createElement('div');
  }
  else if(this.selector.slice(0,1) === '#'){
    newElem = document.createElement('p');
  }
  else{
    alert('Вы ввели неверную строку!');
    return null;
  }
  newElem.className = this.selector.slice(1);
  newElem.className = this.selector.slice(1);
  newElem.style.height = this.height + 'px';
  newElem.style.width = this.width + 'px';
  newElem.style.fontSize = this.fontsize + 'px';
  newElem.style.background = this.bg;
  newElem.textContent = 'Hello World!';
  return newElem;
};

let domElem = new DomElement(prompt('Введите строку selector'), 50, 100, 'green', 14);
if(domElem.createElement() !== null){
  document.body.append(domElem.createElement());
}

