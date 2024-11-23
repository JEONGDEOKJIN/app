import Image from "next/image";

import HeroSection from "./_components/HeroSection";
import CategoryCard_2 from "./_components/CategoryCard_2";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <header className="flex flex-col w-full  min-h-[76px]  bg-white ">
          <div className="flex w-full justify-start gap-[20px] min-h-[76px] items-center  px-[20px]">
            <Image
              src="/image/safetyzone_logo.png"
              width={278}
              height={30}
              alt="logo"
            />
            <Image
              src="/image/new_sidelogo.svg"
              width={160}
              height={22}
              alt="logo_center"
            />
          </div>
          <ul className="flex flex-row font-[600] text-[18px] min-h-[50px] w-full justify-evenly  text-center py-3">
            <li>교육원 소개</li>
            <li>전체 교육 일정</li>
            <li>
              건설업기초안전교육 <br /> 수강신청
            </li>
            <li>
              위험성/관리감독자교육 <br /> 수강신청
            </li>
            <li>
              타워크레인 교육 <br /> 수강신청
            </li>
            <li>공지사항</li>
            <li>오시는 길</li>
          </ul>
        </header>

        <main className="relative w-full  ">
          <div className="absolute inset-0 bg-black opacity-50 h-full"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-evenly gap-2">
            <HeroSection />

            <div className="flex gap-[30px] mt-[50px]">
              <CategoryCard_2 imgUrl="zoom.png" title={<>건설기초보건 <br/> 안전교육</>}  desc_1="매일교육"  desc_2="당일접수" desc_3="이수증 즉시 발급"  />
              <CategoryCard_2 imgUrl="zoom.png" title={<>타워크레인 <br/>신호수교육</>} desc_1="매일교육"  desc_2="당일접수" desc_3="이수증 즉시 발급"  />
              <CategoryCard_2 imgUrl="zoom.png" title={<>관리감독자/ <br/> 준감독 교육</>} desc_1="매일교육"  desc_2="당일접수" desc_3="이수증 즉시 발급"  />
              <CategoryCard_2 imgUrl="group_apply.png" title={<>건설기초 <br/> 단체교육</>} desc_1="매일교육"  desc_2="당일접수" desc_3="이수증 즉시 발급"  />
              
            </div>
          </div>
          <div className="main-background h-[900px] w-full"></div>
        </main>

        <Footer/>
        
      </div>
    </>
  );
}
