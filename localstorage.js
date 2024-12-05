//application

//clear storage
//window.localStorage.clear();
//get storage item
//window.localStorage.getItem();
//set storage item
//window.localStorage.setItem();
// remove storage item
//window.localStorage.removeItem();
// Key and values
// key position of the key
// we will take save data, bring save data and delete save data

//window.localStorage.key();

const setItem = (key, value) => {
  /* JSON HAS TWO FUNCTION  USED ONE IS CALLED 
JSON.parse(localStorage.getItem(key))
JSON.stringify()
*/
  //JSON.parse();
  //JSON.stringify();
  window.localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};

const removeItem = (key) => {
  window.localStorage.removeItem(key);
};

const clearStorage = () => {
  window.localStorage.clear();
};
export { setItem, getItem, removeItem, clearStorage };
