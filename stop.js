window.onload = () => {
  let minutes = 0;
  let seconds = 0;
  let milli = 0o0;
  let Interval;

  let minutescontain = document.getElementById("minutes");
  let secondscontain = document.getElementById("seconds");
  let millseccontain = document.getElementById("millisec");

  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  let reset = document.getElementById("reset");

  const startTimer = () => {
    milli++;
    if (milli <= 9) {
      millseccontain.innerHTML = "0" + milli;
    }

    if (milli > 9) {
      millseccontain.innerHTML = "." + milli;
    }

    if (milli > 99) {
      seconds++;
      secondscontain.innerHTML = "0" + seconds;
      milli = 0;
      millseccontain.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      secondscontain.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      minutescontain.innerHTML = minutes + ":";
      seconds = 0;
      secondscontain.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      minutes.innerHMTL = minutes;
    }
  };

  start.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stop.onclick = () => {
    clearInterval(Interval);
  };

  reset.onclick = () => {
    clearInterval(Interval);
    tens = "00:";
    seconds = "00:";
    minutes = "00:";
    millseccontain.innerHTML = tens;
    secondscontain.innerHTML = seconds;
    minutescontain.innerHMTL = minutes;
  };
};
