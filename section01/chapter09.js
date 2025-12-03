//1. if 조건문
let num = 10;
if(num >=10){
  console.log("num은 10 이상");
  console.log("조건이 참입니다");
}
else{
  console.log("조건은 거짓입니다");
}

//2. Switch 조건문
//if 조건문과 기능 자체는 동일
//다수의 조건문을 처리할 때 if보다 직관적
let animal = "owl";

switch(animal){
  case  "dog" : 
      console.log('animal은 dog');
      break;
  case  "cat" : 
      console.log('animal은 cat');
      break;
  case  "bird" : 
      console.log('animal은 bird');
      break;   
  default : 
      console.log("해당 동물은 없습니다");     
}
