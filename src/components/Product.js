import DeleteIcon from '@mui/icons-material/Delete';
import "./Product.css";

function Product(props) {
  return (
    <article className="product" onClick={props.onComponentClick}>
      <div className="product-info">
        <h2>{props.title}</h2>
        <p style={{color:props.color}} className="price">{props.price} &euro;</p>
        <p>{props.desc}</p>
      </div>
      <div className="product-action">
       
          <DeleteIcon onClick={props.onButtonClick}/>
 
      </div>
    </article>
  );
}

export default Product;
