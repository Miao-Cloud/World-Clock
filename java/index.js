function updateTime() {
  //tokyo

  let tokyoElement = document.querySelector("#Tokyo");
  if (tokyoElement) {
    let toykoDateElement = tokyoElement.querySelector(".date");
    let toykoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    toykoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    toykoTimeElement.innerHTML = `${tokyoTime.format(`HH:mm:ss`)}`;
  }
  //paris

  let parisElement = document.querySelector("#Paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = `${parisTime.format(`HH:mm:ss`)}`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(`HH:mm:ss`)}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
