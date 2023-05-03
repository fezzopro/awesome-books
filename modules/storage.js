class Storage {
  constructor() {
    this.BOOK_COLLECTION_NAME = 'collectionOfBooks';
    this.localStorage = localStorage;
  }

  isLocalStorage = () => {
    
    return this.localStorage.getItem(this.BOOK_COLLECTION_NAME);
  }

  readLocalStorage = () => {
    return JSON.parse(this.localStorage.getItem(this.BOOK_COLLECTION_NAME));
  }

  createlocalStorage = () => {
    return this.localStorage.setItem(this.BOOK_COLLECTION_NAME, JSON.stringify([]));
  }

  saveToLocalStorage = (book) => {
    return this.localStorage.setItem(this.BOOK_COLLECTION_NAME,
      JSON.stringify([...this.readLocalStorage(), book]));
  }

  saveAsLocalSorage = (books) => {
    return this.localStorage.setItem(this.BOOK_COLLECTION_NAME, JSON.stringify(books));
  }

  getCollectionName = () => {
    return this.BOOK_COLLECTION_NAME;
  }
}
export default new Storage();