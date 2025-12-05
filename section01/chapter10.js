//반복문
//1. for
// for(초기식; 조건식; 증감식){
//   console.log("반복!!");
//}

// for(let idx=0; idx < 10; idx ++){
//   console.log("idx : "+idx);
//   if(idx >5){
//     break;
//   }
// }

for(let idx=0; idx < 10; idx ++){
  if(idx %2 ==0){
    continue;
  }
  console.log("idx : "+idx);

}

//2. while
let count = 3;
while(count){
  console.log('반복 22');
  count --;
}
