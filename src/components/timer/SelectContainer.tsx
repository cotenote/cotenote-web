import React from "react";
import { TimerSelect } from "@/components/timer";
import { hourOptions, secAndMinOptions } from "@/constants/timer";
import { Time, TimerOption } from "./Timer";

interface SelectContainerProps {
  time: Time;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
}

function SelectContainer({ time, setTime }: SelectContainerProps) {
  const handleChangeTimerSelect =
    (label: string) => (newValue: TimerOption | null) => {
      if (!newValue) return;
      setTime((prev) => {
        return { ...prev, [label]: newValue };
      });
    };

  return (
    <>
      <TimerSelect
        label="시간"
        onChange={handleChangeTimerSelect("hour")}
        value={time.hour}
        options={hourOptions}
      />
      <TimerSelect
        label="분"
        onChange={handleChangeTimerSelect("min")}
        value={time.min}
        options={secAndMinOptions}
      />
      <TimerSelect
        label="초"
        onChange={handleChangeTimerSelect("sec")}
        value={time.sec}
        options={secAndMinOptions}
      />
    </>
  );
}

export default SelectContainer;
