"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");

function addHiddenClass() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener("click", function (event) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeModal.addEventListener("click", addHiddenClass);
overlay.addEventListener("click", addHiddenClass);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    addHiddenClass();
  }
});
