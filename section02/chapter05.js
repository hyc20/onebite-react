//원시타입고 객체타입
//값이 저장되거나 복사되는 과정이 다름 
//원시타입 값 자체로 변수에 저장되고 복사된다
//객체타입 참조 값을 통해 변수에 저장되고 복사된다 

let p1 = 1;
let p2 = p1;//p1과 p2의 메모리 공간의 위치는 다름
console.log(p1);
console.log(p2);
p2 = 2; //p2가 가리키던 값 1의 메모리 위치는 사라지지 않고 새로 2의 메모리 위치가 생성되고 값 2가 저장

let o1 = {name: '홍용천'};
let o2 = o1;//얕은 복사  = 참조 값을 복사
//o1과 o2가 가리키는 메모리 위치는 값음 
//같은 위치를 가리키기 때문에 o2의 값을 수정하면 o1의 값 또한 수정된다


//spread 연산자를 통해 새로운 객체를 생성해 내부 프로퍼티만 복사한다 
o2 = {...o1};// 깊은 복사 -> 새로운 객체 생성
o2.name = "홍길동";
console.log("o1.name: "+ o1.name);
console.log("o2.name: "+ o2.name);

//객체 간의 비교는 기본적으로 참조 값을 기준으로 이루어진다 
let obj1 = {name:  "홍용천"};
let obj2 = obj1;
let obj3 = {...obj1};

//얕은 비교 - 참조 값을 기준으로 비교
console.log(obj1 === obj2);//true
console.log(obj1 === obj3);//false
console.log(obj2 === obj3);//false

//깊은 비교 - 객체를 문자열로 변환하여 비교 JSON.stringifiy 같은 내장함수 사용
console.log(JSON.stringify(obj1)===JSON.stringify(obj3));//true

