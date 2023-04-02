import React, { useEffect, useState } from "react";

function CurrentTime() {
  const [currentTime, setcurrentTime] = useState(new Date());
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  useEffect(() => {
    setInterval(() => {
      setcurrentTime(new Date());
    }, 1000);
  }, []);
  return (
    <div className="mr-10">
      <div className="bg-black/40 w-fit px-2 py-1 rounded-md text-white">
        {formatAMPM(currentTime)}
      </div>
    </div>
  );
}

export default CurrentTime;
