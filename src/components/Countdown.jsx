import { useEffect, useState } from "react";

function getTimeLeft(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now();
  if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

  return {
    days: String(Math.floor(difference / 86400000)).padStart(2, "0"),
    hours: String(Math.floor((difference / 3600000) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((difference / 60000) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0")
  };
}

export default function Countdown({ targetDate }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <p className="countdown-label">COUNTDOWN TO THE FEST</p>
      <div className="countdown-units">
        {Object.entries(time).map(([unit, value]) => (
          <div className="countdown-unit" key={unit}>
            <strong>{value}</strong>
            <span>{unit.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}