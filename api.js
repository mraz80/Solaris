const getKey0 = (apiType, endpoint) => {
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
      getData0("GET", "/bodies", res.key);
    });
};

const getData0 = async (apiType, endpoint, key) => {
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

  div.style.width = "400px";
  div.style.height = "400px";
  div.style.backgroundColor = "dodgerblue";
  div.style.border = "solid black";
  ll.appendChild(li1);
  ll.appendChild(li2);
  ll.appendChild(li3);
  ll.appendChild(li4);
  ll.appendChild(li5);

  pp.appendChild(ll);
  div.appendChild(pp);
  document.body.appendChild(div);
};

const getKey1 = (apiType, endpoint) => {
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
      getData1("GET", "/bodies", res.key);
    });
};

const getData1 = async (apiType, endpoint, key) => {
  const url =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com" + endpoint;

  const options = {
    method: apiType,

    headers: { "x-zocom": key },
  };

  const data = await fetch(url, options);
  const dataJson = await data.json();

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

  div.style.width = "400px";
  div.style.height = "400px";
  div.style.backgroundColor = "dodgerblue";
  div.style.border = "solid black";
  ll.appendChild(li1);
  ll.appendChild(li2);
  ll.appendChild(li3);
  ll.appendChild(li4);
  ll.appendChild(li5);

  pp.appendChild(ll);
  div.appendChild(pp);
  document.body.appendChild(div);
};

export { getData0, getKey0, getData1, getKey1 };
