'use strict';

let arr = ["23123", "4312312", "12312312", "5555", "4444", "2222", "9312"];

function checkNum(num){
  num = parseInt(num);
  let digit = 0;
  while(num > 0){
    digit = num % 10;
    num = parseInt(num / 10);
  }
  if(digit === 2 || digit === 4){
    return true;
  }
  else{
    return false;
  }
}

function writeNum (arr){
  for(let i = 0; i < arr.length; i++){
    if(checkNum(arr[i])){
      console.log(arr[i]);
    }
    
  }
}
writeNum(arr);

let n = 100;
for (let i = 2; i < n+1; i++) {
    let flag = 1;
    if (i > 2 && i % 2 !== 0)
    {
        for (let j = 3; j*j <= i ; j=j+2)
        {
            if (i % j===0)
            {
              flag = 0;
              break;
            }
        }
    }
    else if (i !== 2) {
      flag = 0;
    }
    if (flag === 1) {
      console.log(i + " делится на 1 и " + i);
    }
}
