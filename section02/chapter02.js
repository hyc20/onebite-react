//단락 평가 
//논리 연산자 식 - and 연산자 && 
//or 연산자 ||
//AND의 경우 varA && varB에서 varA만 연산 돼도 결과 값이 나오는 경우 
//즉 varA의 값이 false 인 경우 varB는 접근하지 않아도 연산의 값이 결정된다

//or의 경우 varA  || varB에서 varA만 연산 돼도 결과 값이 나오는 경우 
//즉 varA의 값이 true인 경우 varB는 접근하지 않아도 연산의 값이 결정된다

function returnFalse(){
  console.log('false 함수')
  return false;
};

function returnTrue(){
  console.log('true 함수')
  return true;
};

// console.log(returnFalse());
// console.log(returnTrue());
console.log(returnFalse() && returnTrue());
//&& 연산자에서 앞의 결과가 false인 경우 && 뒤의 연산 결과는 볼 필요도 없으므로 returnFalse의 내용만 실행된다
//이를 단락 평가라고 한다
console.log(returnTrue() || returnFalse());
//단락 평가가 작동하지 않는다 
//||연산자 앞의 결과가 true인 경우 || 뒤의 연산 결과는 볼 필요도 없으므로 returnTrue의 내용만 실행한다 
console.log(returnFalse() || returnTrue());
//단락 평가가 작동한다
//||연산자 앞의 결과가 false인 경우 || 뒤의 연산 결과가 true인 경우에는 true를 반환해야 하므로 returnTrue 내용을 실행한다


//단락 평가 활용 사례
// function printName(person){
//   if(!person){ //person의 값이 falsy한 경우
//     console.log("person의 값이 없음")
//     return;
//   };
//   console.log(person);
// };

// function printName(person){
//   console.log(person  && person.name);//person의 값이 falsy한 값이면 person.name은 고려하지 않고 fasly 값을 리턴
// };
// printName();
function printName(person){
  const name = person && person.name;
  console.log(name  || "person의 값이 없음");
};
printName();//person의 값이 없음
printName({name: "홍용천"});//{name:"홍용천"} 객체를 person으로 전달했기 떄문에 객체의 name이 truthy값이 되어 값을 표시







