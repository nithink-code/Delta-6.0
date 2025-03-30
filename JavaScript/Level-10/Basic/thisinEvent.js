// use of this for multiple events

// let p = document.querySelector("p");
// let h4 = document.querySelector("h4");
// let h2 = document.querySelector("h2");

// function usethis(){
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// };

// p.addEventListener("click",usethis);
// h4.addEventListener("click",usethis);
// h2.addEventListener("click",usethis);

// Keyboard Events

// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(event){
//    console.log("Key -> ",event.key); // which key was pressed [keyLeft,keyRight,keyUp,keyDown]
//    console.log("Key was Released!");

// });

// Form Events

let form = document.querySelector("form");
let inp = document.querySelector("input");
let p = document.querySelector("p");
form.addEventListener("submit",function(event){
     event.preventDefault();// It will prevent to redirect to action.php url it remains in same page
     // To print the value typed
     // console.log(inp.value);
     // alert("You clicked the Submit Button!");
});

inp.addEventListener("input",function(){
   p.innerText = inp.value;
});

// Input event will record small changes 
// change event will record large changes made while clicking on button

