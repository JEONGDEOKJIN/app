import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row  ">

      <div className="w-[50%] h-[400px] bg-[#061745] flex flex-col justify-center gap-[60px]">
        <div className="pl-[30%] font-[700] text-[35px] text-white">오시는 길</div>
        <div className="pl-[30%] flex flex-col gap-[20px] text-white">
          <div className="flex gap-[3px]">
            <Image src={"/image/map.png"} width={25} height={25} alt="map" />
            <div>서울특별시 영등포구 대림로29길 42(대림동) 3층</div>
          </div>

          <div className="flex gap-[3px]">
            <Image src={"/image/cellphone.png"} width={25} height={25} alt="phone" />
            <div> 02-849-9960</div>
          </div>

          <div className="flex gap-[3px]">
            <Image src={"/image/subway.png"} width={25} height={25} alt="subway" />
            <div> 2,7호선 대림역 6번출구 바로 앞 3층</div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[400px] flex flex-col">
        <div className="h-[200px] bg-[#747474] text-[25px] font-[700] flex items-center pl-[5%] justify-start gap-[20px]">
          <div className="relative w-[45px] h-[45px] shrink-0">
            <Image
              src="/image/ibk.png"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="phone"
            />
          </div>

          <div className="flex flex-col">
            <div className="text-white text-[25px] font-[700] ">
              기업은행 149-095008-01-014
            </div>
            <div className="text-white text-[16px]">
              예금주: ㈜건설기초안전보건교육원
            </div>
          </div>
        </div>

        <div className="h-[200px] bg-[#008cb7] text-[25px] font-[700] flex items-center pl-[5%] justify-start gap-[20px]">
          <div className="relative w-[45px] h-[52px] shrink-0">
            <Image
              src="/image/phone.png"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="phone"
            />
          </div>

          <div className="text-white text-[25px] font-[700] ">02-849-9960</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
