import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const StopWatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c;
  color: white;
  height: 100vh;
`;

const Timer = styled.div`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.$stop ? "#4caf50" : "red")};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3e8e41;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ResumeButton = styled(Button)`
  background-color: #2196f3;
  /* margin-bottom: 1rem; */
`;

const StopWatchch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    // clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
    console.log(intervalRef.current);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    // console.log(intervalRef.current);
  }

  function handleResume() {
    setStartTime((prevStartTime) => prevStartTime + (Date.now() - now));
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (secondsPassed === 0) {
      clearInterval(intervalRef.current);
    }
  }, [secondsPassed]);

  return (
    <StopWatchContainer>
      <Timer>{secondsPassed.toFixed(2)}</Timer>
      <div style={{ display: "flex", gap: "30px" }}>
        <Button onClick={handleStart}>Start</Button>

        <Button $stop onClick={handleStop}>
          Stop
        </Button>
        <ResumeButton onClick={handleResume}>Resume</ResumeButton>
      </div>
    </StopWatchContainer>
  );
};

export default StopWatchch;
