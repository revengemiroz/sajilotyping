import React, { useEffect, useState } from "react";

function TimeZone() {
  const [localTime, setLocalTime] = useState(new Date());
  const [indiaTime, setIndiaTime] = useState(new Date());
  const [userLocation, setUserLocation] = useState("Loading...");
  const [timeDifference, setTimeDifference] = useState("");

  useEffect(() => {
    // Fetch user's location based on IP address
    const fetchLocation = async () => {
      try {
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();
        if (data.status === "success") {
          setUserLocation(data.country); // Set the country name
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setUserLocation("User Time");
      }
    };

    fetchLocation();

    const timer = setInterval(() => {
      const now = new Date();

      // Set local time
      const localDate = new Date(
        now.toLocaleString("en-US", {
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
      );
      setLocalTime(localDate);

      // Set India time
      const indiaDate = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      setIndiaTime(indiaDate);

      // Calculate time difference
      const diff =
        (indiaDate.getTime() - localDate.getTime()) / (1000 * 60 * 60);
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
              hour: "numeric",
              minute: "2-digit",
              hour12: true, // Use 12-hour format
            })}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-1/5 flex flex-wrap items-center justify-center gap-4">
      <TimeDisplay label={userLocation} time={localTime} />
      <TimeDisplay label="India" time={indiaTime} />
    </div>
  );
}

export default TimeZone;
