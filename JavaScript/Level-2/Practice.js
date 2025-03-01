// let num = 20;
// if(num%10 == 0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// console.log(alert(`Your name is ${name} and you are ${age} years old`));

let lastdigit = prompt("Enter a digit");
let lastdigit1 = prompt("Enter another digit");
let ans = lastdigit.length;
let ans1 = lastdigit1.length;
let num = lastdigit[ans-1];
let num1 = lastdigit1[ans1-1];
if(num == num1){
    console.log("Last digit is equal and it is: "+(num));
}
else{
    console.log("Last digits are not equal");
}
