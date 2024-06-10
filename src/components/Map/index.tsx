import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

const YandexMap = () => (
  <YMaps>
    <div className="text-4xl text-center mt-5 text-green-800 font-sans font-extralight font">
      <p data-aos="zoom-in">
        Cіздерге ыңғайлы болуы үшін <br /> төменде көрсетілген картаны <br />{" "}
        қолданыңыз!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <Map
          defaultState={{ center: [50.289981, 57.114619], zoom: 18 }}
          style={{ width: "80%", height: "80%" }}
        />
      </div>
    </div>
  </YMaps>
);

export default YandexMap;
