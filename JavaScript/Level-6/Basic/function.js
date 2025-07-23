// Function defination
let arr =["Apple","Mango","Orange","Guava"];
function concat(arr) {
   let sum=arr[0];
   for(let i=1;i<arr.length;i++){
        sum += arr[i];
   }
   return sum;
}
let ans = concat(arr);
console.log(ans);

//Lexical scope
function outerscope(){
   let x=1;
   let y=2;
   function innerscope(){
      console.log(y);
   }
   innerscope();  
}
console.log(outerscope());

//Function Expression
let const1 = function(a,b){
      return a+b;
}
console.log(const1(10,20));

// This an example of High-order Function [multiple args,along with return statement]
function highOrder(func,n){
   for(let i=1;i<=n;i++){
      func();
   }
}
// Here func is a variable to store the function()
let greet = function(){
   console.log("Hello");
}
highOrder(greet,10);

//Return in High order function
// function choice(number){
//    if(number == "odd"){
//       let odd = function(n){
//          console.log(n%2==1);
//       }
//       return odd;
//    }
//    else if(number == "even"){
//       let even = function(n){
//          console.log(n%2 == 0);
//       }
//       return even;
//    }
//    else{
//       console.log("Wrong Request !!");
//    }
// }
// let ans1 = choice("even");
// console.log(ans1);

// Methods [Functions defined inside objects]
const calculator={
     add(a,b){
         return a+b;
      },
     sub(a,b){
        return a-b;
     },
     mul(a,b){
          return (a*b);   
       }
}
console.log(calculator.add(10,20))



