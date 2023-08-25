"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
};

const renderCountryTemplate = function (data, className = " ") {
  const htmlTemplate = `
        <article class="country ${className}">
          <img class="country__img" src=${data.flags?.png} />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
              1
            )} Million</p>
            <p class="country__row"><span>🗣️</span>${data.languages?.tam}</p>
            <p class="country__row"><span>💰</span>${data.currencies?.INR?.symbol}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", htmlTemplate);
};
//   ///////////////////////////////////////
//   const request = new XMLHttpRequest();
// const getCountryData = function (country) {
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const htmlTemplate = `
//   <article class="country">
//     <img class="country__img" src=${data.flags?.png} />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages?.tam}</p>
//       <p class="country__row"><span>💰</span>${data.currencies?.INR?.symbol}</p>
//     </div>
//   </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", htmlTemplate);
//     console.log("htmlTemplate", htmlTemplate);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("usa");
// getCountryData("africa");
// getCountryData("spain");

// !! CALLBACK HELL

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountryTemplate(data);

//     // Get Neighbor country
//     const [neighbor] = data.borders;
//     if (!neighbor) {
//       return;
//     }
//     // AJAX Call for country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log("data2", data2);
//       renderCountryTemplate(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbor("russia");

// !PROMISES AND FETCH
//? Then method is called when the promise is fulfilled
//? catch method is called when the promise is rejected
//? Finally method is called no matter what

// const request = fetch("https://restcountries.com/v3.1/name/usa");

// const getJSON = function (url, errMessage = "Something went wrong") {
//   return fetch(url).then(function (response) {
//     if (!response.ok) {
//       throw new Error(errMessage);
//     }
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (data) {
//       renderCountryTemplate(data[0]);
//       const neighbor = data[0].borders[0];
//       if (!neighbor) {
//         return;
//       }
//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(function (data) {
//       renderCountryTemplate(data[0], "neighbour");
//     })
//     .catch((err) => {
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error("Country not found");
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountryTemplate(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) {
//         return;
//       }
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountryTemplate(data[0], "neighbour");
//     })
//     .catch(function (err) {
//       console.log("err", err);
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("spain");
// });
// getCountryData("dahgsdj");

// !EVENT LOOP
// console.log("test start");
// setTimeout(() => {
//   console.log("0 sec timer");
// }, 0);
// Promise.resolve("Resolved successfully 1").then((res) => console.log(res));
// console.log("test end");

// ! BUILDING A PROMISE
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("You have bought the lottery");
  const randomNum = Math.random();
  console.log("randomNum", randomNum, randomNum >= 0.2);
  setTimeout(function () {
    if (randomNum >= 0.2) {
      resolve("Ypu won the lottery");
    } else {
      reject(new Error("Sorry you have lost"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log("res", res)).catch((err) => console.error("err", err));

// Promisifying set timeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("Waited 2 seconds");
    return wait();
  })
  .then(() => console.log("waited 1s sec"));
