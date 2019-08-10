import "./main.scss";
import {
  prevContact,
  nextContact,
  addContact,
  deleteContact,
  updateContact,
} from './contactlist.js';

const prevButton = document.getElementById("prevButton");
const addButton = document.getElementById("addButton");
const updateButton = document.getElementById("updateButton");
const delButton = document.getElementById("delButton");
const nextButton = document.getElementById("nextButton");

prevButton.addEventListener("click", prevContact);
addButton.addEventListener("click", addContact);
updateButton.addEventListener("click", updateContact);
delButton.addEventListener("click", deleteContact);
nextButton.addEventListener("click", nextContact);