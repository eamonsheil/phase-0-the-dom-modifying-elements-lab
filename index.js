const body = document.querySelector('body');

const main = document.getElementById('main');
console.log(main)
main.remove();

const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Eamon is the champion";


body.append(newHeader);