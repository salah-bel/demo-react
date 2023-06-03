import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
   
      <Link to="/">Page d'accueil</Link>
        <br/>
      <Link to="/products">Products</Link>
        <br/>
      <Link to="/new-product">Nouveau produit</Link>
  
    </nav>
  );
}

export default Header;
