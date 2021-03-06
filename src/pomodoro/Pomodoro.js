import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Settings from "./Settings";
import StartStop from "./StartStop";
import Progress from "./Progress";

function Pomodoro() {
  // Timer starts out paused
  const startState = {
    workSetTime: 1500,
    workTimeRemaining: 1500,
    breakSetTime: 300,
    breakTimeRemaining: 300
  }
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [stats, setStats] = useState(startState);

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      if (stats.workTimeRemaining > 0) {
        setStats(() => { return {
          ...stats, 
          workTimeRemaining: (stats.workTimeRemaining - 1)
        }})
      } else if (stats.breakTimeRemaining > 1) {
        setStats(() => { return {
          ...stats, 
          breakTimeRemaining: (stats.breakTimeRemaining - 1)
        }})
      } else {
        reset();
      }
    },
    isTimerRunning ? 1000 : null
  );

  const reset = () => {
    playPause();
    setStats(() => { return {
      ...stats, 
      breakTimeRemaining: stats.breakSetTime,
      workTimeRemaining: stats.workSetTime
    }});
  }

  const plusWorkTime = () => {
    const newTime = Math.min((3300), stats.workSetTime);
    setStats(() => {
      return {
        ...stats,
        workSetTime: (newTime + 300),
        workTimeRemaining: (newTime + 300)
      }
    })
  }
  const minusWorkTime = () => {
    const newTime = Math.max(600, stats.workSetTime);
    setStats(() => {
      return {
        ...stats,
        workSetTime: (newTime - 300),
        workTimeRemaining: (newTime - 300)
      }
    })
  }
  const plusBreakTime = () => {
    const newTime = Math.min((14*60), stats.breakSetTime);
    setStats(() => {
      return {
        ...stats,
        breakSetTime: (newTime + 60),
        breakTimeRemaining: (newTime + 60)
      }
    })
  }
  const minusBreakTime = () => {
    const newTime = Math.max(120, stats.breakSetTime);
    setStats(() => {
      return {
        ...stats,
        breakSetTime: (newTime - 60),
        breakTimeRemaining: (newTime - 60)
      }
    })
  }


  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  const phaseTitle = (stats.workTimeRemaining > 1) ? "Focusing" : "On Break";

  return (
    <div className="pomodoro">
      <Settings shouldBeDisabled={isTimerRunning} stats={stats} stateChangers={{plusWorkTime, minusWorkTime, plusBreakTime, minusBreakTime}}/>
      <StartStop isTimerRunning={isTimerRunning} playPause={playPause} reset={reset} />
      <Progress phase={phaseTitle} stats={stats} isTimerRunning={isTimerRunning}/>
    </div>
  );
}

export default Pomodoro;
