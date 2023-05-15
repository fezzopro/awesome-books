import storage from './storage.js';

class Books {
  constructor (){
    this.message = '';
  }
  saveBooks = (bookTitle, bookAuthor) => {
    const book = {
      id: `${Math.ceil(Math.random() * 1000000)}-${bookTitle}`,
      title: bookTitle,
      author: bookAuthor,
    };
    storage.saveToLocalStorage(book);
    return this.message = 'book saved';
  }

  deleteBook = (bookId) => {
    const fileteredBooks = storage.readLocalStorage().filter((book) => book.id !== bookId);
    storage.saveAsLocalSorage(fileteredBooks);
    return this.message = 'book deleted';
  }
}

export default new Books();