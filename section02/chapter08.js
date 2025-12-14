//5가지 요소 순회 및 탐색 메소드
//1. forEach
//모든 요소를 순회하며 각 요소에 특정 동작을 수행시키는 메소드
let arr1 = [1,2,3];

arr1.forEach(function(element, idx, arr){
  console.log(element, element*idx);
});
console.log("--------------------------------")
arr1.forEach((element,idx) => {
  console.log("화살표 함수 element: "+element);
  console.log("화살표 함수 element * idx: "+(element*idx));
});

let doubledArr = [];
arr1.forEach((element)=> {
  doubledArr.push(element*2);
});
console.log(doubledArr);

//2. inclueds
//배열에 특정 요소가 있는지 확인하는 메소드
let arr2 = [1,2,3];
let isInclude = arr2.includes(2);
console.log(isInclude);

//3. indexOf
//특정 요소의 인덱스를 반환하는 메소드 
let arr3 = [1,2,3];
let index = arr3.indexOf(1);
console.log(index);

let arr4 = [2,2,2];
let index2 = arr4.indexOf(2);
console.log(index2);

//4.findIndex
//모든 요소를 순회하며, 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메소드
let arr5 = [1,2,3];
const index3 = arr5.findIndex((element)=> {
  if(element === 2) return true;
});
console.log(index3);

const index4 = arr5.findIndex((element)=> {
  if(element%2 !==0 ) return true;
});
console.log(index4);

const index5 = arr5.findIndex((element)=> element%2 !==0);
console.log(index5);


const index6 = arr5.findIndex((element)=> {
  element === 999;
});
console.log(index6); //조건에 맞는 요소의 인덱스가 없으면 -1 리턴 

//indexOf 에서는 조건에 만족하는 객체를 찾기 어려워
//findIndex 메소드가 존재한다 
let objArr = [
  {name:"hmh"},
  {name:"csj"},
];

console.log(objArr.indexOf({name:"hmh"})); //-1 리턴 => 일치하는 객체를 못찾음
console.log(
    objArr.findIndex(
      (item)=> item.name==="csj"
    )
  );//1 리턴 => 일치하는 객체 발견


//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 찾은 요소를 그대로 반환
let arr6 = [
  {name:"hmh"},
  {name:"csj"},
];

const finded = arr6.find((item)=> 
  item.name === "hmh"
);

console.log(finded);













