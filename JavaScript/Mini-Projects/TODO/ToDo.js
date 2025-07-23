let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    item.appendChild(delbtn);
    delbtn.classList.add("delete");
    inp.value = "";
    
});

// To delete newly added item in list use Event Delegation [Event Bubbling]
// Here target is used to find which item is selected
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("Item Deleted!");
    }
});


// It will only delete already present li item not the new added items

// let delbtns = document.querySelectorAll(".delete");
// for (delbt of delbtns){
//     delbt.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

