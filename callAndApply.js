"use strict";

const indianAirLine = {
  airline: "Indian Air Line",
  iataCode: "IN",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on 
    ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

indianAirLine.book(777, "Manipriyan");
indianAirLine.book(72377, "Hari");

const deccanAirLine = {
  airline: "Deccan",
  iataCode: "DCA",
  bookings: [],
};

const book = indianAirLine.book;
// !!book(24, "Mani"); //Undefined
// because right now this funct ion is not a method
// we have made made a copy of the function and now it's working like a
// normal function in normal function call the this keyword refers to undefined

book.call(deccanAirLine, "24", "Mani"); // the first argument is what we want the this keyword to be
// after the first argument we can use the arguments of the orginal function

// Apply Method
const flightData = [547, "Mani"];
book.apply(deccanAirLine, flightData);
book.call(deccanAirLine, ...flightData);

// BIND Method

const bookDeccanAirline = book.bind(deccanAirLine);
bookDeccanAirline(2454, "Manipriyan G S");
