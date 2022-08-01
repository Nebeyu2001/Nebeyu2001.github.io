"use strict";

let array = [];
let index = 0;

function add() {
  index++;
  let item = {
    id: index,
    name: document.getElementById("itemName").value,
    category: document.getElementById("category").value,
    quantity: document.getElementById("quantity").value,
    rating: document.getElementById("rating").value,
  };
  array.push(item);

  let items = document.getElementById("items");
  let tr = document.createElement("tr");
  items.append(tr);

  let nameTd = document.createElement("td");
  let newName = document.getElementById("itemName").value;
  nameTd.innerHTML = newName;
  tr.append(nameTd);

  let categoryTd = document.createElement("td");
  let newCategory = document.getElementById("category").value;
  categoryTd.innerHTML = newCategory;
  tr.append(categoryTd);

  let quantityTd = document.createElement("td");
  let newQuantity = parseInt(document.getElementById("quantity").value);
  if (isNaN(newQuantity)) {
    alert("Only Numbers are allowed");
    quantityTd.style.backgroundColor = "red";
  }
  quantityTd.innerHTML = newQuantity;
  tr.append(quantityTd);

  let ratingTd = document.createElement("td");
  let newRating = parseInt(document.getElementById("rating").value);
  if (isNaN(newRating)) {
    alert("Only Numbers are allowed");
    ratingTd.style.backgroundColor = "red";
  }
  ratingTd.innerHTML = newRating;
  tr.append(ratingTd);

  if (
    newName == "" ||
    newCategory == "" ||
    newQuantity == "" ||
    newRating == ""
  ) {
    alert("please enter all the elements");
  }

  //<tr> <td><button>Edit</button></td>
  let editTd = document.createElement("td");
  let button = document.createElement("button");
  button.innerHTML = "Edit";
  button.setAttribute("myId", index);
  button.onclick = function () {
    console.log(this); //button
    console.log(this.parentNode); //td
    console.log(this.parentNode.parentNode); //tr
    console.log(this.parentNode.parentNode.childNodes); // All 6 columns(td's)
    let childNodes = this.parentNode.parentNode.childNodes;

    document.getElementById("itemName").value = 1; //childNodes[0].innerHTML;
    document.getElementById("category").value = 2; //childNodes[1].innerHTML;
    document.getElementById("quantity").value = 3; //childNodes[2].innerHTML;
    document.getElementById("rating").value = 4; //childNodes[3].innerHTML;

    let myId = this.getAttribute("myId");
    array.forEach(function (item) {
      if (item.id == myId) {
        item.name = document.getElementById("itemName").value;
        item.category = document.getElementById("category").value;
        item.quantity = document.getElementById("quantity").value;
        item.rating = document.getElementById("rating").value;

        let eptd = document.createElement("td");
        eptd.innerHTML = document.getElementById("itemName").value;
        let ectd = document.createElement("td");
        ectd.innerHTML = document.getElementById("category").value;
        let eqtd = document.createElement("td");
        eqtd.innerHTML = document.getElementById("quantity").value;
        let ertd = document.createElement("td");
        ertd.innerHTML = document.getElementById("rating").value;

        tr.cells[0].replaceWith(eptd);
        tr.cells[1].replaceWith(ectd);
        tr.cells[2].replaceWith(eqtd);
        tr.cells[3].replaceWith(ertd);
      }
    });
  };

  editTd.append(button);
  tr.append(editTd);

  let td = document.createElement("td");
  let deleteButton = document.createElement("button");
  button.setAttribute("myId", index);
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    let myId = this.getAttribute("myId");
    console.log(this.getAttribute("myId"));
    array = array.filter((item) => item.id != myId);

    console.log(this.parentNode.parentNode);
    this.parentNode.parentNode.remove();
  };
  td.append(deleteButton);
  tr.append(td);
}

window.onload = function () {
  let selectElement = document.getElementsByName("sort")[0];
  selectElement.onchange = printSelection;
};

function printSel(obj) {
  //let selectedOpt=" "
  console.log(this);
  console.log(this.options);
  for (let option of this.options) {
    console.log(option, "Is Selected", option.selected, option.innerHTML);
    if (option.selected && option.innerHTML == "FilterQ >100") {
      filter();
      break;
    } else if (option.selected && option.value == "clear") {
      clearFilter();
      break;
    }
  }
}

function clearFilter() {
  console.log(array);
  let filteredArray = array.filter((item) => Number(item.quantity) > 100);
  let children = document.getElementById("items").childNodes;
  for (let i = 2; i < children.length; i++) {
    let eachTr = children[i];
    console.log(eachTr.children[2]);
    eachTr.style.display = "";
  }
}

function filter() {
  console.log(array);
  let filteredArray = array.filter((item) => Number(item.quantity) > 100);
  let children = document.getElementById("items").childNodes;
  for (let i = 2; i < children.length; i++) {
    let eachTr = children[i];
    console.log(eachTr.children[2]);
    if (Number(eachTr.children[2].innerHTML) < 100) {
      eachTr.style.display = "none";
    }
  }
}

function ratingFilter() {
  console.log(array);
  let filteredArray = array.filter((item) => Number(item.rating) > 4);
  let children = document.getElementById("items").childNodes;
  for (let i = 2; i < children.length; i++) {
    let eachTr = children[i];
    console.log(eachTr.children[2]);
    if (Number(eachTr.children[3].innerHTML) < 4) {
      eachTr.style.display = "none";
    }
  }
}

function printSelection() {
  //let selectedOpt=" "
  console.log(this);
  console.log(this.options);
  for (let option of this.options) {
    console.log(option, "Is Selected", option.selected, option.innerHTML);
    if (option.selected && option.innerHTML == "sort By Name") {
      sortByName();
      break;
    } else {
      sortByQuantity();
    }
  }
}

function sortByName() {
  let sortedArray = array.sort((item1, item2) =>
    item1.name > item2.name ? 1 : -1
  );

  let children = document.getElementById("items").childNodes;
  let shouldSwitch, i;
  let switching = true;
  while (switching) {
    switching = false;

    for (i = 2; i < children.length - 1; i++) {
      shouldSwitch = false;
      let x = children[i].cells[0];

      let y = children[i + 1].cells[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      children[i].parentNode.insertBefore(children[i + 1], children[i]);
      switching = true;
    }
  }
}
function sortByQuantity() {
  let sortedArray = array.sort((item1, item2) => (item1 > item2 ? 1 : -1));

  let children = document.getElementById("items").childNodes;
  let shouldSwitch, i;
  let switching = true;
  while (switching) {
    switching = false;

    for (i = 2; i < children.length - 1; i++) {
      shouldSwitch = false;
      let x = children[i].cells[2];
      let y = children[i + 1].cells[2];
      if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      children[i].parentNode.insertBefore(children[i + 1], children[i]);
      switching = true;
    }
  }
}
