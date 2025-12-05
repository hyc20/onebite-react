//상수 객체
//상수에 저장한 객체

const animal = {
  type : "고양이",
  name : "나비",
  color : "black",
};

animal.age = 2;//추가
animal.name = "네로";//수정
delete animal.color;//삭제

console.log(animal);

//상수는 새로운 값을 할당하지 못한다
// animal = 123;
// console.log(animal); //TypeError 

//메소드
//값이 함수인 프로퍼티
const person = {
  name : "홍용천",
  //메소드
  sayHi: function (){
    console.log('hello')
  },
  arrowFunc: () =>  console.log('arrowFunc'),
  
}
person.sayHi();
person.arrowFunc();
person['sayHi']();
person['arrowFunc']();
