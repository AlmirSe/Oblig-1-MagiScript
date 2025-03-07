
document.addEventListener("DOMContentLoaded", () => {
  console.log("ready!")
  const passwordBookCover = document.getElementById("change-password-book-cover"); 
  const nameBookCover = document.getElementById("change-name-book-cover");
  const familiarBookCover = document.getElementById("summon-familiar-cover");
   
  const passwordBook = document.getElementById("change-password-book");
  const nameBook = document.getElementById("change-name-book");
  const familiarBook = document.getElementById("summon-familiar-book");
  
  const bookView = document.getElementById("book-view");
  const closeButton = document.getElementById(close-tome);
  

  })

  function openSpellBook(){
     console.log("Opening spellbook...");
     bookView.classList.remove("hidden");
     book.classList.remove("hidden");
  }

  function closeSpellBook(){
    bookview.classList.add("hidden");
    passwordBook.classList.add("hidden");
    nameBookCover.classList.add("hidden");
    familiarBook.classList.add("hidden");
  }

  //Adding event listeners to each book cover.
  passwordBookCover.addEventListener("click", () => openSpellBook(passwordBook));
  nameBookCover.addEventListener("click", () => openSpellBook(nameBook));
  familiarBookCover.addEventListener("click", () => openSpellBook(familiarBook));

  closeButton.addEventListener("click", closeSpellBook);

  document.getElementById("change-password-form").addEventListener("submit", (e) =>{
    e.preventDefault(); 

    const username = document.getElementById("Username").value;
    const newPassword = document.getElementById("new-Password").value;
    const conFirmPassword = document.getElementById("confirm-password").value;
    const messages = document.getElementById("password-message");

    

  })
  //TODO: add functionality to change name
  //TODO: add functionality to summon familiar
  // have a function where you can load content into a "user array" -> easier to work with