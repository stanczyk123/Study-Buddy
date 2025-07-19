const dailyTarget = 2 * 60 * 60 * 1000; // 2 hours in ms
const progressBar = document.querySelector('.progressBar');
const reward = document.getElementById('reward');
const dailyReward = 100;
const coinsDisplay = document.getElementById('coinsamount');

// Load coins from localStorage
let coins = parseInt(localStorage.getItem("coins") || "0", 10);
coinsDisplay.textContent = coins;

// Optional: Reset reward claim daily
const today = new Date().toLocaleDateString();
if (localStorage.getItem("last-claim-date") !== today) {
    localStorage.setItem("daily-reward-claimed", "false");
    localStorage.setItem("last-claim-date", today);
}

function updateProgressBar() {
    const storedMs = parseInt(localStorage.getItem("timer-progress") || "0", 10);
    const percent = Math.min((storedMs / dailyTarget) * 100, 100);
    progressBar.style.width = percent + "%";
    questsReward(storedMs);
}

function questsReward(currentMs) {
    const rewardClaimed = localStorage.getItem("daily-reward-claimed") === "true";
    const notificationShown = localStorage.getItem("quest-notification-shown") === "true";

    if (currentMs >= dailyTarget && !rewardClaimed) {
        reward.style.display = 'inline-block';
        reward.innerHTML = `
            <img src="/favicons/coin.png" style="width: 20px; position: relative; top: 5px; margin-right: 5px;">
            +${dailyReward}
        `;

        if (!notificationShown) {
            showQuestNotification();
            localStorage.setItem("quest-notification-shown", "true");
        }
    } else {
        reward.style.display = 'none';
    }
}

function showQuestNotification() {
    const notification = document.getElementById("quest-notification");
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 8000); 
}

if (localStorage.getItem("last-claim-date") !== today) {
    localStorage.setItem("daily-reward-claimed", "false");
    localStorage.setItem("last-claim-date", today);
    localStorage.setItem("quest-notification-shown", "false");
}


// Handle reward button click
reward.addEventListener('click', () => {
    alert("You've claimed the daily quests coins!");
    coins += dailyReward;
    coinsDisplay.textContent = coins;
    localStorage.setItem("coins", coins);
    localStorage.setItem("daily-reward-claimed", "true");
    reward.style.display = 'none';
});

updateProgressBar();
setInterval(updateProgressBar, 1000);