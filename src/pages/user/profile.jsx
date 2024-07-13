import React from "react";

export const Profile = () => {
  return <>
    <div className="flex pl-[40px] pt-[40px] items-center">
      <div>
        <h2 className="text-[30px]">Shaxsiy malumotlar</h2>
        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="img" /> 
      </div>
      <div className="flex gap-[100px] pl-[100px]">
        <div>
          <div>
          <p className="text-[#0000006e] pb-[10px] pt-[10px]">ism</p>
          <h3 className="font-semibold text-[23px]">Sarvarbek</h3>
          </div>
          <div>
            <p className="text-[#0000006e] pb-[10px] pt-[10px]">telefon raqam</p>
            <h3 className="font-semibold text-[23px]">+998 94 739 56 06</h3>
          </div>
          <div>
            <p className="text-[#0000006e] pb-[10px] pt-[10px]">Jinsi</p>
            <h3 className="font-semibold text-[23px]">Male</h3>
          </div>
        </div>
        <div>
        <div>
          <p className="text-[#0000006e] pb-[10px] pt-[10px]">Familiya</p>
          <h3 className="font-semibold text-[23px]">Nematov</h3>
          </div>
          <div>
            <p className="text-[#0000006e] pb-[10px] pt-[10px]">tugilgan sana</p>
            <h3 className="font-semibold text-[23px]">12okt , 2005</h3>
          </div>
          <div>
            <p className="text-[#0000006e] pb-[10px] pt-[10px]">HH ID</p>
            <h3 className="font-semibold text-[23px]">22153</h3>
          </div>
        </div>
      </div>
    </div>
  </>;
};
