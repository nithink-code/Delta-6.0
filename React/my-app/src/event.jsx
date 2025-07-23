function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was Submitted!");
}

export default function Event(){
    return(
       <form onSubmit={handleFormSubmit}>
         <input type="text" placeholder="Enter your text"></input>
         <button>Submit</button>
       </form>
    );
}