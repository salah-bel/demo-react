import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewProduct() {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredPrice, setEntredPrice] = useState("");
  const [entredImageUrl, setEntredImageUrl] = useState("");
  const [entredDesc, setEntredDesc] = useState("");

  const [words, setWords] = useState([]);
  const navigate = useNavigate();

  const titleChangeHandler = (e) => {
    setEntredTitle(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setEntredPrice(e.target.value);
  };
  const imageUrlChangeHandler = (e) => {
    setEntredImageUrl(e.target.value);
  };
  const descChangeHandler = (e) => {
    setEntredDesc(e.target.value);
  };

  const addNewProduct = async () => {

    let product = {
      id: Math.floor(Math.random()*500),
      title: entredTitle,
      price: entredPrice,
      imageUrl: entredImageUrl,
      desc: entredDesc,
    };
    console.log(product)
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      console.log(response);
      console.log("user added");
      // navigate('/products')
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    console.log(e.type)
    e.preventDefault();
    //   setEntredTitle("");
    //  let newWords = [...words, entredTitle]
    //   setWords(newWords)
    //   console.log(words)
    // setEntredTitle("");
    addNewProduct();
    navigate("/products");
  };

  return (
    <>
      <h1 className="text-center m-5">New product</h1>
      <form
        className="w-50 m-auto"
        onSubmit={submitHandler}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Titre de l'article
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Prix de l'article
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            onChange={priceChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image de l'article
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            onChange={imageUrlChangeHandler}
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={descChangeHandler}
          ></textarea>
          <label htmlFor="floatingTextarea">Description du produit</label>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-5">
          Ajouter le produit
        </button>
      </form>
    </>
  );
}

export default NewProduct;

// <form onSubmit={submitHandler}>
// <input type="text"
//     name="title"
//     onChange={titleChangeHandler}
//     value={entredTitle}
// />

// <button type="submit">Ajouter</button>
// <h1>{words.map(w=><span>{w}</span>)}</h1>
// </form>
