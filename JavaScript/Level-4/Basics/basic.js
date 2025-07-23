// To-Do App
let todo = [];
while(true){
    let input = prompt("Enter your request");
    if(input === "quit"){
        console.log("App will be closed");
        break;
    }
    if(input === "Add"){
        let input1 = prompt("Enter your Task");
        todo.push(input1);
        console.log("Task Added");
     }
    else if(input === "list"){
        console.log("-----------");
        for(task of todo){
          console.log(task);
        }
      }
    else if(input === "del"){
        let del1 = prompt("Enter the task to delete");
        todo.splice(del1,1);
    }
}