import books from '../modules/books.js';
import storage from '../modules/storage.js';

beforeEach(() => {
  storage.createlocalStorage();
});

afterEach(() => {
  localStorage.removeItem(storage.getCollectionName());
});
describe('Books Module', () => {
  const mockBook = {
    title: 'good man',
    author: 'Bad Habits',
    id: Math.ceil(Math.random() * 1000),
  };

  test('books constructor', () => {
    expect(books.message).toBe('');
  });

  test('saveBooks', () => {
    expect(books.saveBooks(mockBook)).toBe('book saved');
  });

  test('deleteBook', () => {
    expect(books.deleteBook(mockBook.id)).toBe('book deleted');
  });
});