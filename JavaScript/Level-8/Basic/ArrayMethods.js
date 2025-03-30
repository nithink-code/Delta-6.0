// Array Methods

// let arr = [1,2,3,4,5];

// 1. For Each Loop
// arr.forEach(function(ele){
//    console.log(ele);
// });

//2.  Map function

// let arr1 = [1,2,3,4,5,6];

// let newarr1 = arr1.map((ele)=>{
//      return ele*2;
// });
// console.log(newarr1);

// 3. Filter Function
// It will add the ele to new arr if return true or else it doesn't add the ele
// let arr3 = [1,2,3,4,5,6];
// let newarr3 = arr3.filter((el)=>{
//      return el%2==1;
// });
// console.log(newarr3);


//4. Every Function
// It will return true if all ele are true or else false
// let arr = [1,2,3,4,5];
// let ans = arr.every((el)=>{
//    return el%2;
// });
// console.log(ans);


// 5. Reduce Method
// Syntax: nums.reduce(accumlator,element);
// let nums=[1,2,3];
// let ans = nums.reduce((res,el)=>{
//   console.log(res);
//   return res*el;
// });

// console.log(ans);

// Find max using reduce
// let nums=[1,2,3,7,4,5,6];
// let ans = nums.reduce((res,el)=>{
//     if(el > res){
//       return el;
//     }else{
//       return res;
//     }
    
// });
// console.log(ans);

// let arr = [10,20,30,40,50];
// let ans = arr.every((el)=>{
//       return el%2 == 0;
// });
// console.log(ans);

// Minimum number in an array
// let nums=[10,20,11,21,3];
// function minele(nums){
//    let ans = nums.reduce((min,el)=>{
//       if(el < min){
//          return el;
//       }else{
//          return min;
//       }
//    });
//    return ans;
// }
// let ans1 = minele(nums);
// console.log(ans1);

// Default Parameters
// Default value of a will be 1 if not specified in args of function call()
// function defaultVal(a=1,b){
//    return a+b;
// }
// let ans = defaultVal(3,4);
// console.log(ans);

// Spread method in JS used to decrese the need to write all ele in an array as arguments
// It spreads the output by displaying all ele of array

// let arr = [1,2,3,4,5,6,10,2,3];
// let ans = Math.min(...arr);
// console.log(ans);

// With Objects
// const obj1 ={
//    name: "Nithin",
//    age: 19,
//    marks: 98,
// };
// let data = {...obj1,country:"India"};
// console.log(data);


// Rest Methods
// It will combine multiple inputs into a single input
// function sum(...args){
//    return args.reduce((sum,ele)=>{
//       if(ele < sum){
//          return ele;
//       }
//       else{
//          return sum;
//       }
//    })
// };
// let ans = sum(1,2,3,4);
// console.log(ans);

// Destructuring 
// Assigning values of array in multiple variables
let arr = ["Mercedes","GLS","G-Wagon","Audi","Mahindra","Thar","XUV"];

let [winner,stark,total,...combine] = arr;  // Destructuring  along with rest

console.log(combine);

// In objects

const student={
   name: "Nithin",
   age: 19,
   branch: "CS",
};

// Syntax {key: variable to store}
let {name : val1, ...val2} = student;
console.log(val1);
 






