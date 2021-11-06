//use strict

let form;
let contscts;
function openForm() {
  form = document.getElementById("form");
  form.classList.add("go");
}
 
function sendContacts() {
  form = document.getElementById("form");
  form.classList.remove("go");
  contscts = document.getElementById("feedback-message");
  contscts.classList.add("go");
}


