class Storage {
  constructor() {
    this.BOOK_COLLECTION_NAME = 'collectionOfBooks';
    this.localStorage = localStorage;
  }

  isLocalStorage = () => {
    const storage = this.localStorage.getItem(this.BOOK_COLLECTION_NAME);
    return storage;
  }

  readLocalStorage = () => {
    const storage = JSON.parse(this.localStorage.getItem(this.BOOK_COLLECTION_NAME));
    return storage;
  }

  createlocalStorage = () => {
    this.localStorage.setItem(this.BOOK_COLLECTION_NAME, JSON.stringify([]));
  }

  saveToLocalStorage = (book) => {
    this.localStorage.setItem(this.BOOK_COLLECTION_NAME,
      JSON.stringify([...this.readLocalStorage(), book]));
  }

  saveAsLocalSorage = (books) => {
    this.localStorage.setItem(this.BOOK_COLLECTION_NAME, JSON.stringify(books));
    return this.readLocalStorage();
  }

  getCollectionName = () => this.BOOK_COLLECTION_NAME;
}
export default new Storage();