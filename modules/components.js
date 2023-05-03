import { DateTime } from './luxon.js';
import books from './books.js';
import storage from './storage.js';

class Components {
  constructor() {
    this.bookSection = document.querySelector('.book-section');
    this.pageTitle = document.querySelector('.section-title h2');
  }

  initialize() {
    // if no local storage create one
    if (!storage.isLocalStorage()) {
      storage.createlocalStorage();
    }
    // Display books
    this.displayForm();
    // Display time
    setInterval(this.displayTime, 1000);
  }

  displayTime() {
    const currentTime = DateTime.now().c;
    const timeSlot = document.querySelector('.timer');
    timeSlot.textContent = `${currentTime.year}-${currentTime.month}-${currentTime.day} ${currentTime.hour}:${currentTime.minute}:${currentTime.second}`;
    return this.bookSection;
  }

  displayBooks() {
    // if books, display. Else Display no books
    if (storage.readLocalStorage().length === 0) {
      this.bookSection.textContent = 'No Books Available';
    } else {
      let listOfBooks = '<ul class="book-ul">';
      storage.readLocalStorage().forEach((book) => {
        listOfBooks += `
          <li class="book-ul-li">
            <span>${book.title} by ${book.author}</span>
            <button class="delete" value="${book.id}">Delete</button>
          </li>`;
      });
      listOfBooks += '</ul>';
      this.pageTitle.textContent = 'List Of Books';
      this.bookSection.innerHTML = listOfBooks;
      this.bookListEventListner();
    }
  }

  displayForm() {
    const form = `
      <form class="new-form" id="new-form">
        <input type="text" placeholder="Book Title" class="book-title" name="title" />
        <input type="text" placeholder="Book Author" class="book-author" name="author" />
        <div class="save-button"><button type="submit">Save</button></div>
      </form>
    `;
    this.pageTitle.textContent = 'Add New Book';
    this.bookSection.innerHTML = form;
  }

  displayContactDetails() {
    const contact = `
      <div class="contacts">
        <p>Do you have any questions or just want to say "Hello"?</p>
        <p>You can reach out to us!</p>
        <ul id="contact-details">
            <li class="contact-detail"><span>Our Email: </span> mail@mail.com</li>
            <li class="contact-detail"><span>Our phone number: </span>0043586534422</li>
            <li class="contact-detail"><span>Our address: </span> Streetname 22, 84503 City, Country</li>
        </ul>
      </div>
    `;
    this.pageTitle.innerHTML = 'Contact information';
    this.bookSection.innerHTML = contact;
  }

  displayNewBookError() {
    const submitButton = document.querySelector('.save-button');
    const spanError = document.createElement('span');
    spanError.className = 'new-book-failure';
    spanError.textContent = 'Please fill all the form inputs';
    this.clearNewBookFormErrorMessage();
    submitButton.insertAdjacentElement('beforebegin', spanError);
    return this;
  }

  clearNewBookFormErrorMessage() {
    if (document.querySelector('.new-book-failure')) {
      document.querySelector('.new-book-failure').remove();
    }
    return this;
  }

  clearNewBookForm() {
    document.querySelector('.new-form').reset();
    this.clearNewBookFormErrorMessage();
  }

  bookListEventListner() {
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener('click', (deleteButton) => {
        books.deleteBook(deleteButton.target.value);
        this.displayBooks();
      });
    });
  }
}

export default new Components();