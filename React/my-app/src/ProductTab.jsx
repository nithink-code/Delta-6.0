import Product  from "./Product.jsx";
import "./Product.css";

function ProductTab(){
    return(
        <>
        <h1>BlockBuster Deals | Shop Now</h1>
        <div className="productCard">
       <Product title="Logitech MX Master" idx={0}/>
       <Product title="Apple Pencil (2nd Gen)" idx={1}/>
       <Product title="Zebronics Zeb-Transformer" idx={2}/>
       <Product title="Potronics Wireless Mouse" idx={3}/>
       </div>
       </>
    );
}

export default ProductTab;