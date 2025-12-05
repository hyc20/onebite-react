//콜백 함수
//자신이 아닌 다른 함수에 인수로 전달 된 함수를 의미

// main(function(){
//   console.log("익명 콜백 함수 호이스틩")
// });

//sub를 인자로 받는 함수
function main(value){
  console.log("시작");
  value();
  console.log("끝")
};

//콜백 함수 
//메인 함수 실행 뒤에 실행되는 함수
function sub(){
  console.log("Sub");
};

// main(1);
// main(sub);
// main(function(){
//   console.log("익명 콜백 함수 ")
// });

// main(()=> {
//   console.log("화살표 콜백 함수");
// });


//콜백 함수 활용
function repeat(count){
  for (let idx = 0; idx < count; idx++) {
    console.log(idx);
  };
};

// repeat(3);

function repeatDouble(count){
  for (let idx = 0; idx < count; idx++) {
    console.log(idx*2);
  };
};
// repeatDouble(5);


//콜백할 함수를 매개변수로 받음
function repeat(count, callback){
  for (let idx = 0; idx < count; idx++) {
    callback(idx);
  };
};
repeat(5, function(idx){
  console.log(idx);
});
console.log("--------");

repeat(5, function(idx){
  console.log(idx*2);
});
console.log("--------");

repeat(5, idx => 
  console.log(idx*2)
);
console.log("--------");

repeat(5, idx => {
  console.log(idx*2)
});
console.log("--------");

repeat(5, idx => 
  console.log(idx*2)
);
