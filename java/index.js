function updateTime() {
  //tokyo

  let tokyoElement = document.querySelector("#Tokyo");
  let toykoDateElement = tokyoElement.querySelector(".date");
  let toykoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  toykoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  toykoTimeElement.innerHTML = `${tokyoTime.format(`HH:mm:ss`)}`;

  //paris

  let parisElement = document.querySelector("#Paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(`HH:mm:ss`)}`;
}

updateTime();
setInterval(updateTime, 1000);
