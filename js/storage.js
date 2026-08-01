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
