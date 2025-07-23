import { useState } from "react";

export default function Count(){
    let [isLiked,setIsLiked] = useState(false);
    let [count,setCount] = useState(0);

    let styles ={
        color: "red",
    };

    let handleLike = () =>{
        setIsLiked(!isLiked);
    };

    let likeCount = () =>{
        setCount(count+1);
    }

    return(
      <div>
        <span>Hit the Like Button! </span>
        <span onClick={handleLike}>
         {
         isLiked ? (
         <i className="fa-solid fa-heart" style={styles}></i>
         ) : (
         <i className="fa-regular fa-heart" onClick={likeCount}></i>
        )}
        </span>
        <p>You Liked the button {count} times!</p>
      </div>
    );
}