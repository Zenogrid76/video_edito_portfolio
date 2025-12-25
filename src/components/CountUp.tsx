import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // in ms
  suffix?: string;
}

export const CountUp = ({
  end,
  duration = 1500,
  suffix = "",
}: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};
