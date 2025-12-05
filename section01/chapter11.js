//함수선언
function greetings(){
  console.log('환영합니다');
}
console.log('호출 전')
//함수 호출
greetings();
console.log('호출 후')



//호이스팅
console.log(getArea(10,10));

function getArea(width, height){
  function another(){
    console.log('another')
  }
  another();//내부 함수 호출
  return width * height;
}
