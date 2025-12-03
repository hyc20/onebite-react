//형변환
//1. 묵시적 형변환
//자바스크립트 엔진이 알아서 형 변환 

let num = 10;
let str = "20";
const result = num + str;
console.log(result);//1020 num이 묵시적으로 문자형으로 형변환

//2. 명시적 형변환
//개발자가 내장 함수 등을 이용해 직접 형 변환을 명시
//ex) 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(typeof strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);

//parseInt로 문자가 함께 있는 숫자를 number로 바꿀 수 있지만 
//숫자 앞에 문자가 먼저 오는 경우 parseInt로 숫자 추출 불가능
let str3 = "abcd10개";
let strToNum3 = parseInt(str3);
console.log(strToNum3);

//숫자 => 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1)
console.log(typeof numToStr1)

