let username;

document.getElementById('continuebtn').onclick = function(){
    username = document.getElementById('usernameid').value
    document.getElementById('profilename').textContent = `${username}`
}


