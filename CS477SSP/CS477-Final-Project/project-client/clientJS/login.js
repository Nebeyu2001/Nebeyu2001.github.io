const HOSTNAME = "http://localhost:3000"

window.onload = function () {
    document.getElementById("signInBtn").onclick = signIn
  }
  
  async function signIn() {
    console.log(document.getElementById("form3Example1c").value);
    const response = await fetch(`${HOSTNAME}/login`, {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("form3Example1c").value,
        password: document.getElementById("form3Example4c").value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.error) {
      document.getElementById("error").innerHTML = result.message;
    } else {
      sessionStorage.setItem('username',result.data.username)
      sessionStorage.setItem("accessToken", result.data.accessToken);
  
      window.location = "welcome.html";
    }
  }