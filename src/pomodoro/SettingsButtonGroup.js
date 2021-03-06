import React from "react";
import Button from "./Button"

function SettingsButtonGroup({ shouldBeDisabled, settingName, durationAmount, testId, stateChangers }) {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid={`duration-${testId}`}>
        {/* TODO: Update this text to display the current focus session duration */}
        {settingName}: {durationAmount}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <Button testId={testId} stateChangers={stateChangers} testIdPrefix="decrease" iconName="minus" shouldBeDisabled={shouldBeDisabled}/>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <Button testId={testId} stateChangers={stateChangers} testIdPrefix="increase" iconName="plus" shouldBeDisabled={shouldBeDisabled}/>
      </div>
    </div>
  );
}

export default SettingsButtonGroup;
