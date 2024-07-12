import React from "react";
import { Link } from "react-router-dom";
import { categoryData } from "../data/categories";

export const Home = () => {
  return  <>
        <div className="max-w-[1200px] mx-auto">
          {categoryData.map((item) => (
            <Link to={`/products/product-detail/${item.id}`} key={item.id}>
              <img src={item.img} alt="img" />
              <h1>{item.name}</h1>
            </Link>
          ))}
        </div>
    </>
    
  
};
