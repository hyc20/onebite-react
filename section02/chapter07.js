//6가지 요소 조작 메소드

//1.push
//배열의 맴 뒤에 새로운 요소를 추가하는 메소드
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
arr1.push(5,6,7,8);
console.log(arr1);
const newLength = arr1.push(9,10);
console.log("newLength:: "+newLength)
console.log(arr1);


//2. pop
//배열의 맨 뒤의 요소를 제거하고 반환
let arr2 = [1,2,3];
let popedItem = arr2.pop();
console.log("arr2: " + arr2);
console.log("popedItem: "+popedItem);

//3. shift
//배열의 맨 앞의 요소를 제거하고 반환
let arr3 = [1,2,3,4];
arr3.shift();
console.log("arr3: " + arr3);


//4. unshift 
//배열의 맨 앞에 새로운 요소를 추가
let arr4 = [1,2,3];
let unshiftItem = arr4.unshift(0);//요소가 추가된 배열의 길이 반환
console.log("arr4: "+ arr4);
console.log("unshiftItem: "+unshiftItem);

//shift와 unshift 메소드는 push, pop에 비해 비교적 느리게 동작
//배열이 새롭게 짜이기 때문

//5.slice 
//배열의 특정 범위를 잘라내서 새로운 배열로 반환 
let arr5 = [1,2,3,4,5];
let sliced1 = arr5.slice(2,5);//2번부터 5번 전까지 범위를 잘라냄
let sliced2 = arr5.slice(2);//2번부터 배열의 끝까지 잘라냄

console.log(sliced1);
console.log(sliced2);
console.log(arr5);//원본 배열의 값은 변화하지 않음

let sliced3 = arr5.slice(-3);//뒤에서부터 3개 자름
console.log(sliced3);

//6.concat
//두 개의 배열을 이어 붙여 새로운 배열 반환 
let arr6 = [1,2];
let arr7 = [3,4];
let concatedArr = arr6.concat(arr7);
console.log(arr6);
console.log(arr7);
console.log(concatedArr);



