import Image from "next/image";
import React from "react";

interface CategoryCard_2Props {
  imgUrl?: string;
  title: React.ReactNode;
  desc_1: string;
  desc_2?: string;
  desc_3?: string;
}

const CategoryCard_2: React.FC<CategoryCard_2Props> = ({
  imgUrl,
  title,
  desc_1,
  desc_2,
  desc_3,
}) => {
  return (
    <>
      <div className="bottom-4 bg-[#787878]/80 flex flex-col justify-between w-[285px] h-[321px] p-[40px] rounded-[4px] ">
        <Image
          src={`/image/${imgUrl}`}
          width={80}
          height={80}
          alt="construct_icon"
        />
        
        <div className="text-white text-[28px] font-[700] pt-[24px] ">{title}</div>

        <div className="text-white text-[16px] font-[400] ">
          <div>
            {desc_1} , {desc_2}
          </div>
          <div>{desc_3}</div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard_2;
