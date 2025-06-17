const dailyTarget = 2 * 60 * 60 * 1000; // 2 hours in ms
const progressBar = document.querySelector('.progressBar');
const reward = document.getElementById('reward');
const dailyReward = 100;


function updateProgressBar() {
    const storedMs = parseInt(localStorage.getItem("timer-progress") || "0", 10);
    const percent = Math.min((storedMs / dailyTarget) * 100, 100);
    progressBar.style.width = percent + "%";
    
    questsReward(storedMs);
}
updateProgressBar();


setInterval(updateProgressBar, 1000);


function questsReward(currentMs){
    if(currentMs >= dailyTarget){
        reward.style.display = 'inline-block';
        reward.textContent = `${dailyReward}`
    
    }

    else{
        reward.style.display = 'none'
    }
}

reward.addEventListener('click', () => {
    alert(`You've claimed the daily quests coins!`)
    reward.style.display = 'none';
})

