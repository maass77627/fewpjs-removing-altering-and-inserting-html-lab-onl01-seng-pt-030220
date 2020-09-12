// Write your code here!
let main = document.body.querySelector('main#main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.className = "victory";
newHeader.id = "victory"
document.body.appendChild(newHeader);
newHeader.innerHTML = "is the champion";
