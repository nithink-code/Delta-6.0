import "./Product.css"
import Price from "./Price";

function Product({title,idx}){
    let oldPrices = ["12,500","8500","15000","20000"];
    let newPrices = ["14500","12000","10000","9500"];
    let descs = ["5 Buttons","Inituitive Touch Surface","Designed For Ipad Pro","2.4Gz Mouse"];
    return (
       <>
       <div className="Product">
        <h4>{title}</h4>
         <p>{descs[idx]}</p>
         <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
       </>
    );
}

export default Product;