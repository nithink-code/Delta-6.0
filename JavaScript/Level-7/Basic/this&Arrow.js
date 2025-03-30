const student={
    name:"Nithin",
    age:19,
    marks:95,
   getName: ()=>{
    console.log(this); // Global scope [Window object for arrow]
   },
   getAge: function(){
     console.log(this); // Local scope [student object]
   }
}
student.getAge();
student.getName();