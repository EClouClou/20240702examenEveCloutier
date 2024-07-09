import '../css/style.css'

export default class Card {
    constructor (
        nombre,
        pixelssm,
        pixellg,
    ){
        this.nombre = nombre;

        this.pixelssm = pixelssm;
        this.pixelslg = pixellg;
    }

    toCardHtml (){
        const carteHtml = document.createElement('div');
        const nombreHtml = document.createElement('p');
        const pixelssmHtml = document.createElement('p');
        const pixelslgHtml = document.createElement('p');

        nombreHtml.textContent = this.nombre;
        nombreHtml.classList = 'pb-3'
        carteHtml.classList = 'carte bg-black h-64 place-content-center rounded-md';
        pixelssmHtml.textContent = this.pixelssm;
        pixelssmHtml.classList = 'pixelssm sm:block lg:hidden';
        pixelslgHtml.textContent = this.pixelslg;
        pixelslgHtml.classList = 'pixelslg hidden lg:block';

        carteHtml.appendChild(nombreHtml);
        carteHtml.appendChild(pixelssmHtml);
        carteHtml.appendChild(pixelslgHtml);


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

const btnChange = document.querySelector('.change-vue');
const body = document.querySelector('body');
btnChange.addEventListener('click', () => {

    btnChange.classList.toggle('bg-pink');
    btnChange.classList.toggle('bg-black');
    body.classList.toggle('bg-black');
    body.classList.toggle('bg-green');  

    const cards = document.querySelectorAll('.carte');
    cards.forEach((card) => {
            card.classList.toggle('bg-pink');
            card.classList.toggle('bg-noir');
        });
});