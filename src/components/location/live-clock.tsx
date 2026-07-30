"use client";

import { useEffect, useState } from "react";

export default function LiveClock({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleString("en-US", {
          timeZone,
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };

    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return <span>{time}</span>;
}
