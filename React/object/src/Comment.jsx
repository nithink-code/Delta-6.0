import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.css";

export default function Comment(){
    let [comments,setComments] = useState([{
        username: "nk",
        review: "Great Job!",
        rating: 5,
    },
    ]);

    let addNewComment = (comment) =>{
        setComments((currcomments)=> [...currcomments, comment]);
    };

    return(
       <>
       <CommentForm addNewComment={addNewComment}/>
       <div>
         <h3>All Comments!</h3>
         {comments.map((comment,idx)=>(
         <div className="comment" key={idx}>
         <span>Username: @{comment.username}</span>
         <br></br>
         <span>Review: {comment.review}</span>
         <br></br>
         <span>Rating: {comment.rating}</span>
         <br></br>
         </div>
         ))}
        </div>
       </>
    );
}