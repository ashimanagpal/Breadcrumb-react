import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  let getData = async () => {
    try {
      let response = await fetch(`https://dummyjson.com/products/${id}`);
      let jsonData = await response.json();
      setProduct(jsonData);
    } catch (error) {
      console.log(error, "errrrrrrrrrrrrrrrrrr");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img
            className="card-img"
            alt={product.title}
            src={product.thumbnail}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
