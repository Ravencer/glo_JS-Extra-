'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let today = new Date();

for(let i = 0; i < week.length; i++){
  if(week[i] !== 'Суббота' && week[i] !== 'Воскресенье' && today.getDay() !== i){
    document.write('<p class="week-day">' + week[i] + '</p>');
  }
  else if(today.getDay() === i){
    document.write('<p class="week-day" style="font-weight: bold;">' + week[i] + '</p>');
  }
  else{
    document.write('<p class="week-day" style="font-style: italic;">' + week[i] + '</p>');
  }
}