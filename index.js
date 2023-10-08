// Write your code here!
document.getElementById('main').remove();

const newHeader = document.createElement('h1')
newHeader.id = "victory"

const champ = document.createElement('p')
newHeader.innerHTML = "Your-Name is the champion"

newHeader.appendChild(champ)