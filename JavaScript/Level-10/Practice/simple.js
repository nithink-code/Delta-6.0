let btn = document.querySelector("button");
btn.addEventListener("click",function(){
   let div = document.querySelector("p");
   let h3 = document.querySelector("h3");
   let call = getRandomColor();
   div.style.backgroundColor = call ;   // generate random div bg color
   h3.innerText = call;   // to set the rgb value of div bg color
   console.log("Color Updated!!");
});

function getRandomColor(){
   let red = Math.floor(Math.random()*255);
   let green = Math.floor(Math.random()*255);
   let blue = Math.floor(Math.random()*255);
   let color = `rgb(${red},${green},${blue})`;
   return color;
};