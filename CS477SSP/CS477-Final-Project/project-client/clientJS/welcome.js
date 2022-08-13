"use strict";
const HOSTNAME = "http://localhost:3000";
let scrollDebounce = true;

//window.logout = logout;
// window.getTweets=getTweets;

window.onload = function () {
  let page = 1;
  //let sessionStorageName=sessionStorage.getItem("username")
  if (sessionStorage.getItem("accessToken")) {
    let html = `<h4>Welcome <a href="userInfo.html">${sessionStorage.getItem(
      "username"
    )}</a></h4>`;
    document.getElementById("uName").innerHTML += html;
    getTweets();
    document.getElementById("logoutId").onclick = logout;
  } else {
    window.location = "login.html";
  }
  let postTweetbtn = document.getElementById("tweetbtnId");
  // console.log(postTweetbtn);
  postTweetbtn.onclick = displayNewTweet;

  // for loading 10tweets when scrolling down a page

  const loading = document.querySelector(".loading");
  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight) {
      console.log(
        scrollTop,
        scrollHeight,
        clientHeight,
        "checking the heights for scrolling"
      );
      if (scrollDebounce) {
        scrollDebounce = false;
        showloading();
        setTimeout(() => {
          scrollDebounce = true;
        }, 1000);
      }
    }
  });

  async function getTweets() {
    let username = sessionStorage.getItem("username");
    const tweetsRes = await fetch(
      `${HOSTNAME}/tweets?username=${username}&&page=${page}&&size=5`,
      //const tweetsRes = await fetch(`${HOSTNAME}/tweets/${sessionStorage.getItem("username")}/page=${counter}`,
      //const tweetsRes = await fetch(`${HOSTNAME}/tweets?username=${username}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (tweetsRes.ok) {
      const result = await tweetsRes.json();
      //let results=Object.values(result)
      console.log("result......", result);
      if (!result.error) {
        let html = "";

        result.forEach((twt) => {
          html += ` 
        <div class="card mb-3" >
        <div class="card-body">
          <div class="d-flex flex-start">
            <div class="w-100">
            <div  class="d-flex justify-content-between align-items-center mb-3" >
                      <h6 class="font-italic text-info mb-0">
                        <i class="fab fa-twitter"></i>
                        ${twt.user.username}
                        <p class="font-weight-normal text-dark ms-2">
                          ${twt.tweet}
                        </p>
                      </h6>
                      <p class="mb-0">${twt.created_at}</p>
                    </div>
            </div>
          </div>
        </div>
      </div>
                   
        `;
        });
        document.getElementById("tweetId").innerHTML = html;
      } else {
        document.getElementById("twwetId").innerHTML = result.message;
      }
      page++;
    }

    document.getElementById("loading-balls").classList.remove("loading-show");
    document.getElementById("loading-balls").classList.add("hide");
  }

  // to add a new posted tweet from the text area
  async function displayNewTweet() {
    const postedTweet = document.getElementById("postedTweetId").value;
    //console.log("posted tweet......", postedTweet);

    const body = {
      user: sessionStorage.getItem("username"),
      tweet: postedTweet,
      created_at: new Date(),
    };
    console.log(body);
    //alert('yoooo')

    const response = await fetch(`${HOSTNAME}/tweets`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const postedData = await response.json();
    //console.log(" posted dataaaaa......", postedData);
    getTweets();
  }

  function showloading() {
    //loading.classList.add('show');
    //load the data
    document.getElementById("loading-balls").classList.remove("hide");
    document.getElementById("loading-balls").classList.add("loading-show");

    getTweets();
    //loading.classList.remove('show');
  }

  function logout() {
    sessionStorage.removeItem("accessToken");
    window.location = "login.html";
  }
};

// async function fetchUser() {

//     const response = await fetch(`${HOSTNAME}/users`, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const result = await response.json();
//     if (result.error) {
//       document.getElementById("error").innerHTML = result.message;
//     } else {
//        const uname=result.filter(item=>item.username===sessionStorage.getItem('username'))
//        document.getElementById('uName').innerHTML= uname

//     }
//   }
// to display tweets
// async function getTweets(){
//   let counter =0;
//   const tweetsRes = await fetch(`${HOSTNAME}/tweets?page=${counter}`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//   }).username;
//   const result = await tweetsRes.json();
//   console.log("result......", result);
//   if (!result.error) {
//     let html = "";
//     result.data.forEach(tweet => {
//         html += `
//                    <div
//                       class="d-flex justify-content-between align-items-center mb-3"
//                     >
//                       <h6 class="text-primary fw-bold mb-0">
//                         <i class="fab fa-twitter"></i>
//                         ${tweet.username}
//                         <span class="text-dark ms-2">
//                           ${tweet.comment}
//                         </span>
//                       </h6>
//                       <p class="mb-0">${tweet.date}</p>
//                     </div>
//         `
//     });
//     document.getElementById('tweetId').innerHTML = html;
//     counter++;
// } else {
//     document.getElementById('twwetId').innerHTML = result.message;
// }

// }
