"use strict";

// Default parameters
const bookings = [];
const createBooking = function (flightNumber, numPassengers = 1, price = 199 * numPassengers) {
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
  return booking;
};

createBooking("LH123");
createBooking("LH123", 2, 777);
createBooking("GD32", undefined, 5);

// Passing arguments values vs Reference
const flightNumber = "LH777";
const mani = {
  name: "Manipriyan",
  passport: 4576115555,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH47885";
  passenger.name = "Mr " + passenger.name;

  if (passenger.passport === 4576115555) {
    // alert("Check in");
  } else {
    // alert("Wrong passport");
  }
};

checkIn(flightNumber, mani);
console.log(flightNumber, mani);

// First accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transFormer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`The function name is: ${fn.name}`);
};

transFormer("Javascript is the best ", upperFirstWord);
transFormer("Javascript is the best ", oneWord);
