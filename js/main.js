let num = 266219;
let multiNum = 1;
while (num > 0){
  multiNum *= num % 10;
  num = parseInt(num / 10);
}
console.log(multiNum);
multiNum **= 3;
multiNum = multiNum.toString();
console.log(multiNum[0], multiNum[1]);