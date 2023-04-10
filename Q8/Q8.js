function saveObjectPropertiesToLocalStorage(obj) {
    for (const prop in obj) {
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
  }
  function getObjectFromLocalStorageKeys(keys) {
    const obj = {};
    for (const key of keys) {
      obj[key] = JSON.parse(localStorage.getItem(key));
    }
    return obj;
  }
  const myObject = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
  };
  
  saveObjectPropertiesToLocalStorage(myObject);
  const keys = ['name', 'age', 'email'];
  const retrievedObject = getObjectFromLocalStorageKeys(keys);
  console.log(retrievedObject);
        