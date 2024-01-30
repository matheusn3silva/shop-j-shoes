const createDiv = () => document.createElement('div')
const createImg = () => document.createElement('img')
const createName = () => document.createElement('h3')
const createType = () => document.createElement('p')

const listShoes = [
  descriptionShoe('Air Jordan 1 Mid Dutch Green', 'R$ 1.199,99'),
  descriptionShoe('Air Jordan 1 High Zoom CMFT Tropical Twist', 'R$ 1.049,00'),
  descriptionShoe('Air Jordan 1 Mid Dutch Green', 'R$ 1.350,00'),
  descriptionShoe('Air Jordan 1 Mid GS "Light Smoke Grey"', 'R$ 1.585,00'),
  descriptionShoe('Air Jordan 1 Mid SE Bright Citrus', 'R$ 949,99'),
  descriptionShoe('Air Jordan 1 Mid Grey Camo', 'R$ 999,99')
]

function descriptionShoe(name, price) {
  return {
    name: name,
    price: price
  }
}

function createShoe() {

  for(let number = 0; number < listShoes.length; number++) {
    const shoe = createDiv();
    shoe.classList.add('shoe');

    /* IMAGE SHOE */
    const imgContainer = createDiv();
    imgContainer.classList.add('img-shoe');

    const imgShoe = createImg();
    imgShoe.setAttribute('src', `./assets/image/${number + 1}.png`);
    imgShoe.setAttribute('alt', `Tênis Air Jordan`);

    imgContainer.appendChild(imgShoe)

    /* NAME SHOE */
    const nameContainer = createDiv();
    nameContainer.classList.add('name-shoe');

    const nameShoe = createName();
    nameShoe.innerText = listShoes[number].name;

    const typeShoe = createType();
    typeShoe.innerHTML = 'Tênis Air Jordan';

    nameContainer.appendChild(nameShoe);
    nameContainer.appendChild(typeShoe);
    
    /* PRICE SHOE */
    const priceContainer = createDiv();

    const priceShoe = createDiv();
    priceShoe.classList.add('price-shoe')
    priceShoe.innerText = listShoes[number].price;

    priceContainer.appendChild(priceShoe);

    shoe.appendChild(imgContainer);
    shoe.appendChild(nameContainer);
    shoe.appendChild(priceContainer);

    document.querySelector('.grid-shoes-container').appendChild(shoe)
  }

}

createShoe()


