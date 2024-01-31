import { useState, useRef } from "react";
import { Button, StopWatchContainer, Timer, TimerDiv } from "../style";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
    console.log(intervalRef.current);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    // console.log(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <StopWatchContainer>
        <TimerDiv>
          <Timer>{secondsPassed.toFixed(3)}</Timer>
        </TimerDiv>
        <div style={{ display: "flex", gap: "30px" }}>
          <Button onClick={handleStart}>Start</Button>
          <Button $stop onClick={handleStop}>
            Stop
          </Button>
        </div>
      </StopWatchContainer>
    </>
  );
}
