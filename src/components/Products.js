import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const apiData = await fetch("https://dummyjson.com/products");
    const jsonData = await apiData.json();
    const res = jsonData.products;
    setItems(res);
  };
  return (
    <div className="container">
      {items?.map((item) => {
        return (
          <div className="card" key={item.id}>
            <Link to={`./${item.id}`}>
              <img className="card-img" src={item.thumbnail} alt="thumbnail" />
              <h3>{item.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
