//use strict

let form;
let contacts;
function openForm() {
  form = document.getElementById("form");
  form.classList.add("go");
}
 
function sendContacts() {
  form = document.getElementById("form");
  form.classList.remove("go");
  contacts = document.getElementById("feedback-message");
  contacts.classList.add("go");
}

function closeMessage() {
    contacts = document.getElementById("feedback-message");
    contacts.classList.remove("go");
}


