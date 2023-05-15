import storage from "../modules/storage";

describe('Storage Module Test Suit', () => {

  beforeEach(() => {
    localStorage.removeItem(storage.getCollectionName());
  });

  afterEach(() => {
    localStorage.removeItem(storage.getCollectionName());
  });

  test('isLocalStorage', () => {
    expect(!storage.isLocalStorage()).toBe(true);
  });

  const mockBook = {
    title: 'good man',
    author: 'Bad Habits',
    id: Math.ceil(Math.random() * 1000)
  };
  
  test('isLocalStorage', () => {
    storage.saveAsLocalSorage(mockBook);
    expect(storage.isLocalStorage().length).toBeGreaterThan(0);
  });


  test('saveAsLocalSorage', () => {
    storage.saveAsLocalSorage(mockBook);
    expect(!storage.isLocalStorage()).toBe(false);
  });

});