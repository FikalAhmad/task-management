import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResizablePanel } from "@/components/ui/resizable";
import { useState } from "react";

const Pomodoro = () => {
  const [timer, setTimer] = useState<number>(0);
  const [timerDisplay, setTimerDisplay] = useState<string>("");

  const startTimer = () => {
    setTimerDisplay("");
    let seconds = timer * 60;
    const timerInterval = setInterval(function () {
      const hours = Math.floor(seconds / 3600);
      const remainingMinutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      setTimerDisplay(
        formatTime(hours) +
          ":" +
          formatTime(remainingMinutes) +
          ":" +
          formatTime(remainingSeconds)
      );

      if (seconds === 0) {
        clearInterval(timerInterval);
        alert("Time is up!");
      } else {
        seconds--;
      }
    }, 1000);
  };

  const formatTime = (time: number) => {
    return time < 10 ? "0" + time : time;
  };
  console.log(timerDisplay);

  return (
    <ResizablePanel defaultSize={80}>
      <div>Tes</div>
      <Input
        type="number"
        placeholder="in minutes"
        value={timer}
        onChange={(e) => setTimer(parseInt(e.target.value, 10))}
      />
      <Button type="submit" onClick={startTimer}>
        Submit
      </Button>
      <div>{timerDisplay}</div>
    </ResizablePanel>
  );
};

export default Pomodoro;
