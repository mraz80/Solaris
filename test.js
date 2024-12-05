import { getKey, getData } from "./api.js";
import { myname, myage } from "./api.js";
import { getItem, setItem, removeItem, clearStorage } from "./localstorage.js";

console.log(myname);
console.log(myage);
//getKey("POST", "/keys");

//getData("GET", "/bodies");

const setitemBtn = document.querySelector(".setitem");
const getitemBtn = document.querySelector(".getitem");
const removeBtn = document.querySelector(".removeitem");
const clearStorageBtn = document.querySelector(".clear");

setitemBtn.addEventListener("click", () => {
  setItem(JSON.stringify(Math.trunc(Math.random() * 10) + 1), {
    name: "Mohsin",
    age: 44,
  });
});

getitemBtn.addEventListener("click", () => {
  const val = getItem(`${JSON.stringify(Math.trunc(Math.random() * 10) + 1)}`);

  if (val !== null) {
    console.log(val.name);
    console.log(val.age);
  }
});

removeBtn.addEventListener("click", () => {
  removeItem(JSON.stringify(Math.trunc(Math.random() * 10) + 1));
});
/*
clearStorageBtn.addEventListener("click"=()=>
    {
        //getKey("POST", "/keys");  
    
    }
)
*/
clearStorageBtn.addEventListener("mouseover", () => {
  getKey("POST", "/keys");
});

clearStorageBtn.addEventListener("mouseout", () => {
  document.removeEventListener("mouseover", () => {
    //getKey("POST", "/keys");
  });
});

const tab1 = document.createElement("table");
const tblbody = document.createElement("tbody");
const tblhead = document.createElement("thead");
const xhead = document.createElement("x");
const yhead = document.createElement("y");

const displayPosition = (event) => {
  console.log(`X-Pos: ${event.x} ,Y-Pos ${event.y}`);
};

const displayData = () => {
  //console.log(`X-Pos: ${event.x} ,Y-Pos ${event.y}`);
  //const px = document.createTextNode(event.x);
  //const py = document.createTextNode(event.y);
  /*
  const div = document.createElement("div");
  const pp = document.createElement("p");

  div.style.width = "300px";
  div.style.height = "300px";
  div.style.backgroundColor = "light blue";
  div.style.color = "black";
  div.style.position = "absolute";
  pp.innerHTML = `(${event.x},${event.y})`;

  /*
  
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
    */
  // tab1.setAttribute("border", "2");
  //div.appendChild(pp);
  //div.style.top = event.x + "px";
  //div.style.left = event.y + "px";
  //document.body.appendChild(div);
};

document.addEventListener("mousemove", displayPosition);

//clearStorageBtn.addEventListener("mouseover", displayPosition);
