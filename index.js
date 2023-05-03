import books from './modules/books.js';
import components from './modules/components.js';
components.initialize();

const links = document.querySelectorAll('.nav-ul-li');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.target.innerHTML === 'List') {
      components.displayBooks();
    } else if (event.target.innerHTML === 'New') {
      components.displayForm();
    } else if (event.target.innerHTML === 'Contact') {
      components.displayContactDetails();
    }
  });
});

document.querySelector('.save-button > button').addEventListener('click', (event) => {
  event.preventDefault();
  const bookTitle = document.querySelector('.book-title').value;
  const bookAuthor = document.querySelector('.book-author').value;
  if (bookTitle && bookAuthor) {
    books.saveBooks(bookTitle, bookAuthor);
    components.clearNewBookForm();
  } else {
    components.displayNewBookError();
  }
});

