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
  for (let i = 0; i < emps.length; i++) {
    let emp = emps[i];
    console.log(emp.gender);
    console.log(emp.name.first + " " + emp.name.last);
    console.log(emp.email);
    console.log(emp.picture.large);
    document.getElementById("img" + i).src = emp.picture.large;
    document.getElementById("name" + i).innerHTML =
      emp.name.first + " " + emp.name.last;

    document.getElementById("gender" + i).innerHTML = emp.gender;
    document.getElementById("email" + i).innerHTML = emp.email;
  }
}
