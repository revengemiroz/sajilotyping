import React, { useEffect, useState } from "react";

function TimeZone() {
  const [canadaTime, setCanadaTime] = useState(new Date());
  const [indiaTime, setIndiaTime] = useState(new Date());
  const [timeDifference, setTimeDifference] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      // Set Canada time (assuming Eastern Time)
      const canadaDate = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Toronto" })
      );
      setCanadaTime(canadaDate);

      // Set India time
      const indiaDate = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      setIndiaTime(indiaDate);

      // Calculate time difference
      const diff =
        (indiaDate.getTime() - canadaDate.getTime()) / (1000 * 60 * 60);
      setTimeDifference(
        `${Math.abs(diff)} hours ${diff > 0 ? "ahead" : "behind"}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function TimeDisplay({ label, time }) {
    return (
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1">{label}</h3>
        <div className="bg-white p-2 rounded-md shadow-inner border border-gray-200">
          <span className="text-xl font-mono" suppressHydrationWarning>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="border-green w-full md:w-1/5 flex flex-wrap items-center justify-center gap-4">
      <TimeDisplay label="Canada" time={canadaTime} />
      <TimeDisplay label="India" time={indiaTime} />
    </div>
  );
}

export default TimeZone;
