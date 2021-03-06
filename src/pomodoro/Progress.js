import React from "react";
import classNames from "../utils/class-names";
import { secondsToDuration } from "../utils/duration";

function Progress({ phase, stats, isTimerRunning }) {
  const percentageWorkComplete = (stats.workSetTime - stats.workTimeRemaining)*100/stats.workSetTime;
  const percentageBreakComplete = (stats.breakSetTime - stats.breakTimeRemaining)*100/stats.breakSetTime;
  // const phaseTitle = (stats.workTimeRemaining > 1) ? "Focusing" : "On Break";
  const phaseRemaining = (stats.workTimeRemaining > 0) ? secondsToDuration(stats.workSetTime) : secondsToDuration(Math.ceil(stats.breakTimeRemaining/60)*60)
  const phaseDetailRemaining = (stats.workTimeRemaining > 0) ? secondsToDuration(stats.workTimeRemaining) : secondsToDuration(stats.breakTimeRemaining)
  const percentageComplete = (phase === "Focusing") ? percentageWorkComplete : percentageBreakComplete;
  
  return (
    <div className={classNames({ "hidden": !isTimerRunning })}>
      {/* TODO: This area should show only when a focus or break session is running or pauses */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
          <h2 data-testid="session-title">{phase} for {phaseRemaining} minutes</h2>
          {/* TODO: Update message below to include time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
          {phaseDetailRemaining} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={percentageComplete} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${percentageComplete}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
