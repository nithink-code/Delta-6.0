// DOM Events
// let newbtn = document.querySelectorAll("button");

// function message1(){
//   alert("Hello Nithin");
// };
// function message2(){
//     alert("Hi Coders!");
// }

// for(btn of newbtn){
    // btn.onclick = message1;

    // For multiple events use event listener -> [addEventListener(event,callback)]
    // btn.addEventListener("click",message1);
    // btn.addEventListener("click",message2);
    // Double click
//     btn.addEventListener("dblclick",function(){
//        alert("You Double Clicked Me!");
//     });

// }
// for(btn1 of newbtn){
//     btn1.onmouseenter = message2;
// }

// For elements
let p = document.querySelector('p');
p.addEventListener("click",function(){
   console.log("Para was clicked");
});

