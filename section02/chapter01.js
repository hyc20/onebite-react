//Truthy & Falsy
//1. Falsy 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //bigint 
if(!f1){
  console.log("Falsy");
}

//2. Truty 
//Falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t4){
  console.log("Truty");
}

//3. 활용 사례
function printName(person){
  if(person === undefined || person === null){
    console.log("person 값이 없음");
    return;
  }
  console.log(person.name);
};
//let person;//undefined
let person = null;
// let person = {
//   name : "홍용천",
// }
printName(person);


