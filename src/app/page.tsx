"use client";
import Image from "next/image";
import Main from "../components/Main";
import bgElement from "../../public/images/bg-element-2.webp";
import Attendance from "../components/Attendance";
import Date from "../components/Date";
import insta from "../../public/images/insta.png";
import gis from "../../public/images/gis.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Calendar from "@/components/Calendar";
import Map from "@/components/Map";
import usti from "../../public/images/usti.png";
import asti from "../../public/images/asti.png";
import footer from "../../public/images/footer.png";
import ls from "../../public/images/ls.png";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex flex-col text-center ">
      <Main />

   
      <div className="relative ">
        <Image
          src="/images/design.png"
          className=" mt-[40px] w-full h-auto mx-auto"
          alt="des"
          width={450}
          height={450}
        />
      </div>
      <div
        className="mt-[-50px] text-4xl font text-center mb-10 text-green-800 font-sans font-extralight"
        data-aos="fade-up"
      >
        <p>Той салтанаты:</p>
        <p>5 шілде 2024 жыл</p>
        <p>Сағат 19:00 басталады</p>
      </div>
      {/* <Image
        src="/images/calendar.png"
        alt="calendar"
        className="w-[90%] mx-auto h-auto"
        width={200}
        height={200}
      /> */}

      <Calendar />

      <div
        className="mt-[-25px] text-green-800 font-extralight"
        data-aos="fade-up"
      >
        <h2 className="font-sans text-3xl mb-1 mt-20">Той иелері:</h2>
        <h2 className="font text-5xl">Балалары</h2>
      </div>

      <p
        data-aos="fade-right"
        className="mt-[50px] text-3xl font-sans text-green-800 font-extralight"
      >
        Тойға дейін:
      </p>
      <Date />

      <div  className="mt-10 text-green-800 leading-relaxed" data-aos="fade-up">
        <Image src={usti} alt="bg" className="w-full h-auto" />
        <p data-aos="zoom-in" className="font-sans text-4xl font-extralight">Мекен-жайымыз:</p>
        <p data-aos="zoom-in" className="font text-5xl mt-1">Ақтөбе қаласы</p>
        <p data-aos="zoom-in" className="font-sans text-4xl mt-4 mb-4 font-extralight">
         Юго-Запад-2
        </p>
        <p data-aos="zoom-in" className="font text-5xl my-1">Манас Hall</p>
        <p  data-aos="zoom-in" className="font-sans text-4xl mb-2 font-extralight">Мейрамханасы</p>
      </div>

      <div data-aos="flip-left" className="flex justify-center gap-10">
        <a href="https://www.instagram.com/manas_hall_restaurant/">
          <Image
            className="mt-5 mb-10"
            height={50}
            width={50}
            src={insta}
            alt="Instagram"
          />
        </a>
        <a href="https://2gis.kz/aktobe/firm/70000001034605907">
          <Image
            className="mt-5 mb-10 gis"
            height={50}
            width={50}
            src={gis}
            alt="GIS"
          />
        </a>
      </div>

      <Image src={asti} alt="bg" className="" />
      <Map />
      <div className="relative">
        <Image
          src="/images/design.png"
          className="w-full h-auto mx-auto"
          alt="des"
          width={450}
          height={450}
        />
      </div>

      {/* <ToiBagdarlamasi /> */}
      <Attendance />

      <div>
        <h2 className="mt-5 text-5xl text-green-800 font">Ысымовтар әулеті </h2>
        <p className="text-4xl leading-relaxed mb-10 text-green-800 font">
          сіздерді күтеді!
        </p>
      </div>
    </div>
  );
}
