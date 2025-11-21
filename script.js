const daily = document.querySelector(".day-btn");
const weekly = document.querySelector(".week-btn");
const monthly = document.querySelector(".month-btn");

const previousData = document.querySelectorAll(".previous");
const currentData = document.querySelectorAll(".current");

let data = []; // will store the JSON data after lodading 

async function getData() {
  try {
    const response = await fetch("./data.json");
    data = await response.json();
    updateUI("weekly"); 
  } catch (err) {
    console.error("Failed to load data.json:", err);
  }
}

function updateUI(period) {
  data.forEach((item, index) => {
    const timeframe = item.timeframes[period];

    currentData[index].innerText = `${timeframe.current} hrs`;
    previousData[index].innerText = `Last ${getLabel(period)} - ${
      timeframe.previous
    } hrs`;
  });
}

function getLabel(period) {
  if (period === "daily") return "Day";
  if (period === "weekly") return "Week";
  if (period === "monthly") return "Month";
}

// event listeners
daily.addEventListener("click", () => updateUI("daily"));
weekly.addEventListener("click", () => updateUI("weekly"));
monthly.addEventListener("click", () => updateUI("monthly"));

getData(); 