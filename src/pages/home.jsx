import React from "react";
import { Link } from "react-router-dom";
import { categoryData } from "../data/categories";
import { HeartIcon } from "../assets/heart-icon";
import { Button } from "../components/button/btn";
import { KorzinkaIcon } from "../assets/korzinka-icon";

export const Home = () => {
  return  <>
  <section className="bg-[#ECF4FF]">
    <div className="max-w-[1200px] mx-auto grid grid-cols-5 gap-[20px] justify-between pb-[37px]">
          {categoryData.map((item) => (
            <div key={item.id} className="bg-white rounded-[10px] mt-[18px] pt-[10px] pb-[23px] px-[10px] ">
              <Link to={`/products/product-detail/${item.id}`} key={item.id}>
              <div className="flex justify-between relative">
                {item.topSale ? <span className="absolute inline-block rounded-[4px] text-white px-[10px] bg-[#FF0101]  py-[5px]">{item.topSale}</span> : ""}
                {item.news ? <span className="absolute inline-block rounded-[4px] text-white px-[10px] bg-[#EB8528]  py-[5px]">{item.news}</span> : ""}
                <span className="absolute right-[0]"><HeartIcon/></span>
              </div>
                
                <img className="text-center ml-auto mr-auto" src={item.img} alt="img" /> 
                <h3 className="text-[#0D63F3] pb-[6px] text-[18px] font-semibold">{item.cost} so'm</h3>
                <p className="text-[14px] font-medium h-[51px]">{item.title}</p>
                <p className="pt-[16px]">{item.number}</p>
                <div className="flex justify-between items-center pt-[25px]">
                  <Button className='bg-[#0D63F3] rounded-[8px] text-white py-[10.5px] px-[24.5px]' variant='submit'>Sotib olish</Button>  
                  <Button className="text-white w-[40px] h-[40px]" startIcon={<KorzinkaIcon/>}/>
                </div>
              </Link>
            </div>
          ))}
        </div>
  </section>
        
    </>
    
  
};
