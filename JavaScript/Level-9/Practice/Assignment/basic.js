let newbdy = document.querySelector('body');
let newip = document.createElement('input');
newip.placeholder = "username";
let newbtn = document.createElement('button');
newbtn.setAttribute("id","btn");
newbtn.style.backgroundColor = "blue";
newbtn.style.color = "white";


newbtn.innerText ="Click Me";
newbdy.append(newip);
newbdy.append(newbtn);

