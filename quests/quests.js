const dailyTarget = 2 * 60 * 60 * 1000;
const weeklyTarget = 7 * 60 * 60 * 1000;
const progressBar = document.querySelector('.progressBar');
const progressBarWeekly = document.querySelector('.progressBarWeekly')
const reward = document.getElementById('reward');
const dailyReward = 100;
const weeklyReward = 300;
const coinsDisplay = document.getElementById('coinsamount');
let sessionDuration = 1000
let daily = parseInt(localStorage.getItem("daily-progress") || "0", 10);
let weekly = parseInt(localStorage.getItem("weekly-progress") || "0", 10)

daily += sessionDuration
weekly += sessionDuration

localStorage.setItem("daily-progress", daily);
localStorage.setItem("weekly-progress", weekly);

// Load coins from localStorage
let coins = parseInt(localStorage.getItem("coins") || "0", 10);
coinsDisplay.textContent = coins;

//Reset reward claim daily
const today = new Date().toLocaleDateString();
if (localStorage.getItem("last-claim-date") !== today) {
    localStorage.setItem("daily-reward-claimed", "false");
    localStorage.setItem("last-claim-date", today);
}

function getWeekNumber() {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDay) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDay.getDay() + 1) / 7);
}


const currentWeek = getWeekNumber();
if (localStorage.getItem("last-week-claim") != currentWeek) {
    localStorage.setItem("weekly-reward-claimed", "false");
    localStorage.setItem("last-week-claim", currentWeek);
}

function updateProgressBar() {
    const storedMs = parseInt(localStorage.getItem("timer-progress") || "0", 10);
    const percent = Math.min((storedMs / dailyTarget) * 100, 100);
    progressBar.style.width = percent + "%";
    questsReward(storedMs);
}



function updateProgressBarWeekly() {
    const storedMs = parseInt(localStorage.getItem("timer-progress") || "0", 10);
    const percent = Math.min((storedMs / weeklyTarget) * 100, 100);
    progressBarWeekly.style.width = percent + "%";
    questsReward(storedMs);
}

function questsReward(currentMs) {
    const rewardClaimed = localStorage.getItem("daily-reward-claimed") === "true";
    const weeklyClaimed = localStorage.getItem("weekly-reward-claimed") === "true";
    if (currentMs >= weeklyTarget && !weeklyClaimed) {
        reward.style.display = 'inline-block';
        reward.setAttribute("data-type", "weekly");
        reward.innerHTML = `
            <img src="/favicons/coin.png" style="width: 20px; position: relative; top: 5px; margin-right: 5px;">
            +${weeklyReward}
        `;
    }else if(currentMs >= dailyTarget && !rewardClaimed){
        reward.style.display = 'inline-block';
        reward.setAttribute("data-type", "daily");
        reward.innerHTML = `
            <img src="/favicons/coin.png" style="width: 20px; position: relative; top: 5px; margin-right: 5px;">
            +${dailyReward}
        `;
    } else {
        reward.style.display = 'none';
    }
}

// Handle reward button click
reward.addEventListener('click', () => {
    const rewardType = reward.getAttribute("data-type");

    if (rewardType === "daily") {
        alert("You've claimed the daily quests coins!");
        coins += dailyReward;
        localStorage.setItem("daily-reward-claimed", "true");
    } else if (rewardType === "weekly") {
        alert("You've claimed the weekly quests coins!");
        coins += weeklyReward;
        localStorage.setItem("weekly-reward-claimed", "true");
    }

    coinsDisplay.textContent = coins;
    localStorage.setItem("coins", coins);
    reward.style.display = 'none';
});

updateProgressBar();

updateProgressBarWeekly();

setInterval(() => {
    updateProgressBar();
    updateProgressBarWeekly();
}, 1000);

