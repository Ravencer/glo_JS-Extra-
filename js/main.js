let lang = prompt('Введите предпочитаемый язык?');
let day = new Date();
let daysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log('Через if');
if(lang === "ru"){
  for (let i = 0; i < 7; i++){
    console.log(daysRu[i]);
  }
}
else if (lang === "en"){
  for (let i = 0; i < 7; i++){
    console.log(daysEn[i]);
  }
}
console.log('Через switch');
switch(lang){
  case "ru":
    for (let i = 0; i < 7; i++){
      console.log(daysRu[i]);
    }
    break;
  case "en":
    for (let i = 0; i < 7; i++){
      console.log(daysEn[i]);
    }
    break;
}
let daysArr = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];
let result = lang === "ru" ? 0 : 1;
console.log('Через многомерные массивы');
for (let i = 0; i < 7; i++){
  console.log(daysArr[result][i]);
}


let namePerson = prompt('Введите имя: ');
let resultName = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(resultName);