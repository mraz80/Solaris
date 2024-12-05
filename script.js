// Url for the post method

const getKey = (apiType, endPoint) => {
  const url =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com" + endPoint;
  const options = {
    method: apiType,
  };

  fetch(url, options)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);

      getData("Get", "/bodies", res.key);
    })
}

const getData = async (apiType, endPoint, key) => {
  
    const url =
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com"+endPoint;
    const options1 = {
      method: apiType,
      headers: { "x-zocom": key},
    };



getKey();
getData();


/*
  try {
    const response = await fetch(url, options);
    const apikey = await response.json();
    const k = apikey.key;

    getData(k);
  } catch (error) {
    console.log(error);
  }
};

    const response = await fetch(url1, options1);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
*/
//const kk = await getKey();

//console.log(kk);