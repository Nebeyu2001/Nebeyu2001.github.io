"use strict";

window.onload = function () {
  //fetchEmployees();
  document.getElementById("refresh").onclick = fetchEmployees;
};

async function fetchEmployees() {
  let result = await fetch("https://randomuser.me/api/?results=5");
  let emps = await result.json();
  console.log(emps.results);
  renderEmployees(emps.results);
}

function renderEmployees(emps) {
  const empDiv = document.getElementById("employees");
  empDiv.innerHTML = "";
  for (let i = 0; i < emps.length; i++) {
    let emp = emps[i];

    let template = `<div class="col-4">
    <img src="${emp.picture.large}" alt="" />
  </div>
  <br />
  <div class="col-8 text-end">
    <p class="fw-bold">${emp.name.first + " " + emp.name.last}</p>
    <p id="gender0">${emp.gender}</p>
    <p id="email0">${emp.email}</p>
  </div>
  <br />
  <hr />`;

    let div = document.createElement("div");
    div.innerHTML = template;
    div.classList = "row";

    empDiv.appendChild(div);
  }
}
