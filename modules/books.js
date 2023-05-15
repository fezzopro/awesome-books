import storage from './storage.js';

class Books {
  constructor() {
    this.message = '';
  }

  saveBooks = (bookTitle, bookAuthor) => {
    const book = {
      id: `${Math.ceil(Math.random() * 1000000)}-${bookTitle}`,
      title: bookTitle,
      author: bookAuthor,
    };
    storage.saveToLocalStorage(book);
    this.message = 'book saved';
    return this.message;
  }

  deleteBook = (bookId) => {
    const fileteredBooks = storage.readLocalStorage().filter((book) => book.id !== bookId);
    storage.saveAsLocalSorage(fileteredBooks);
    this.message = 'book deleted';
    return this.message;
  }
}

export default new Books();