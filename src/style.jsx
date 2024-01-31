import styled from "styled-components";

export const WatchDiv = styled.div`
  background-color: blueviolet;
`;
export const StopWatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c;
  color: white;
  height: 100vh;
`;
export const Timer = styled.div`
  font-size: 5rem;
  /* margin-bottom: 2rem; */
`;

export const Button = styled.button`
  background-color: ${(props) => (props.$stop ? "#4caf50" : "red")};
  color: white;
  border: none;
  padding: 1rem 5rem;
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
export const TimerDiv = styled.div`
  padding: 20px 10vw;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 50px;
`;
// import { useState, useRef } from "react";

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     // clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//     console.log(intervalRef.current);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//     // console.log(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }
