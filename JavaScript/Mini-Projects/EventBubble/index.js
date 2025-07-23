let div = document.querySelector("div");
let lis = document.querySelectorAll("li");
let p = document.querySelector("p");

div.addEventListener("click",function(event){
    event.stopPropagation();   // It will stop the parent event to occur during child div
   console.log("div was clicked!");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("lis was clicked");
    });
}

p.addEventListener("click",function(event){
    event.stopPropagation(); 
    console.log("p was clicked");
});

