// Select element by id
// document.getElementById("description");

// Select class [return collection]
// to get all img's and also make some changes

// let ans = document.getElementsByClassName("oldImg");
// for(let i=0;i<ans.length;i++){
//     ans[i].src = "car.jpeg";
//     console.log(ans[i].src);
// }

// Query Selectors [only for 1st p tag]
// document.querySelector("p").innerText = "Nithin";

// For all p tags
// document.querySelectorAll("p");

// Manipulate attributes
// let img = document.querySelector('img');
// console.log(img.getAttribute("id"));       // To get attribute

// To set attribute

// let setting = img.setAttribute("id","superimg");
// console.log(img);


// To change css properties
let link1 = document.querySelectorAll('.boxLink');
for(let i=0;i<link1.length;i++){
    link1[i].style.color = "green";
}






