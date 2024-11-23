import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-[50px] justify-center items-center">
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
    </section>
  );
};

export default HeroSection;
