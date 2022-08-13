const HOSTNAME = "http://localhost:3000";

window.onload = function () {
    document.getElementById('btn').onclick = signUp;
}

async function signUp() {
  
    const response = await fetch(`${HOSTNAME}/users`, {
        method: 'POST',
        body: JSON.stringify({
            username: document.getElementById('typeEmailX-2').value,
            password: document.getElementById('typePasswordX-2').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    if (result.error) {
        document.getElementById('error').innerHTML = result.message;
    } else {
        sessionStorage.setItem('accessToken', result.data.accessToken);
        window.location = 'login.html';
    }

}