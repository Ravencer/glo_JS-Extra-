'use strict';

let daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let monthRu = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 
  'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];





function formatNum(num, format){
  num = Math.abs(num) % 100; 
  let num1 = num % 10;
  if (num > 10 && num < 20) { 
    return format[2]; 
  }
  else if (num1 > 1 && num1 < 5) {
     return format[1]; 
    }
  else if (num1 === 1) { 
    return format[0]; 
  }
  return format[2];
}

function longFormat(){
  let dat = new Date();
  let longDat = 'Сегодня ' + daysRu[dat.getDay()] + ', ' + dat.getDate() + ' ' + monthRu[dat.getMonth()] + ' ' + dat.getFullYear() + ' года' + ', ' + dat.getHours() + ' ' + formatNum(dat.getHours(), ['час', 'часа', 'часов']) + ' ' + dat.getMinutes() + ' ' + formatNum(dat.getMinutes(), ['минута', 'минуты', 'минут']) + ' ' + dat.getSeconds() + ' ' + formatNum(dat.getSeconds(), ['секунда', 'секунды', 'секунд']);
  return longDat;
}

function shortFormat(){
  let date = new Date();
  let datFormat = ("0" + date.getDate()).slice(-2) + "." + ("0"+(date.getMonth()+1)).slice(-2) + 
  "." + date.getFullYear() + " - " + 
  ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + 
  ":" + ("0" + date.getSeconds()).slice(-2);
  return datFormat;
}


let htmlTodayLong = document.querySelector('.today-day--long');
let htmlTodayShort = document.querySelector('.today-day--short');



htmlTodayLong.textContent = longFormat();
htmlTodayShort.textContent = shortFormat();

setInterval(function() {
  htmlTodayLong.textContent = longFormat();
  htmlTodayShort.textContent = shortFormat();
} , 1000);