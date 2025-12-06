//구조분해 할당 
//배열이나 객체에 저장된 여러개 값들을 분해하여 다른 변수에 할당하는 문법
//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

//one에 1, two에 2, three에 3이 대입된다
// let [one, two, three] = arr; 
// console.log(one, two, three);

// let [one, two, three, four] = arr; 
// console.log(one, two, three, four);

let [one, two, three, four = 4] = arr; 
console.log(one, two, three, four);

//2. 객체의 구조분해 할당
let person = {
  name :"홍용천",
  age : 20,
  hobby : "reading",
};

//구조분해 문법으로 객체의 키 값을 기준으로 변수에 값을 저장할 수 있다 
// let {
//   name,
//   age, 
//   hobby,
//   extra ="hello"
// } = person;
// console.log(name, age, hobby, extra);

let {
  name,
  age : myAge, //변수명 변경
  hobby,
  extra ="hello"
} = person;
console.log(name, myAge, hobby, extra);

//3. 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법 
const func = ({name, age, hobby, extra}) => {
  console.log(name, age, hobby, extra);
};
func(person);

