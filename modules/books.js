import storage from './storage.js';

class Books {
  saveBooks(bookTitle, bookAuthor) {
    const book = {
      id: `${Math.ceil(Math.random() * 1000000)}-${bookTitle}`,
      title: bookTitle,
      author: bookAuthor,
    };
    storage.saveToLocalStorage(book);
    return this;
  }

  deleteBook(bookId) {
    const fileteredBooks = storage.readLocalStorage().filter((book) => book.id !== bookId);
    storage.saveAsLocalSorage(fileteredBooks);
    return this;
  }
}

export default new Books();