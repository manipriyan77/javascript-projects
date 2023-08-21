"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
////////////////////////////////////////////////////////
// Button scrolling

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("Current scroll positions", window.pageYOffset);
  // !!SCROLL TO
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + pageYOffset,
  //   behavior: "smooth",
  // });

  // Modern method
  section1.scrollIntoView({ behavior: "smooth" });
});
////////////////////////////////////////////////////////

// Page Navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const hrefID = this.getAttribute("href");
//     document.querySelector(hrefID).scrollIntoView({ behavior: "smooth" });
//     console.log(hrefID, this.href);
//   });
// });
// !Using event delegation
// !1. Add event listener to common parent element
// !2. Determine which element triggered the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  // console.log(e.target, this);

  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    console.log("Link", e.target);
    const hrefID = e.target.getAttribute("href");
    document.querySelector(hrefID).scrollIntoView({ behavior: "smooth" });
    // console.log(hrefID, this.href);
  }
});

// Menu fade animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav__links").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
      logo.style.opacity = opacity;
    });
    // console.log(siblings);
  }
};

nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector(".header");

// const allSections = document.querySelectorAll(".section");
// console.log(allSections);
// console.log(Array.from(allSections));

// console.log(document.getElementById("section--1"));

// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

//  creating and inserting elements
//  insertAdjacentHTML

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics";
// message.innerHTML =
//   "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it</button>";

//  header.prepend(message);
// header.append(message);

//  header.append(message.cloneNode(true));
//  header.before(message);
//  header.after(message);

//  !!Delete Elements
// document.querySelector(".btn--close-cookie").addEventListener("click", function () {
//   message.remove();
// });
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";
//  to get the styles
// console.log(getComputedStyle(message).color);
// message.style.height = parseFloat(getComputedStyle(message).height, 10) + 40 + "px";
//  to change the css variables values
// document.documentElement.style.setProperty("--color-primary", "orangered");

//  !!ATTRIBUTES
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

//  !!TO set attribute values
// logo.alt = "Beautiful logo";

//  To get custom attributes
// console.log(logo.getAttribute("designer"));
// console.log(logo.getAttribute("src")); //To get the relative path

//  to set custom attribute values
// logo.setAttribute("company", "Bank list");

// const link = document.querySelector(".nav__link-btn");
//  console.log(link.href);
//  console.log(link.getAttribute("href"));

// !! Data attributes
// console.log(logo.dataset.versionNumber);

//  !!Classes
// logo.classList.add("c", "c2");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c");

// !!EVENT LISTENERS
// const h1 = document.querySelector("h1");
// const alertH1 = function (e) {
//   // alert("Add event listener");
//   // h1.removeEventListener("mouseenter", alertH1);
// };
// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => {
//   h1.removeEventListener("mouseenter", alertH1);
// }, 1000);

// h1.onclick = function (e) {
//   alert("older way");
// };
// ! To remove a event handler

// ! EVENT BUBBLING AN D CAPTURING

// ! EVENT PROPAGATION
// console.log("Hello");

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log("randomColor", randomColor);

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
//   console.log(this === e.currentTarget);

//   //! To stop propagation
//   // e.stopPropagation(); // !Not a good idea to stop propagation
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK NAV", e.target, e.currentTarget);
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK COntainer", e.target, e.currentTarget);
// });

// document.body.addEventListener("click", (e) => {
//   console.log("body click", e.target);
// });

//  ! DOM TRAVERSAL
// const h1 = document.querySelector("h1");
//  !Going downwards : selecting child elements
// console.log(h1.querySelectorAll(".highlight"));
//  !To select direct children
// console.log(h1.childNodes);
// console.log(h1.children);
//  !First and last element child
// h1.firstElementChild.style.color = "blue";
// h1.lastElementChild.style.color = "red";
//  !Going upwards : selecting parent elements
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";
//  !Going sideways : selecting siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
