// Mouse out Event 
// It will be triggered while hovering mouse on the element

// let inp = document.querySelector("input");
// inp.addEventListener("mouseout",function(){
//        console.log("Clicked!");
//    });



let form = document.querySelector("form");
// let button = document.querySelector("button");
form.addEventListener("submit",function(event){
   event.preventDefault();
});

// button.addEventListener("click",function(){
//     this.style.backgroundColor = "green";
// });

let inp = document.querySelector("input");
let h2 = document.querySelector("h2");
inp.addEventListener("input",function(){
   const filteredName = this.value.replace(/[^A-Za-z ]/g, '');
   h2.innerText = filteredName;
})

