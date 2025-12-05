//스코프 
//변수나 함수에 접근하거나 호출할 수 있는 범위
//전역 스코프 : 전체 영역에서 접근 가능
//지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프 변수
function funcA (){
  let b = 2; // 지역 스코프 변수
  console.log(a);
  function funcB(){
    console.log("funcB");// 지역 스코프 함수
  }
};

funcA();
// console.log(b);//b is not defined 오류 발생
// funcB();//funcB is not defined 오류 발생


if(true){
  let c = 1; // 지역 스코프 변수
};

for (let i = 0; i < 5; i++) {
  console.log(i); // i는 지역 스코프 변수
};
// console.log(i)//i is not defined 오류 발생










