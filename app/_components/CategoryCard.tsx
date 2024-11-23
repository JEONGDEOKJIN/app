import Image from "next/image";
import React from "react";

const CategoryCard = () => {
  return (
    <>
      <div className="bottom-4 bg-white flex flex-col justify-around  h-[320px] p-[32px] rounded-[4px] ">
        <Image
          src={"/image/new_mainmenu01.svg"}
          width={56}
          height={56}
          alt="construct_icon"
        />
        <div className="text-black text-[22px] font-[600]">
          건설업기초안전교육
        </div>
        <div className="text-gray-800 text-[18px] ">
          <div>매일교육</div>
          <div>당일접수</div>
          <div>이수증 즉시 발급</div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
