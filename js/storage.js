const STORAGE_KEY =
  "books";


function getBooks() {

  const data =
    localStorage.getItem(
      STORAGE_KEY
    );

  if (!data) {

    return [];

  }

  return JSON.parse(
    data
  );

}


function saveBooks(
  books
) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      books
    )
  );

}


function addBook(
  book
) {

  const books =
    getBooks();

  const newBook = {

    id:
      Date.now(),

    ...book

  };

  books.push(
    newBook
  );

  saveBooks(
    books
  );

  return newBook;

}


function updateBook(
  id,
  updatedBook
) {

  const books =
    getBooks();

  const index =
    books.findIndex(
      (book) =>
        book.id === id
    );

  if (
    index === -1
  ) {

    return null;

  }

  books[index] = {

    ...books[index],

    ...updatedBook

  };

  saveBooks(
    books
  );

  return books[index];

}

function deleteBook(
  id
) {

  const books =
    getBooks();

  const filteredBooks =
    books.filter(
      (book) =>
        book.id !== id
    );

  saveBooks(
    filteredBooks
  );

}