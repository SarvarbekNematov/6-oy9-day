import React from "react";
import { useParams } from "react-router-dom";
import { categoryData } from "../data/categories";

export const ProductDetail = () => {
  const obj = useParams();
  const data = categoryData.find((item) => item.id == obj.id);
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-4xl">{data?.name}</h1>
      <img src={data.img} alt="img" />
    </div>
  );
};
