// let arr = [1,2,3,4];
// Calculates square of all array elements
// let ans = arr.map(num =>num*num);
// console.log(ans);

// Calculate sum
// let sum = ans.reduce((sum1,ele)=> sum1 + ele , 0);

// let avg = sum / arr.length;
// console.log(avg);

// New arrray ele whose all ele as + 5 as ans
// let arr = [1,2,3,4,5];
// let ans = arr.map(num => num+5);
// console.log(ans);

// All elements in uppercase
// let arr = ["Nithin","Kokkapuni"];
// let ans = arr.map(ele => ele.toUpperCase());
// console.log(ans);

// New array with added arguments doubled
// const doubleandReturn=(arr,...args) =>[
//    ...arr,
//    ...args.map(num => num*2)
// ];
// let ans = doubleandReturn([1,2,3,4,5],3,4);
// console.log(ans);

// Merging 2 objects
const merg=(obj1,obj2) =>({
    ...obj1,...obj2
});
let ans = merg({a:"Nithin",b:"K"},{c:"d",d:"e"});
console.log(ans);




