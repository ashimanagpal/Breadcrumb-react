import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const apiData = await fetch("https://dummyjson.com/products");
    const jsonData = await apiData.json();
    const res = jsonData.products.slice(0, 6);
    setItems(res);
  };
  return (
    <div>
      <div className="container">
        {items?.map((item) => {
          return (
            <div className="card" key={item.id}>
              <Link to={`./products/${item.id}`}>
                <img
                  className="card-img"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                <h3>{item.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <Link to={"/products"}>
          <button className="btn">See All products</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
