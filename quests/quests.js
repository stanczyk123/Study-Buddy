const dailyTarget = 2 * 60 * 60 * 1000; // 2 hours in ms
const progressBar = document.querySelector('.progressBar');

function updateProgressBar() {
    const storedMs = parseInt(localStorage.getItem("timer-progress") || "0", 10);
    const percent = Math.min((storedMs / dailyTarget) * 100, 100);
    progressBar.style.width = percent + "%";
}


setInterval(updateProgressBar, 1000);


updateProgressBar();


