"use strict";
const HOSTNAME = "http://localhost:3000";

window.onload = function () {
  let username = sessionStorage.getItem("username");
  fetchUserInfo(username);
  document.getElementById("searchBtn").onclick = searchAndFollow;
  document.getElementById("logout").onclick = logout;
};
let followings;
async function fetchUserInfo(username) {
  console.log(username);
  const response = await fetch(`${HOSTNAME}/users/${username}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  console.log(result);
  followings = result.data.following.filter((user) => user !== username);
  console.log(followings);

  if (!result.error) {
    followings.forEach((followee) => {
      let html = document.createElement("tr");
      html.innerHTML = `
               <td id="dataId"> ${followee}</td>
               <td><button class="btn btn-info btn-md btn-block " id= "unfollowBtn" bid='${followee}' onclick="unfollow(this)">Unfollow</button></td>
             
           
         `;
      document.getElementsByTagName("table")[0].append(html);
    });
  } else {
    document.getElementById("userInfo").innerHTML = result.message;
  }
}

async function searchAndFollow(e) {
  e.preventDefault();
   console.log("hhhhhhh");
  let searchUsername = document.getElementById("searchInput").value;
  console.log(searchUsername);
  const response = await fetch(`${HOSTNAME}/users/${searchUsername}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  console.log(result);
  if (!result.error) {
    if (!followings.includes(result.data.username)) {
      let html = `
            <div class="card mb-3">
            <div class="card-body">
              <div class="d-flex flex-start">
                <div class="w-100">
                  <div
                    class="d-flex justify-content-between align-items-center mb-3"
                  >
                    <h6 class="text-info fw-bold mb-0">
                      <i class="fab fa-twitter"></i>
                       ${result.data.username}
                    </h6>
                    <button class="mb-0" onclick=follow('${result.data.username}')>Follow</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
            `;
      document.getElementById("searchedUser").innerHTML += html;
      document.getElementById("sUser").style.display = "block";
    }
  } else {
    document.getElementById("searchedUser").innerHTML = result.message;
  }
}

async function unfollow(obj) {
  followings.splice(followings.indexOf(obj), 1);
  let username = sessionStorage.getItem("username");
  const response = await fetch(`http://localhost:3000/users/${username}/updated`,
    {
      method: "PUT",
      body: JSON.stringify({
        following: followings,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        //  Authorization: Bearer ${sessionStorage.getItem("accessToken")},
      },
    }
  );
  const result = await response.json();
  console.log(result);
  console.log(followings);
  document.getElementsByTagName("tr")[0].remove();
}

async function follow(obj) {
  followings.push(obj);
  let username = sessionStorage.getItem("username");
  const response = await fetch(
   ` http://localhost:3000/users/${username}/updated`,
    {
      method: "PUT",
      body: JSON.stringify({
        following: followings,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        //Authorization: Bearer ${sessionStorage.getItem("accessToken")},
      },
    }
  );
  const result = await response.json();
  console.log(result);
  document.getElementById("searchedUser").style.display = "none";
}
function logout(){
  sessionStorage.removeItem('accessToken');
  window.location = 'login.html';
}
