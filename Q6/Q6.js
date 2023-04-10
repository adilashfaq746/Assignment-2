function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  const myObject = { name: 'sultan', age: 30 };
  saveObjectToLocalStorage('myObject', myObject);
    