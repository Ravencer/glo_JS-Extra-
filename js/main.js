'use strict';


function DomElement(selector, height, width, bg, fontsize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.fontsize = fontsize;
  this.bg = bg;
}

DomElement.prototype.createElement = function(){
  if(this.selector.slice(0,1) === '.'){
    let newElem = document.createElement('div');
    newElem.className = this.selector.slice(1);
    newElem.style.height = this.height + 'px';
    newElem.style.width = this.width + 'px';
    newElem.style.fontSize = this.fontsize + 'px';
    newElem.style.background = this.bg;
    newElem.textContent = 'Hello World!';
    return newElem;
  }
  else if(this.selector.slice(0,1) === '#'){
    let newElem = document.createElement('p');
    newElem.className = this.selector.slice(1);
    newElem.style.height = this.height + 'px';
    newElem.style.width = this.width + 'px';
    newElem.style.fontSize = this.fontsize + 'px';
    newElem.style.background = this.bg;
    newElem.textContent = 'Hello World!';
    return newElem;
  }
  else{
    alert('Вы ввели неверную строку!');
    return null;
  }
};

let domElem = new DomElement(prompt('Введите строку selector'), 50, 100, 'green', 14);
document.body.append(domElem.createElement());
