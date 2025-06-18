let username
let password

document.getElementById('continuebtn').onclick = function () {
    username = document.getElementById('usernameid').value;
    password = document.getElementById('passwordid').value;

    // Optional: Save to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password); // ⚠️ Not secure for real apps!

    // Display name (if needed)
    document.getElementById('profilename').textContent = username;
    document.getElementById('passwordname').textContent = password

    // Redirect to main.html
    window.location.href = "/main/main.html";
};


