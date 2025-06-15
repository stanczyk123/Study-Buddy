let interval = null;
let startTime = null;
let elapsed = 0;

const totalDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

function updateTimerDisplay(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function broadcastProgress(ms) {
    localStorage.setItem('timer-progress', ms.toString());
    localStorage.setItem('timer-updated', Date.now().toString());
}

function start() {
    if (interval) return;
    startTime = Date.now() - elapsed;
    interval = setInterval(() => {
        elapsed = Date.now() - startTime;
        updateTimerDisplay(elapsed);
        broadcastProgress(elapsed);
    }, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    elapsed = 0;
    updateTimerDisplay(0);
    broadcastProgress(0);
}

// Initialize display on load
updateTimerDisplay(0);
broadcastProgress(0);