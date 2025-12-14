//5가지 배열 변형 매소드
//1. filter 
//기존 배열에서 조건에 만족하는 요소를 새로운 배열로 반환
let arr1 = [
  {name:"hmh",hobby:"eating"},
  {name:"csj",hobby:"eating"},
  {name:"홍길동",hobby:"테니스"},
];
const eatingPeople = arr1.filter((item)=>item.hobby =="eating");
const tennisPeople = arr1.filter((item)=>{
  if(item.hobby==="테니스"){
    return true;
  }
});
console.log(arr1);//arr1 배열은 변화 없음
console.log(eatingPeople);
console.log(tennisPeople);


//2. map
//배열의 모든 요소를 순회하며 콜백 함수를 실행하고 
//그 결과 값들을 모아서 새로운 배열로 반환 
let arr2 = [1,2,3];
const mapedArr = arr2.map((item, idx, arr)=> {
  console.log(idx, item);
  return item *2;
});
console.log(mapedArr);

let names = arr1.map((item)=> item.name);
console.log(names);


//3. sort
//배열을 정렬하는 메소드
let arr3 = ["b", "a", "c"];
console.log(arr3.sort());

let arr4 = [10, 3, 5];

//오름 차순 정렬
arr4.sort((a, b) => {
  if(a > b){
    //작은 값이 앞으로 나오게  b가 앞으로 오게 설정
    return 1;
  }else if(a < b){
    return -1;//a가 앞으로 오게 설정
  }else{
    return 0; //위치를 바꾸지 않게 설정
  }
});
console.log(arr4);

//내림차순 정리
arr4.sort((a,b)=> {
  if(a > b){
    return -1; 
  }else if(a < b){
    return 1;
  }else{
    return 0;
  }
});

console.log(arr4);

//4. toSorted 
//sort는 원본 배열을 변화시키는 메소드
//toSorted는 원본 배열은 변화시키지 않고 정렬된 새로운 배열을 반환하는 메소드
let arr5 = ["c", "a", "c"];
let toSortedArr = arr5.toSorted();
console.log(arr5);
console.log(toSortedArr);

//5. join
//배열의 모든 요소를 문자열로 함쳐서 반환하는 메소드
let arr6 = ["hi", "im", "kaka"];
const joined = arr6.join("-");
console.log(arr6);
console.log(joined);
console.log(typeof arr6);
console.log(typeof joined);