//함수 표현식
//함수 선언
function funcA (){
  console.log("funcA");
};

let varA = funcA;//호출하지 않고 함수 자체를 변수에 담음
varA(); //함수를 담은 변수로 함수를 호출


// varB();//함수 표현식으로 선언 된 함수는 호이스팅의 대상이 되지 않는다
//함수 표현식으로 선언
//익명함수
let varB = function (){
  console.log("funcB");
};

varB();

//화살표 함수 
// let varC = () => {return 1};
// console.log(varC());
let varC = () => 1;
console.log(varC());

let varD = (value) => value  * 10;
console.log(varD(20));








