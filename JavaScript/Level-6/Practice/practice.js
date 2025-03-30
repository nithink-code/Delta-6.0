// return array elements larger than a number
// let num1 = prompt("Enter a number");
// let arr = [1,4,5,6,8,9];
// let arr1 = [];
// function large(num1){
//      for(let i=0;i<arr.length;i++){
//         if(arr[i] > num1){
//            arr1.push(arr[i]);
//         }
//      }
//      return arr1;
// }
// let ans = large(num1);
// console.log(ans);


// Unique characters from a string
// let str="abcdabcdefgggh";
// let ans1 = "";
// function unique(str){
//     for(let i=0;i<str.length;i++){
//         let curr = str[i];
//         // If value is present in ans1 or not 
//         if(ans1.indexOf(curr) == -1){
//             ans1 += curr;
//         }
//     }
//     // There is a duplicate
//     return ans1;
// }
// let ans2 = unique(str);
// console.log(ans2);


// Largest country name return
let country=["Australia","Germany","UnitedStatesofAmerica"];
function largelen(country){
    let maxlen = country[0].length;
    for(let i=1;i<country.length;i++){
        if(country[i].length > maxlen){
            maxlen = country[i];
        }
    }
    return maxlen;
}
let ans3 = largelen(country);
console.log(ans3);