import { useEffect, useState } from "react";

export default function Countdown({finishTime}) {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft(){
    
    const difference = +finishTime - +new Date().getTime();
  
    let timeLeft = {
      // days: Math.floor(99999999999 / (1000*60*60*24)),
      // hours: Math.floor((99999999999 / (1000*60*60)) % 24),
      // minutes: Math.floor((99999999999 / 1000 / 60) % 60),
      // seconds: Math.floor((99999999999 / 1000) % 60),
    };
  
    if(difference >= 0){
      timeLeft = {
        days: Math.floor(difference / (1000*60*60*24)),
        hours: Math.floor((difference / (1000*60*60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if(!timeLeft[interval]) return;

    timerComponents.push(
      <span className="bg-slate-200 font-bold text-lg px-2 py-2 mx-1 rounded-lg my-2">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <>
      <div className="p-2 bg-slate-200 rounded-lg ">
        <p className="font-bold text-2xl">Countdown</p>
        </div>
      <div className="flex justify-center">
        {timerComponents.length ? timerComponents : <span className="font-bold text-xl py-2 px-2">Time's up!</span>}
      </div>
    </>
  );
}