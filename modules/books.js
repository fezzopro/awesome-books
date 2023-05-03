import storage  from "./storage.js";
class Books {
  constructor() {
  }

  saveBooks(bookTitle, bookAuthor) {
    const book = {
      id:  `${Math.ceil(Math.random()*1000000)}-${bookTitle}`,
      title: bookTitle,
      author: bookAuthor
    };
    storage.saveToLocalStorage(book);
  }

  deleteBook(bookId) {
    const fileteredBooks = storage.readLocalStorage().filter((book) => book.id !== bookId);
    storage.saveAsLocalSorage(fileteredBooks);
  }
}

export default new Books();