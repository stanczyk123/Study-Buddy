const progressBar = document.getElementById("progressBar");

    function update() {
      const now = Date.now();
      const elapsed = now - startTime + elapsedTime;
      const progress = Math.min(elapsed / totalTime, 1);
      progressBar.style.width = (progress * 100).toFixed(4) + "%";

      const ms = Math.min(elapsed, totalTime);
      const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
      const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
      const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
      const frames = String(Math.floor((ms % 1000) / (1000 / 60))).padStart(2, '0'); // 60fps simulation

      timerText.textContent = `${hours}:${minutes}:${seconds}:${frames}`;

      if (elapsed < totalTime) {
        frameId = requestAnimationFrame(update);
      } else {
        timerText.textContent = "02:00:00:00";
        stopBtn.disabled = true;
        startBtn.disabled = true;
      }
    }

    startBtn.addEventListener("click", () => {
      if (!timerRunning) {
        startTime = Date.now();
        timerRunning = true;
        frameId = requestAnimationFrame(update);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
      }
    });

    stopBtn.addEventListener("click", () => {
      if (timerRunning) {
        elapsedTime += Date.now() - startTime;
        cancelAnimationFrame(frameId);
        timerRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
      }
    });

    resetBtn.addEventListener("click", () => {
      cancelAnimationFrame(frameId);
      timerRunning = false;
      startTime = null;
      elapsedTime = 0;
      progressBar.style.width = "0%";
      timerText.textContent = "00:00:00:00";
      startBtn.disabled = false;
      stopBtn.disabled = true;
      resetBtn.disabled = true;
    });