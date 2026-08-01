function renderBooks() {

  const books =
    getBooks();

  const booksBody =
    document.getElementById(
      "books-body"
    );

  const emptyMessage =
    document.getElementById(
      "empty-message"
    );


  if (
    books.length === 0
  ) {

    booksBody.innerHTML =
      "";

    emptyMessage.style.display =
      "block";

    return;

  }


  emptyMessage.style.display =
    "none";


  let rows =
    "";


  books.forEach(
    (book) => {

      rows += `

        <tr>

          <td>
            ${escapeHtml(book.title)}
          </td>

          <td>
            ${escapeHtml(book.author)}
          </td>

          <td>
            ${book.year}
          </td>

          <td>
            ${escapeHtml(book.genre)}
          </td>

          <td>

            <button
              type="button"
              class="btn"
              onclick="editBook(${book.id})"
            >
              Editar
            </button>

            <button
              type="button"
              class="btn"
              onclick="removeBook(${book.id})"
            >
              Eliminar
            </button>

          </td>

        </tr>

      `;

    }

  );


  booksBody.innerHTML =
    rows;

}


function editBook(
  id
) {

  const books =
    getBooks();

  const book =
    books.find(
      (item) =>
        item.id === id
    );

  if (!book) {

    return;

  }

  loadBookForEdit(
    book
  );

}


function removeBook(
  id
) {

  const confirmed =
    confirm(
      "¿Está seguro de que desea eliminar este libro?"
    );

  if (!confirmed) {

    return;

  }

  deleteBook(
    id
  );

  renderBooks();

}


function escapeHtml(
  value
) {

  const element =
    document.createElement(
      "div"
    );

  element.textContent =
    value;

  return element.innerHTML;

}