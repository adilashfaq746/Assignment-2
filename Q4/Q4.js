function addListItem(text) {
    const list = document.querySelector("ul");  
    const newItem = document.createElement("li");
    newItem.textContent = text;
      list.appendChild(newItem);
  }
  addListItem("New item text");

