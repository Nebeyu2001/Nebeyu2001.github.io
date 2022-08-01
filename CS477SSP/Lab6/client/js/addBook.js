"use strict";
window.onload = function () {
  document.getElementById("add-button").onclick = addProduct;
};

async function addProduct(event) {
  event.preventDefault();
  const titleInput = document.getElementById("title");
  const isbnInput = document.getElementById("ISBN");
  const publishedDateInput = document.getElementById("publishedDate");
  const authorInput = document.getElementById("author");

  const response = await fetch("http://localhost:3000/books", {
    method: "POST",
    body: JSON.stringify({
      title: titleInput.value,
      ISBN: isbnInput.value,
      publishedDate: publishedDateInput.value,
      author: authorInput.value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  document.getElementById("book-add-form").reset();
  console.log(data);
  window.location = "index.html";
}
