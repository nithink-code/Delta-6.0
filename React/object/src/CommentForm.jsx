import { useState } from "react";
import "./CommentForm.css";
import { useFormik } from 'formik';

export default function CommentForm (){
//     let [formData,setFormData] = useState({
//         username: "",
//         review: "",
//         rating: "",
//     });

 // let handleEle = (event) =>{
    //     let fieldName = event.target.name;
    //     let fieldVal = event.target.value;

    //     setFormData((currData)=>{
    //         return({...currData,[fieldName]:fieldVal});
    //     }   
    //     )
    // }

    // let handleSubmit = (event)=>{
    //     console.log(formData);
    //     addNewComment(formData); // We are adding the new comments to the all comments .
    //     event.preventDefault();

    //     setFormData({
    //     username: "",
    //     review: "",
    //     rating: "",
    //     });
    // }

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username cannot be empty!';
   } else if (values.username.length > 15) {
     errors.username = 'Username cannot be empty!';
   }
 
   if (!values.review) {
     errors.review = 'Please provide a review!';
   } else if (values.review.length > 20) {
     errors.review = 'Please provide a review!';
   }
 
   if (!values.rating) {
     errors.rating = 'Rating is required btw 1-5!';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.rating = 'Rating is required btw 1-5!';
   }
 
   return errors;
 };


  const formik = useFormik({
     initialValues: {
       username: '',
       review: '',
       rating: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    return(
       <>
       <div className="commentform">
       <h3>Comments Form!</h3>
       <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" placeholder="Enter your username" value={formik.values.username} onChange={formik.handleChange} name="username" id="username"/>
        <br></br><br></br>
         {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <label htmlFor="reviews">Reviews: </label>
        <input type="text" placeholder="Enter your reviews" value={formik.values.review} onChange={formik.handleChange} name="review" id="reviews"/>
        <br></br><br></br>
         {formik.errors.review ? <div>{formik.errors.review}</div> : null}
        <label htmlFor="ratings">Ratings: </label>
        <input type="number" placeholder="Enter your ratings" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} name="rating" id="ratings"/>
        <br></br><br></br>
         {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
        <button type="submit">Submit</button>
       </form>
       </div>
       </>
    );
}