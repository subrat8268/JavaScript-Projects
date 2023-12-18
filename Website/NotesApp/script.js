const notesContainer = document.querySelector(".notearea");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNote() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  img.className = "delete";
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
}

function deleteNote(target) {
  if (target.tagName === "IMG") {
    target.parentElement.remove();
    updateStorage();
  }
}

createBtn.addEventListener('click', createNote);

notesContainer.addEventListener('click', (e) => {
  deleteNote(e.target);
});

notesContainer.addEventListener('keyup', () => {
  updateStorage();
});

showNotes();
