"use client";
import { useState } from "react";
import Img from "next/image";
import left from "../../../public/images/left.png";
import right from "../../../public/images/right.png";
import Aos from "aos";
export default function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 6, 1)); // Set the correct month for August

  const weddingDate = new Date(2024, 6, 5); // Correct month for August

  const daysOfWeek = ["Дс", "Сс", "Ср", "Бс", "Жм", "Сн", "Жк"];
  const months = [
    "Қаңтар",
    "Ақпан",
    "Наурыз",
    "Сәуір",
    "Мамыр",
    "Маусым",
    "Шілде",
    "Тамыз",
    "Қыркүйек",
    "Қазан",
    "Қараша",
    "Желтоқсан",
  ];

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <div key={index} className="day-name">
        {day}
      </div>
    ));
  };

  const renderDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isWeddingDay =
        year === weddingDate.getFullYear() &&
        month === weddingDate.getMonth() &&
        day === weddingDate.getDate();

      days.push(
        <div key={day} className={`day ${isWeddingDay ? "wedding-day" : ""}`}>
          {day}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (direction: number) => {
    const newDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + direction)
    );
    setCurrentDate(newDate);
  };

  return (
    <div data-aos="fade-up-right" className="calendar ">
      <div className="header mt-5 mb-5">
        <button onClick={() => changeMonth(-1)}>
          <Img src={left} alt="previous" width={10} height={10} />
        </button>
        <h2>
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)}>
          <Img src={right} alt="next" width={10} height={10} />
        </button>
      </div>
      <div className="days-of-week">{renderDaysOfWeek()}</div>
      <div className="days">{renderDaysInMonth()}</div>

      <style jsx global>{`
        .calendar {
          width: 300px;
          margin: 15px auto;
          text-align: center;
          font-family: "Arial", sans-serif;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          overflow: hidden;
          background-color: #ffffff; /* White background */
        }
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e8f5e9; /* Light green background */
          padding: 10px 20px; /* Reduced padding */
          border-bottom: 2px solid #c8e6c9; /* Light green border */
        }
        .header h2 {
          margin: 0 15px; /* Reduced margin */
          font-size: 1.2rem; /* Reduced font size */
          color: #2e7d32; /* Dark green text */
        }
        .header button {
          margin: 0 5px; /* Reduced margin */
          background-color: #daa520; /* Gold background */
          border: none;
          padding: 5px; /* Reduced padding */
          border-radius: 50%;
          box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
        .header button:hover {
          background-color: #b8860b; /* Darker gold on hover */
        }
        .days-of-week,
        .days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          margin: 5px 0; /* Reduced margin */
        }
        .day-name,
        .day,
        .empty-day {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px; /* Reduced padding */
          background-color: #e8f5e9; /* Light green for days */
          border-radius: 5px;
          margin: 1px; /* Reduced margin */
        }
        .day-name {
          background-color: #a5d6a7; /* Medium green for day names */
          font-weight: bold;
          color: #2e7d32; /* Dark green text */
        }
        .day {
          position: relative;
          transition: background-color 0.3s ease;
        }
        .day:hover {
          background-color: #c5e1a5; /* Lighter green on hover */
        }
        .day.wedding-day {
          background-color: #daa520; /* Gold for wedding day */
          color: #ffffff; /* White text for wedding day */
          font-weight: bold;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
