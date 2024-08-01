//your JS code here. If required.
function updateTimer() {
const timerElement = document.getElementById("timer");
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() 1) padStart(2, "0"); 
const day String(date.getDate()).padStart(2, "e");
const hours = date.getHours();
const minutes = String(date.getMinutes()).padStart(2, "0"); 
const seconds = String(date.getSeconds()).padStart(2, "0");
const amom = hours >= 12 ? "PM" : "AM"; // ternary condition
const formattedHours = hours % 12 || 12;
const formattedTime = `${month}/${day}/${year}, ${formattedhours}:${minutes}:${ampm}`;
timerElement.textContent = formattedTime;
}

updateTimer);
setInterval(updateTimer, 1000) 