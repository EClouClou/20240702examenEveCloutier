import '../css/style.css'

export default class Card {
    constructor (
        nombre,
        pixelssm,
        pixellg,
    ){
        this.nombre = nombre;

        this.pixelssm = pixelssm;
        this.pixellg = pixellg;
    }

    toCardHtml (){
        const carteHtml = document.createElement('div');
        const nombreHtml = document.createElement('p');
        const pixelssmHtml = document.createElement('p');
        const pixellgHtml = document.createElement('p');

        nombreHtml.textContent = this.nombre;
        carteHtml.className = 'bg-[#F2E8DF] place-content-center';
        pixelssmHtml.textContent = this.pixelssm;
        pixellgHtml.textContent = this.pixellg;

        carteHtml.appendChild(nombreHtml);
        carteHtml.appendChild(pixelssmHtml);
        carteHtml.appendChild(pixellgHtml);

        return carteHtml;
        }
}

const cards = [
    new Card(
        '1',
        '200px / 200px',
        '300px / 300px',
    ),
    new Card(
        '2',
        '200px / 200px',
        '300px / 300px',
    ),
    new Card(
        '3',
        '200px / 200px',
        '300px / 300px',
    ),
    new Card(
        '4',
        '200px / 200px',
        '300px / 300px',
    ),
    new Card(
        '5',
        '200px / 200px',
        '300px / 300px',
    ),
    new Card(
        '6',
        '200px / 200px',
        '300px / 300px',
    ),
    new Card(
        '7',
        '200px / 200px',
        '300px / 300px',
    ),
    new Card(
        '8',
        '200px / 200px',
        '300px / 300px',
    ),
    new Card(
        '9',
        '200px / 200px',
        '300px / 300px',
    ),
]

const cardsContainer = document.querySelector('.cards-container');

cards.forEach((card) => {
    cardsContainer.appendChild(card.toCardHtml());
})

const changeColor = document.querySelector('.change');
const 
const btnChange = document.querySelector('.change-vue');

btnVue.addEventListener('click', () => {

    cards.forEach((card) => {
        card.classList.toggle('change-vue');
        card.classList.toggle('change');
    });
})