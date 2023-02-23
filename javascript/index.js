function updateClock() {
  //New York

  let nyElement = document.querySelector("#new-york");
  let nyDateElement = nyElement.querySelector(".date");
  let nyTimeElement = nyElement.querySelector(".time");

  let nyTime = moment().tz("America/New_York");
  nyDateElement.innerHTML = nyTime.format("MMMM Do, YYYY");
  nyTimeElement.innerHTML = `${nyTime.format(
    "h:mm:ss"
  )} <span id="ampm"> ${nyTime.format("a")}</span>`;

  //Kyiv

  let kyivElement = document.querySelector("#kyiv");
  let kyivDateElement = kyivElement.querySelector(".date");
  let kyivTimeElement = kyivElement.querySelector(".time");

  let kyivTime = moment().tz("Europe/Kiev");
  kyivDateElement.innerHTML = kyivTime.format("MMMM Do, YYYY");
  kyivTimeElement.innerHTML = `${kyivTime.format(
    "h:mm:ss"
  )} <span id="ampm"> ${kyivTime.format("a")}</span>`;

  //Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "h:mm:ss"
  )} <span id="ampm"> ${tokyoTime.format("a")}</span>`;

  //Sydney

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");

  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss"
  )} <span id="ampm"> ${sydneyTime.format("a")}</span>`;
}

function updateCity(event) {
  let cityTZ = event.target.value;
  let cityName = cityTZ.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTZ);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
            <div>
             <h2>${cityName}</h2>
             <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <span id="ampm"> ${cityTime.format("a")}</span></div>
        </div>
        `;
}
updateClock();
setInterval(updateClock, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
