//1.배열 순회 
let arr1 = [1, 2, 3];

//배열 인덱스
for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

//배열 for of
for (let element of arr1) {
  // console.log(element);
}

for (const element of arr2) {
  // console.log(element);
}

//2. 객체 순회
let person = {
  name : "홍용천",
  age : 20,
  hobby : "reading",
};

//Object.keys 사용
//객체에서 key 값들만 뽑아서 새로운 배열로 변환
let keys = Object.keys(person);
console.log(keys);

for(let i=0; i< keys.length; i++){
  console.log(keys[i]); //key 값 표시
};
for (let key of keys) {
  console.log(key, person[key]);//key value 값 표시
}

//Object.values 
//객체에서 value 값들만 뽑아서 새로운 배열로 변환 
let values = Object.values(person);
console.log(values);

//배열 순회할 때는 for of
for (let value of values) {
console.log(values);
}
//객체 순회할 때는 for in 
//for in
for(let key in person){
  const value = person[key];
  console.log(key, value);

}
