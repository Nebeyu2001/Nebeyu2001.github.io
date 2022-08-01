"use strict";

window.onload = function () {
  let url = new URL(location.href);
  const bookId = url.searchParams.get("id");
  fetchBookById(bookId);
  document.getElementById("edit-button").onclick = function (event) {
    event.preventDefault();
    editBookById(bookId);
  };
};

function fetchBookById(id) {
  fetch("http://localhost:3000/books/" + id)
    .then((response) => response.json())
    .then((book) => {
      document.getElementById("title").value = book.title;
      document.getElementById("isbn").value = book.ISBN;
      document.getElementById("publishedDate").value = book.publishedDate;
      document.getElementById("author").value = book.author;
    });
}

async function editBookById(id) {
  const titleInput = document.getElementById("title");
  const isbnInput = document.getElementById("isbn");
  const publishedDateInput = document.getElementById("publishedDate");
  const authorInput = document.getElementById("author");
  const response = await fetch("http://localhost:3000/books/" + id, {
    method: "PUT",
    body: JSON.stringify({
      title: titleInput.value,
      isbn: isbnInput.value,
      publishedDate: publishedDateInput.value,
      authorInput: authorInput.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.location = "index.html";
  }
}
