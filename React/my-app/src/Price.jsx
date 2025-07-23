import "./Product.css";

export default function Price({oldPrice,newPrice}){
    return(
       <div className="priceStyle">
       <span className="oldpriceStyle">&#8377; {oldPrice}</span>
       &nbsp;&nbsp;&nbsp;&nbsp;
       <span>&#8377; {newPrice}</span>
       </div>
    );
}