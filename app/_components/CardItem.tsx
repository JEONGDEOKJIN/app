import Image from "next/image";
import React from "react";

const CardItem = () => {
  return (
    <>
      <div className="relative flex flex-col gap-[50px] justify-center items-center">
        <div className="flex flex-col leading-[65px] ">
          <div className="text-white font-[800] text-center text-[60px]">
            집체교육으로 인정되는 화상교육 실시
          </div>
          <div className="text-white text-[30px] tracking-[-1.5px] text-center">
            우편교육 무료제공으로 교육장까지 왔다 갔다 해야만 했던 번거로움 이젠
            걱정 끝!
          </div>
        </div>
        <div className="text-white font-[700] text-[44px] border-t border-b py-[16px]  border-white">
          중대 재해 처벌법으로 강의의 질을 높게!
        </div>

        <div className="w-full absolute bottom-3 bg-blue-300"></div>
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

        {/* <div className="absolute bottom-4 bg-white flex flex-col justify-around  h-[320px] p-[32px] rounded-[4px] ">
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
            </div> */}
      </div>
    </>
  );
};

export default CardItem;
