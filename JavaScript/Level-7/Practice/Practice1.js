// Arrow function to return square of a number n

// const square=(a)=>(
//     a*a
// );
// let ans = square(8);
// console.log(ans);

//function to print hello world 5 times in 2s interval
// let id=setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// To stop after printing 5 times for every 2s [i.e after 10s]
// setTimeout(()=>{
//     clearInterval(id);
// },10000);

let arr=[1,2,3,4,5,5];

const arrayAverage=(arr)=>{
    let sum = 0;
     for(let i=0;i<arr.length;i++){
         sum += arr[i];
     }
     return sum/arr.length;
}
let ans = arrayAverage(arr);
console.log(ans);

const isEven=(n)=>{
   if(n%2 == 0){
    console.log("Even");
   }else{
    console.log("odd");
   }
}
isEven(5);