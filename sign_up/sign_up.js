    document.getElementById('signupForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from reloading the page

      const username = document.getElementById('usernameid').value;
      const password = document.getElementById('passwordid').value;
      const date = document.getElementById('dateid').value;

      document.getElementById('profilename').textContent = username
      document.getElementById('passwordname').textContent = password

      if (username && password && date) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("birthdate", date);
        window.location.href = "/main/main.html";
      } else {
        alert("Please fill in all fields!");
      }
    });