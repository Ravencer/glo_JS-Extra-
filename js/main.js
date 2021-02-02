'use strict';

function stringExtension(args){
  let trimmed = ' ';
  if(typeof(args) !== "string"){
    console.log("Вы ввели не строку!");
    console.log(typeof(args));
  }
  else {
    trimmed = args.trim();
    if(trimmed.length > 30){
      trimmed = trimmed.slice(0, 30);
      trimmed += "...";
    }
  }
  return trimmed;
}

console.log(stringExtension("   Приветвфывдолфывдлфоывлдфыовфдлывофдлывофдывлофдылвофывдлфоывдлфывофдлывофдылвофдылвофыдвлофывдлфоывдлфыво   "));