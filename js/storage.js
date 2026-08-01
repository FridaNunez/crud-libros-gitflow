

const STORAGE_KEY = "books";

function getBooks() {
  const books = localStorage.getItem(STORAGE_KEY);

  if (!books) {
    return [];
  }

  return JSON.parse(books);
}


function saveBooks(books) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(books)
  );
}

function addBook(book) {
  const books = getBooks();

  const newBook = {
    id: Date.now().toString(),

    ...book
  };

  books.push(newBook);

  saveBooks(books);

  return newBook;
}