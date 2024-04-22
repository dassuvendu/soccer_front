import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: "0-0",
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const matchDate = new Date('2024-04-25T00:00:00'); // Change this to the date of your next match
      const now = new Date();

      let difference = matchDate - now;

      if (difference < 0) {
        // If match date is in the past, reset countdown
        difference = 0;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
      const minutes = Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0');
      const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');

      setCountdown({
        days,
        hours,
        minutes,
        seconds
      });
    };

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{countdown.days} Days</p>
      <p>{countdown.hours} Hours</p>
      <p>{countdown.minutes} Minutes</p>
      <p>{countdown.seconds} Seconds</p>
    </div>
  );
};

export default CountdownTimer;
