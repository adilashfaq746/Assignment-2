function addParagraph(text) {
    const newParagraph = document.createElement("p");  
    const content = document.createTextNode(text);    
    newParagraph.appendChild(content);                
    document.body.appendChild(newParagraph);          
  }
  