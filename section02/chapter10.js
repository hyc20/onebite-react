//1. Date 객체 생성 
let date1 = new Date();//생성자
console.log(date1);

//let date2 = new Date("1999-01-11");
// let date2 = new Date("1999.01.11");
let date2 = new Date("1999/01/11");
console.log(date2);

let date3 = new Date("1999/01/11/10:10:10");
console.log(date3);

let date4 = new Date(1999,1,11,10,10,10);
console.log(date4);

//2. 타임스탬프 
//특정 시간이 "1970.01.01 00:00:00" (UTC) 협정 세계 시부터 몇 ms가 지났는지 의미하는 값
let timeStamp1 = date1.getTime();
console.log(timeStamp1);
console.log(timeStamp1/365/24/3600/1000);

let date5 = new Date(timeStamp1);
console.log(date5);//현재의 시간 구할 수 있다

//3. 시간 요소 추출
let year = date1.getFullYear();
let month = date1.getMonth()+1;//1월은 0부터 시작하기 때문에 +1
let date = date1.getDate();

let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
  year,
  month,
  date,
  hour,
  minutes,
  seconds
);

//4. 시간 수정하기 
date1.setFullYear("2026");
date1.setMonth("0");//11은 12월을 의미
date1.setDate("11");
date1.setHours(11);
date1.setMinutes(10);
date1.setSeconds(9);
console.log(date1);

//5. 시간을 여러 포맷으로 출력하기 
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());