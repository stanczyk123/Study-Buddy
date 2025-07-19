function summarizeStudyTime() {
  const sessions = JSON.parse(localStorage.getItem("studySessions") || "[]");

  const now = new Date();
  const today = now.toDateString();
  const thisWeek = getWeekNumber(now);
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();

  let daily = 0, weekly = 0, monthly = 0, yearly = 0, total = 0;

  sessions.forEach(session => {
    const date = new Date(session.timestamp);
    const sessionDate = date.toDateString();
    const sessionWeek = getWeekNumber(date);
    const sessionMonth = date.getMonth();
    const sessionYear = date.getFullYear();

    const duration = session.duration || 0;

    if (sessionDate === today) daily += duration;
    if (sessionWeek === thisWeek && sessionYear === thisYear) weekly += duration;
    if (sessionMonth === thisMonth && sessionYear === thisYear) monthly += duration;
    if (sessionYear === thisYear) yearly += duration;

    total += duration;
  });

  function format(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  }

  document.getElementById("dailystudytimeNum").textContent = format(daily);
  document.getElementById("weeklystudytimeNum").textContent = format(weekly);
  document.getElementById("monthlystudytimeNum").textContent = format(monthly);
  document.getElementById("yearlystudytimeNum").textContent = format(yearly);
  document.getElementById("totalstudytimeNum").textContent = format(total);
}

function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDays = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDays + firstDayOfYear.getDay() + 1) / 7);
}

summarizeStudyTime();