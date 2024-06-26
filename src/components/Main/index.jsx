"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./Main.module.scss";
import music from "../../../public/images/music.png";
import muz from "../../assets/muzik.mp3";
import Aos from "aos";

export default function Main() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(muz);
  }, []);

  function play() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <>
      <div className="flex bg-cover bg-center bg-no-repeat bg-[url('/images/shakyru.PNG')] justify-center h-[90vh] w-full flex-col items-center relative">
        <div className="flex justify-center">
          <button
            className={`absolute top-[20px] ml-[-250px] h-[160px] w-[160px] ${
              isPlaying ? styles["animate-spin"] : ""
            }`}
            onClick={play}
          >
            <Image src={music} alt="musik" />
          </button>
        </div>
        <div className="mt-[220px] flex flex-col items-center font-sans font-extralight justify-center text-green-800 px-10">
          <div data-aos="fade-up" className="font text-6xl">
            <h2>Әкеміз</h2>
            <h2>Ерұланның</h2>
            <h2 className="mt-2">Мерей тойы</h2>
          </div>
          <p data-aos="fade-up" className="pt-10 text-2xl">
            Құрметті ағайын-туыс, бауырлар, <br /> нағашы-жиен, бөлелер, <br />
            құда-жекжат, дос-жаран, <br /> әріптестер мен көршілер!
          </p>
          <p data-aos="fade-up" className="pt-5 text-2xl">
            Сіздерді, әкеміз
          </p>
          <div className="font text-6xl pt-6">
            <h2 className="mt-2 " data-aos="fade-up">
              Ерұланның
            </h2>
          </div>
          <p data-aos="fade-up" className=" mt-2  pt-5 text-2xl">
            60 жас мерей
          </p>

          <div
            className="mt-[10px] text-center text-2xl text-green-800 font-sans font-extralight"
            data-aos="fade-up"
          >
            тойына арналған ақ <br /> дастарханымыздың қадірлі <br /> қонағы
            болуға шақырамыз!
          </div>
        </div>
      </div>
    </>
  );
}
