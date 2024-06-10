"use client";

import React, { useState, useEffect } from "react";
import styles from "./date.module.scss";
import Aos from "aos";

function DateComponent() {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateRemainingTime() {
    // Correct the date to August 2, 2024
    const targetDate = new Date(2024, 7, 5);
    const currentTime = new Date();
    const difference = targetDate.getTime() - currentTime.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div data-aos="fade-left" className={`${styles.container} mx-6 rounded-xl mt-4`}>
      <div className={styles.timeRow}>
        <div className={styles.timeItem}>
          <span className={styles.time}>{remainingTime.days}</span>
          <span className={styles.label}>күн</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.time}>{remainingTime.hours}</span>
          <span className={styles.label}>сағат</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.time}>{remainingTime.minutes}</span>
          <span className={styles.label}>минут</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.time}>{remainingTime.seconds}</span>
          <span className={styles.label}>секунд</span>
        </div>
      </div>
    </div>
  );
}

export default DateComponent;
