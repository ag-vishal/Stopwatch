// Selecting DOM elements
let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let btnr = document.querySelectorAll("button");

let tid; // Timer ID for setInterval
let flag = true; // Flag to manage timer start
let s = ""; // Temp variable for seconds

// Start function for stopwatch
function start() {
  if (flag) {
    // Begin the interval
    tid = setInterval(start, 1000);
    flag = false;

    // Toggle button visibility
    btnr[0].style.display = "none"; // Hide Start
    btnr[1].style.display = "inline"; // Show Pause
    btnr[2].style.display = "inline"; // Show Reset
  } else {
    // Increment seconds
    s = Number(sec.innerHTML) + 1;

    if (s == 60) {
      sec.innerHTML = "00";
      min.innerHTML = Number(min.innerHTML) + 1;
    } else {
      sec.innerHTML = s.toString().padStart(2, "0");
    }

    // Increment hours if needed
    if (Number(min.innerHTML) == 60) {
      min.innerHTML = "00";
      hr.innerHTML = Number(hr.innerHTML) + 1;
    }

    // Stop if 23:59:59 reached
    if (
      hr.innerHTML == "23" &&
      min.innerHTML == "59" &&
      sec.innerHTML == "59"
    ) {
      clearInterval(tid);
      btnr[0].style.display = "none";
      btnr[1].style.display = "none";
    }
  }
}

// Pause the stopwatch
function pause() {
  clearInterval(tid);
  btnr[0].style.display = "inline";
  btnr[1].style.display = "none";
  flag = true;
}

// Reset stopwatch to 00:00:00
function reset() {
  hr.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  clearInterval(tid);
  flag = true;

  btnr[0].style.display = "inline";
  btnr[1].style.display = "none";
  btnr[2].style.display = "none";
}
