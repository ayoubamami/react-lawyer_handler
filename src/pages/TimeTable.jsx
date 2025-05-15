import React, { useState, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isToday,
} from "date-fns";
import "../css/TimeTable.css";

const TimeTable = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentYear = new Date().getFullYear();
      setYear((prevYear) =>
        prevYear === currentYear ? prevYear : currentYear
      ); // Update the year only if it changes
    }, 1000 * 60 * 60 * 24); // Check once per day

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const months = Array.from({ length: 12 }, (_, i) => new Date(year, i));

  const handleDateClick = (date) => {
    setSelectedDate(date);
    alert(`Create event on ${format(date, "MMMM d, yyyy")}`);
  };

  const goToPreviousYear = () => {
    setYear((prevYear) => prevYear - 1);
  };

  const goToNextYear = () => {
    setYear((prevYear) => prevYear + 1);
  };

  const renderMonth = (monthDate) => {
    const monthStart = startOfMonth(monthDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return (
      <div key={monthDate} className="tt-month">
        <h3 className="tt-month-title">{format(monthDate, "MMMM")}</h3>
        <div className="tt-weekdays">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <div key={d} className="tt-weekday">
              {d}
            </div>
          ))}
        </div>
        <div className="tt-days-grid">
          {days.map((date) => (
            <div
              key={date}
              className={`tt-day ${
                !isSameMonth(date, monthStart) ? "tt-muted" : ""
              } ${isToday(date) ? "tt-today" : ""} ${
                selectedDate &&
                format(date, "yyyy-MM-dd") ===
                  format(selectedDate, "yyyy-MM-dd")
                  ? "tt-selected"
                  : ""
              }`}
              onClick={() => handleDateClick(date)}
            >
              {format(date, "d")}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="tt-wrapper">
      <div className="tt-header">
        <div className="tt-title-container">
          <button onClick={goToPreviousYear} className="tt-arrow-btn">
            ←
          </button>
          <h1 className="tt-title">TimeTable - {year}</h1>
          <button onClick={goToNextYear} className="tt-arrow-btn">
            →
          </button>
        </div>
      </div>
      <div className="tt-grid">{months.map(renderMonth)}</div>
    </div>
  );
};

export default TimeTable;
