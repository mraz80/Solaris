const mainPage = document.querySelector(".main");
const displayPage = document.querySelector(".info");

const solen = document.querySelector(".Sol");
const merkurius = document.querySelector(".Merkurius");
const venus = document.querySelector(".Venus");
const jorden = document.querySelector(".Jorden");
const mars = document.querySelector(".Mars");
const jupiter = document.querySelector(".Jupiter");
const saturnus = document.querySelector(".Saturnus");
const uranus = document.querySelector(".Uranus");
const neptunus = document.querySelector(".Neptunus");

const pName = document.querySelector("#Name");
const pLatinName = document.querySelector("#latinName");
const pDesc = document.querySelector("#Desc");
const pCircumference = document.querySelector("#Circumference");
const pDistance = document.querySelector("#Distance");
const pmaxTemp = document.querySelector("#maxTemp");
const pminTemp = document.querySelector("#minTemp");

const getApiKey = async (apiType, endPoint) => {
  const url =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com" + endPoint;
  const options = {
    method: apiType,
  };

  try {
    const callKey = await fetch(url, options);
    const { key } = await callKey.json();

    const myPlanets = await getPlanets("GET", "/bodies", key);
    return myPlanets;
  } catch (err) {
    console.log(err);
  }
};

const getPlanets = async (apiType, endPoint, apiKey) => {
  const url =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com" + endPoint;
  const options = {
    method: apiType,
    headers: { "x-zocom": apiKey },
  };

  try {
    const callData = await fetch(url, options);
    const dataJson = await callData.json();
    return dataJson;
  } catch (err) {
    console.log(err);
  }
};

//displayData
const showData = async (planetsNum) => {
  const planetsInfo = await getApiKey("POST", "/keys");
  console.log(planetsInfo);
  const myPlanet = planetsInfo.bodies[planetsNum];
  mainPage.style.display = "none";
  displayPage.style.display = "flex";
  pName.innerText = myPlanet.name;
  pLatinName.innerText = myPlanet.latinName;
  pDesc.innerText = myPlanet.desc;
  pCircumference.innerText = myPlanet.circumference;
  pmaxTemp.innerText = myPlanet.temp.night;
  pminTemp.innerText = myPlanet.temp.day;

  console.log(myPlanet.name);
  console.log(myPlanet.latinName);
  console.log(myPlanet.temp.day);
  console.log(myPlanet.temp.night);
  console.log(myPlanet.circumference);
  console.log(myPlanet.latinName);
  console.log(myPlanet.desc);
};

solen.addEventListener("click", () => showData(0));
merkurius.addEventListener("click", () => showData(1));
venus.addEventListener("click", () => showData(2));
jorden.addEventListener("click", () => showData(3));
mars.addEventListener("click", () => showData(4));
jupiter.addEventListener("click", () => showData(5));
saturnus.addEventListener("click", () => showData(6));
uranus.addEventListener("click", () => showData(7));
neptunus.addEventListener("click", () => showData(8));

const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
  mainPage.style.display = "grid";
  displayPage.style.display = "none";
});

solen.addEventListener("mouseover", () => {
  solen.style.width = "10.2vw";
  solen.style.height = "25.2vw";
});

solen.addEventListener("mouseout", () => {
  solen.style.width = "10vw";
  solen.style.height = "25vw";
});

merkurius.addEventListener("mouseover", () => {
  merkurius.style.width = "18px";
  merkurius.style.height = "18px";
});

merkurius.addEventListener("mouseout", () => {
  merkurius.style.width = "15px";
  merkurius.style.height = "15px";
});

venus.addEventListener("mouseover", () => {
  venus.style.width = "34px";
  venus.style.height = "34px";
});

venus.addEventListener("mouseout", () => {
  venus.style.width = "30px";
  venus.style.height = "30px";
});
jorden.addEventListener("mouseover", () => {
  jorden.style.width = "34px";
  jorden.style.height = "34px";
});

jorden.addEventListener("mouseout", () => {
  jorden.style.width = "30px";
  jorden.style.height = "30px";
});
mars.addEventListener("mouseover", () => {
  mars.style.width = "18px";
  mars.style.height = "18px";
});

mars.addEventListener("mouseout", () => {
  mars.style.width = "15px";
  mars.style.height = "15px";
});
jupiter.addEventListener("mouseover", () => {
  jupiter.style.width = "125px";
  jupiter.style.height = "125px";
});

jupiter.addEventListener("mouseout", () => {
  jupiter.style.width = "120px";
  jupiter.style.height = "120px";
});
saturnus.addEventListener("mouseover", () => {
  saturnus.style.width = "78px";
  saturnus.style.height = "78px";
});

saturnus.addEventListener("mouseout", () => {
  saturnus.style.width = "75px";
  saturnus.style.height = "75px";
});

uranus.addEventListener("mouseover", () => {
  uranus.style.width = "55px";
  uranus.style.height = "55px";
});

uranus.addEventListener("mouseout", () => {
  uranus.style.width = "50px";
  uranus.style.height = "50px";
});
neptunus.addEventListener("mouseover", () => {
  neptunus.style.width = "55px";
  neptunus.style.height = "55px";
});

neptunus.addEventListener("mouseout", () => {
  neptunus.style.width = "50px";
  neptunus.style.height = "50px";
});
const container = document.querySelector(".huvudInfo");

for (let i = 0; i < 30; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const x = Math.random() * 90;
  const y = Math.random() * 90;

  star.style.left = `${x}%`;
  star.style.top = `${y}%`;

  container.appendChild(star);
}
