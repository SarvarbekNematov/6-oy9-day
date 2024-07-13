import React from "react";
import { useParams } from "react-router-dom";
import { categoryData } from "../data/categories";
import { HeartIcon } from "../assets/heart-icon";
import { VectorIcon } from "../assets/vector-icon";
import Category1 from "/src/assets/category1.png"
import Category2 from "/src/assets/validate-mini-one.png"
import Category3 from "/src/assets/validate-mini-two.png"
import Category4 from "/src/assets/validate-mini-three.png"
import { Button } from "../components/button/btn";

export const ProductDetail = () => {
  const obj = useParams();
  const data = categoryData.find((item) => item.id == obj.id);
  // const a = data.cost
  // const str = ''
  //   for(let i = 0;i < a.length;i++){
  //     if(a[i] != " " ){
  //       str = str + a[i];
  //     }
  //   }
  //   const b = Number(str) / 3
  
  return (
    <div className="bg-[#ECF4FF]">

      <div className="max-w-[1270px] mx-auto p-[20px]">
      <div className="flex gap-[40px] pt-[60px] px-[25px]">
        <div>
            <div className="relative bg-white px-[73px] pt-[40px] pb-[106px] rounded-[10px]">
              <span className="absolute top-[27px] right-[20px]"><HeartIcon/></span>
              <span className="absolute top-[72px] right-[20px]"><VectorIcon/></span>
              <img className="w-[400px] h-[400px]  ml-auto mr-auto" src={data.img} alt="img" />
            </div>
            <div className="flex items-center pt-[42px] gap-[42px]">
              <span className="inline-block w-[105px] px-[10px] py-[18px] bg-white h-[105px] rounded-[10px] ">
                <img src={Category1} alt="" />
              </span>
              <span className="inline-block w-[105px] px-[10px] py-[18px] bg-white h-[105px] rounded-[10px] ">
                <img src={Category2} alt="" />
              </span>
              <span className="inline-block w-[105px] px-[10px] py-[18px] bg-white h-[105px] rounded-[10px] ">
                <img src={Category3} alt="" />
              </span>
              <span className="inline-block w-[105px] px-[10px] py-[18px] bg-white h-[105px] rounded-[10px] ">
                <img src={Category4} alt="" />
              </span>
            </div>
        </div>
        <div>
            <h3 className="text-[28px] font-semibold">{data.title}</h3>
            <div className="w-[230px]">
              <div className="flex justify-between">
                <p className="text-[18px] font-semibold">rangi</p>
                <p className="text-[18px] text-[#6C757D] font-semibold">Space Gray</p>
              </div>
              <div className="flex items-center gap-[15px] pt-[16px]" >
                <span className="inline-block w-[46px] h-[46px] rounded-[4px] bg-[#BEBBC2]"></span>
                <span className="inline-block w-[46px] h-[46px] rounded-[4px] bg-[#F9DED7]"></span>
                <span className="inline-block w-[46px] h-[46px] rounded-[4px] bg-[#FCE9DB]"></span>
                <span className="inline-block w-[46px] h-[46px] rounded-[4px] bg-[#E8E8EA]"></span>
              </div>
            </div>
            <h2 className="pt-[40px] text-[48px] font-semibold">{data.cost} so'm / dona</h2>
            <p className="pt-[16px] text-[24px] text-[#0D63F3] font-semibold" > 6 434 000 so'm  x 3 oy</p>
            <div className="w-[510px] flex items-center justify-between pt-[40px]">
              <Button className="px-[72.5px] pt-[15px] text-white rounded-[10px] pb-[16px] bg-[#0D63F3]" type="submit">Sotib olish</Button>
              <Button className="px-[72.5px] pt-[15px] text-white rounded-[10px] pb-[16px] bg-[#0D63F3]" type="submit">Bo’lib to’lash</Button>
            </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};
