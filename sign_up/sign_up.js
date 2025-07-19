document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('usernameid').value;
  const password = document.getElementById('passwordid').value;
  const date = document.getElementById('dateid').value;

  if (username && password && date) {
    const user = {
      username: username,
      password: password,
      birthdate: date
    };
    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById('profilename').textContent = username;
    document.getElementById('passwordname').textContent = password;

    window.location.href = "/main/main.html";
  } else {
    alert("Please fill in all fields!");
  }
});
