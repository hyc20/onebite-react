//객체
//현실에 존재하는 어떤 사물이나 개념을 표현하기 용이
//객체 생성
let obj1 = new Object();// 객체 생성자 방식
let obj2 = {}; // 객체 리터럴 방식

let person = {
  name : '홍용천', //객체 프로퍼티
  age : 20,      //key : value 형식
  hobby : 'reading',
  extra : {},
  10 : 20,
  "like cat" : true, //띄어쓰기를 포함하는 key 값을 사용하려는 경우 따옴표로 키 값을 표현해야 한다
};

//객체 프로퍼티 다루는 방법
//특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name1 = person.name;
console.log(name1);

let name2 = person['name'];//접근하고자 하는 프로퍼티의 키 값을 따옴표로 표현한다
console.log(name2);

let property = "hobby";
let hobby = person[property];
console.log(hobby);


//새로운 프로퍼티 추가
person.job = "developer";
person["favorite food"] = "고기";
console.log(person);


//프로퍼티 수정
person.job = "writer";
person["favorite food"] = "회";
console.log(person);

//프로퍼티 삭제
//delete 키워드로 프로퍼티 삭제
delete person.job;
delete person["favorite food"];
console.log(person);

//프로퍼티의 존재 유무 확인 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);

