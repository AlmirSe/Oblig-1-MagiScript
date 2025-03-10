
document.addEventListener("DOMContentLoaded", () => {
  console.log("ready!")
  const passwordBookCover = document.getElementById("change-password-book-cover"); 
  const nameBookCover = document.getElementById("change-name-book-cover");
  const familiarBookCover = document.getElementById("summon-familiar-cover");
   
  const passwordBook = document.getElementById("change-password-book");
  const nameBook = document.getElementById("change-name-book");
  const familiarBook = document.getElementById("summon-familiar-book");
  
  const bookView = document.getElementById("book-view");
  const closeButton = document.getElementById("close-tome");
  

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
    const confirmPassword = document.getElementById("confirm-password").value;
    const messages = document.getElementById("password-message");

    if (newPassword != confirmPassword) {
      messages.textContent = "Password do not match!";
      messages.style.color = "red";
    } else {
      messages.textContent = "Password successfully changed for" + username;
      messages.style.color = "green";
    }
  });

  document.getElementById("rename-wizard-form").addEventListener("submit", (e)=>{
    e.preventDefault();

    const wizardName = document.getElementById("new-wizard-name").value;
    const wizardTitle = document.getElementById("new-wizard-title").value;
    const message = document.getElementById("rename-message");

    message.textContent = "You are now known as ${wizardName}, the ${wizardTitle}!";
    message.style.color = "purple"; 
  });

  document.getElementById("summon-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const familiarName = document.getElementById("familiar-name").value;
    const familiarType = document.getElementById("familiar-type").value;
    const hasWings = document.getElementById("has-wings").checked;
    const wingsType = document.getElementById("wings-type").value;
    const mood = document.getElementById("familiar-mood").value
    const contractEnd = document.getElementById("contract-end").value;
    const message = document.getElementById("summon-message");

    let traits = [];
    document.querySelectorAll(".traits:checked").forEach((traits) =>{
      traits.push(trait.value);
    });

    let summonText = "You have summoned a ${mood} ${familiarType} named ${familiarName}.";
    if (hasWings) summonText += "It has ${wingsType} wings.";
    if (traits.length > 0) summonText += "It possesses the following traits: ${traits.join(", ")}";
    summonText  += "Its contract ends on ${contractEnd}.";

    message.textContent = summonText;
    message.style.color = "blue";

  });

  let userarray = [];

  function updateUserArray(action, data) {
    userarray.push({ action, data });
    console.log(userArray);

    updateUserArray("Password Change", { username, newPassword}); //After changing password.
    updateUserArray("Name Change", { wizardName, wizardTitle }); //After the change of name
    updateUserArray("Summon Familiar", { familiarName, familiarType, mood }); // After summoning a familiar.

  } 
 
 