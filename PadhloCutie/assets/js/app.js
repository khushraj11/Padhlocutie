// SWITCH PAGES
const buttons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    pages.forEach(p => p.classList.remove("visible"));
    document.getElementById(btn.dataset.target).classList.add("visible");
  });
});

// GOALS
function addGoal() {
  const input = document.getElementById("goalInput");
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("goalList").appendChild(li);
  input.value = "";
}

// TASK PLANNER
function addTask() {
  const task = document.getElementById("taskInput").value;
  const hours = document.getElementById("timeInput").value;

  if (task === "" || hours === "") return;

  const li = document.createElement("li");
  li.textContent = `${task} — ${hours}h`;

  document.getElementById("taskList").appendChild(li);

  document.getElementById("taskInput").value = "";
  document.getElementById("timeInput").value = "";
}

// FOCUS TIMER
let time = 25 * 60;
let timer;

function updateTimer() {
  const d = document.getElementById("timerDisplay");
  const m = String(Math.floor(time / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");
  d.textContent = `${m}:${s}`;
}

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    time--;
    updateTimer();
    if (time <= 0) clearInterval(timer);
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  time = 25 * 60;
  updateTimer();
}

updateTimer();
