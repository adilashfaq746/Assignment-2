function getObjectFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }
  const myObject = getObjectFromLocalStorage('myObject');
  console.log(myObject);
    