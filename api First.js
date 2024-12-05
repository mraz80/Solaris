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

//Creating table in the div element
/*
const displayPosition = (event) => {
  console.log(`X-Pos: ${event.x} ,Y-Pos ${event.y}`);
  const px = document.createTextNode(event.x);
  const py = document.createTextNode(event.y);
  const tab1 = document.createElement("table");
  const tblbody = document.createElement("tbody");
  const tblhead = document.createElement("thead");
  const xhead = document.createElement("x");
  const yhead = document.createElement("y");

  const div = document.createElement("div");
  div.style.width = "300px";
  div.style.height = "300px";
  div.style.backgroundColor = "light blue";
  div.style.color = "black";
  div.style.position = "absolute";
  for (let i = 0; i < 1; i) {
    const row = document.createElement("tr");
    for (let j = 0; j <= 1; j++) {
      const hd = document.createElement("th");

      if (i == 0 && j == 0) {
        hd.appendChild(xhead);
      } else if (i == 0 && j == 1) {
        hd.appendChild(yhead);
      }
      row.appendChild(hd);
    }
    tblhead.appendChild(row);
    tab1.appendChild(tblhead);
  }
  for (let i = 0; i < 1; i) {
    const row = document.createElement("tr");
    for (let j = 0; j <= 1; j++) {
      const hd = document.createElement("td");

      if (i == 0 && j == 0) {
        hd.appendChild(px);
      } else if (i == 0 && j == 1) {
        hd.appendChild(py);
      }
      row.appendChild(hd);
    }
    tblbody.appendChild(row);
    tab1.appendChild(tblbody);
  }
  tab1.setAttribute("border", "2");
  div.appendChild(tab1);

  //div.style.top = event.x + "px";
  //div.style.left = event.y + "px";

  document.body.appendChild(div);
};

document.addEventListener("mousemove", displayPosition);
*/
const myname = "mOHSIN";
const myage = 34;
export { myname, myage, getData, getKey };
