const solen = document.querySelector(".Solen");
const merkurius = document.querySelector(".Merkurius");
const venus = document.querySelector(".Venus");
const jorden = document.querySelector(".Jorden");
const mars = document.querySelector(".Mars");
const jupiter = document.querySelector(".Jupiter");
const saturnus = document.querySelector(".Saturnus");
const uranus = document.querySelector(".Uranus");
const neptunus = document.querySelector(".Neptunus");

const img = document.getElementById("myimg");

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

  // merkurius.addEventListener("mouseover", (event) => {});

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

  const merkurius = () => {
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
  };

  const venus = () => {
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
  };

  const jorden = () => {
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
  };

  const mars = () => {
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
  };

  const jupyter = () => {
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
  };

  const saturnus = () => {
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
  };

  const uranus = () => {
    const div = document.createElement("div");
    const pp = document.createElement("p");
    const ll = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.innerHTML = "Name:  " + dataJson.bodies[7].name;
    const li2 = document.createElement("li");
    li2.innerHTML = "Latin Name:  " + dataJson.bodies[7].latinName;
    const li3 = document.createElement("li");
    li3.innerHTML = "temp Day " + dataJson.bodies[7].temp.day;
    const li4 = document.createElement("li");
    li4.innerHTML = "temp Night " + dataJson.bodies[7].temp.night;
    const li5 = document.createElement("li");
    li5.innerHTML = "circumference  " + dataJson.bodies[7].circumference;

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
  };

  const neptunus = () => {
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
  };

  merkurius.addEventListener("click", merkurius);

  const displayPosition = (event) => {
    console.log(`X-Pos: ${event.x} ,Y-Pos ${event.y}`);
  };

  document.addEventListener("mousemove", displayPosition);
};

getKey("POST", "/keys");
