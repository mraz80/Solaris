const solen = document.querySelector(".Solen");
const merkurius = document.querySelector(".Merkurius");
const venus = document.querySelector(".Venus");
const jorden = document.querySelector(".Jorden");
const mars = document.querySelector(".Mars");
const jupiter = document.querySelector(".Jupiter");
const saturnus = document.querySelector(".Saturnus");
const uranus = document.querySelector(".Uranus");
const neptunus = document.querySelector(".Neptunus");

const getKey = (apiType, endpoint) => {
  const url =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com" + endpoint;

  const options = {
    method: apiType,
  };

  fetch(url, options)
    .then((res) => {
      console.log(res);
      //will give promise
      return res.json();
    })
    .then((res) => {
      console.log(res.key);
      getData("GET", "/bodies", res.key);
    });
};

const getData = async (apiType, endpoint, key) => {
  const url =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com" + endpoint;

  const options = {
    method: apiType,

    headers: { "x-zocom": key },
  };

  const data = await fetch(url, options);
  const dataJson = await data.json();

  for (let i = 0; i <= 8; i++) {
    console.log(dataJson.bodies[i]);
    console.log(dataJson.bodies[i].name);
    console.log(dataJson.bodies[i].latinName);
    console.log(dataJson.bodies[i].rotation);
    console.log(dataJson.bodies[i].desc);
    console.log(dataJson.bodies[i].temp);
    console.log(dataJson.bodies[i].circumference);
  }
  const displayPosition = (event) => {
    console.log(`X-Pos: ${event.x} ,Y-Pos ${event.y}`);

    solen.addEventListener("click", () => {
      const div = document.createElement("div");
      const pp = document.createElement("p");
      const ll = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = "Name:  " + dataJson.bodies[0].name;
      const li2 = document.createElement("li");
      li2.innerHTML = "Latin Name:  " + dataJson.bodies[0].latinName;
      const li3 = document.createElement("li");
      li3.innerHTML = "temp Day " + dataJson.bodies[0].temp.day;
      const li4 = document.createElement("li");
      li4.innerHTML = "temp Night " + dataJson.bodies[0].temp.night;
      const li5 = document.createElement("li");
      li5.innerHTML = "circumference  " + dataJson.bodies[0].circumference;

      div.style.width = "250px";
      div.style.height = "300px";
      div.style.backgroundColor = "dodgerblue";
      div.style.border = "solid black";
      div.style.borderRadius = "5px";
      ll.appendChild(li1);
      ll.appendChild(li2);
      ll.appendChild(li3);
      ll.appendChild(li4);
      ll.appendChild(li5);

      pp.appendChild(ll);
      div.appendChild(pp);
      document.body.appendChild(div);
    });

    merkurius.addEventListener("mouseover", () => {
      const div = document.createElement("div");
      const pp = document.createElement("p");
      const ll = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = "Name:  " + dataJson.bodies[1].name;
      const li2 = document.createElement("li");
      li2.innerHTML = "Latin Name:  " + dataJson.bodies[1].latinName;
      const li3 = document.createElement("li");
      li3.innerHTML = "temp Day " + dataJson.bodies[1].temp.day;
      const li4 = document.createElement("li");
      li4.innerHTML = "temp Night " + dataJson.bodies[1].temp.night;
      const li5 = document.createElement("li");
      li5.innerHTML = "circumference  " + dataJson.bodies[1].circumference;

      div.style.width = "250px";
      div.style.height = "300px";
      div.style.backgroundColor = "dodgerblue";
      div.style.border = "solid black";
      div.style.borderRadius = "5px";
      ll.appendChild(li1);
      ll.appendChild(li2);
      ll.appendChild(li3);
      ll.appendChild(li4);
      ll.appendChild(li5);

      pp.appendChild(ll);
      div.appendChild(pp);
      document.body.appendChild(div);
    });

    venus.addEventListener("mouseover", () => {
      const div = document.createElement("div");
      const pp = document.createElement("p");
      const ll = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = "Name:  " + dataJson.bodies[2].name;
      const li2 = document.createElement("li");
      li2.innerHTML = "Latin Name:  " + dataJson.bodies[2].latinName;
      const li3 = document.createElement("li");
      li3.innerHTML = "temp Day " + dataJson.bodies[2].temp.day;
      const li4 = document.createElement("li");
      li4.innerHTML = "temp Night " + dataJson.bodies[2].temp.night;
      const li5 = document.createElement("li");
      li5.innerHTML = "circumference  " + dataJson.bodies[2].circumference;

      div.style.width = "250px";
      div.style.height = "300px";
      div.style.backgroundColor = "dodgerblue";
      div.style.border = "solid black";
      div.style.borderRadius = "5px";
      ll.appendChild(li1);
      ll.appendChild(li2);
      ll.appendChild(li3);
      ll.appendChild(li4);
      ll.appendChild(li5);

      pp.appendChild(ll);
      div.appendChild(pp);
      document.body.appendChild(div);
    });

    jorden.addEventListener("mouseover", () => {
      const div = document.createElement("div");
      const pp = document.createElement("p");
      const ll = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = "Name:  " + dataJson.bodies[3].name;
      const li2 = document.createElement("li");
      li2.innerHTML = "Latin Name:  " + dataJson.bodies[3].latinName;
      const li3 = document.createElement("li");
      li3.innerHTML = "temp Day " + dataJson.bodies[3].temp.day;
      const li4 = document.createElement("li");
      li4.innerHTML = "temp Night " + dataJson.bodies[3].temp.night;
      const li5 = document.createElement("li");
      li5.innerHTML = "circumference  " + dataJson.bodies[3].circumference;

      div.style.width = "250px";
      div.style.height = "300px";
      div.style.backgroundColor = "dodgerblue";
      div.style.border = "solid black";
      div.style.borderRadius = "5px";
      ll.appendChild(li1);
      ll.appendChild(li2);
      ll.appendChild(li3);
      ll.appendChild(li4);
      ll.appendChild(li5);

      pp.appendChild(ll);
      div.appendChild(pp);
      document.body.appendChild(div);
    });

    mars.addEventListener("mouseover", () => {
      const div = document.createElement("div");
      const pp = document.createElement("p");
      const ll = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = "Name:  " + dataJson.bodies[4].name;
      const li2 = document.createElement("li");
      li2.innerHTML = "Latin Name:  " + dataJson.bodies[4].latinName;
      const li3 = document.createElement("li");
      li3.innerHTML = "temp Day " + dataJson.bodies[4].temp.day;
      const li4 = document.createElement("li");
      li4.innerHTML = "temp Night " + dataJson.bodies[4].temp.night;
      const li5 = document.createElement("li");
      li5.innerHTML = "circumference  " + dataJson.bodies[4].circumference;

      div.style.width = "250px";
      div.style.height = "300px";
      div.style.backgroundColor = "dodgerblue";
      div.style.border = "solid black";
      div.style.borderRadius = "5px";
      ll.appendChild(li1);
      ll.appendChild(li2);
      ll.appendChild(li3);
      ll.appendChild(li4);
      ll.appendChild(li5);

      pp.appendChild(ll);
      div.appendChild(pp);
      document.body.appendChild(div);
    });

    jupiter.addEventListener("mouseover", () => {
      const div = document.createElement("div");
      const pp = document.createElement("p");
      const ll = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = "Name:  " + dataJson.bodies[5].name;
      const li2 = document.createElement("li");
      li2.innerHTML = "Latin Name:  " + dataJson.bodies[5].latinName;
      const li3 = document.createElement("li");
      li3.innerHTML = "temp Day " + dataJson.bodies[5].temp.day;
      const li4 = document.createElement("li");
      li4.innerHTML = "temp Night " + dataJson.bodies[5].temp.night;
      const li5 = document.createElement("li");
      li5.innerHTML = "circumference  " + dataJson.bodies[5].circumference;

      div.style.width = "250px";
      div.style.height = "300px";
      div.style.backgroundColor = "dodgerblue";
      div.style.border = "solid black";
      div.style.borderRadius = "5px";
      ll.appendChild(li1);
      ll.appendChild(li2);
      ll.appendChild(li3);
      ll.appendChild(li4);
      ll.appendChild(li5);

      pp.appendChild(ll);
      div.appendChild(pp);
      document.body.appendChild(div);
    });

    saturnus.addEventListener("mouseover", () => {
      const div = document.createElement("div");
      const pp = document.createElement("p");
      const ll = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = "Name:  " + dataJson.bodies[6].name;
      const li2 = document.createElement("li");
      li2.innerHTML = "Latin Name:  " + dataJson.bodies[6].latinName;
      const li3 = document.createElement("li");
      li3.innerHTML = "temp Day " + dataJson.bodies[6].temp.day;
      const li4 = document.createElement("li");
      li4.innerHTML = "temp Night " + dataJson.bodies[6].temp.night;
      const li5 = document.createElement("li");
      li5.innerHTML = "circumference  " + dataJson.bodies[6].circumference;

      div.style.width = "250px";
      div.style.height = "300px";
      div.style.backgroundColor = "dodgerblue";
      div.style.border = "solid black";
      div.style.borderRadius = "5px";
      ll.appendChild(li1);
      ll.appendChild(li2);
      ll.appendChild(li3);
      ll.appendChild(li4);
      ll.appendChild(li5);

      pp.appendChild(ll);
      div.appendChild(pp);
      document.body.appendChild(div);
    });

    uranus.addEventListener("mouseover", () => {
      const div = document.createElement("div");
      const pp = document.createElement("p");
      const ll = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = "Name:  " + dataJson.bodies[8].name;
      const li2 = document.createElement("li");
      li2.innerHTML = "Latin Name:  " + dataJson.bodies[8].latinName;
      const li3 = document.createElement("li");
      li3.innerHTML = "temp Day " + dataJson.bodies[8].temp.day;
      const li4 = document.createElement("li");
      li4.innerHTML = "temp Night " + dataJson.bodies[8].temp.night;
      const li5 = document.createElement("li");
      li5.innerHTML = "circumference  " + dataJson.bodies[8].circumference;

      div.style.width = "250px";
      div.style.height = "300px";
      div.style.backgroundColor = "dodgerblue";
      div.style.border = "solid black";
      div.style.borderRadius = "5px";
      ll.appendChild(li1);
      ll.appendChild(li2);
      ll.appendChild(li3);
      ll.appendChild(li4);
      ll.appendChild(li5);

      pp.appendChild(ll);
      div.appendChild(pp);
      document.body.appendChild(div);
    });
  };
  document.addEventListener("mousemove", displayPosition);
};

getKey("POST", "/keys");


/*

 if (event.x >= 100 && event.x <= 120 && event.y >= 200 && event.y <= 220) {
      solen();
    } else if (
      event.x >= 150 &&
      event.x <= 170 &&
      event.y >= 200 &&
      event.y <= 220
    ) {
      merkurius();
    }

    /*else if (event.x == 500 && event.y == 500) {
      venus();
    } else if (event.x == 700 && event.y == 700) {
      jorden;
    } else if (event.x == 900 && event.y == 900) {
      mars();
    } else if (event.x == 1100 && event.y == 1100) {
      jupyter();
    } else if (event.x == 1300 && event.y == 1300) {
      saturnus();
    } else if (event.x == 1500 && event.y == 1500) {
      uranus();
    } else if (event.x == 1700 && event.y == 1700) {
      neptunus();
    }
      */*/