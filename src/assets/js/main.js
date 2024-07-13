import '../css/style.css'

export default class Card {
    constructor (
        nombre,
        pixelssm,
        pixellg,
        couleur,
    ){
        this.nombre = nombre;
        this.pixelssm = pixelssm;
        this.pixelslg = pixellg;
        this.couleur = couleur;

    }

    toCardHtml (){
        const carteHtml = document.createElement('div');
        const nombreHtml = document.createElement('p');
        const pixelssmHtml = document.createElement('p');
        const pixelslgHtml = document.createElement('p');
        const couleurHtml = document.createElement('p');

        nombreHtml.textContent = this.nombre;
        nombreHtml.classList = 'pb-3'
        carteHtml.classList = 'carte bg-black h-64 place-content-center rounded-md';
        pixelssmHtml.textContent = this.pixelssm;
        pixelssmHtml.classList = 'pixelssm sm:block lg:hidden';
        pixelslgHtml.textContent = this.pixelslg;
        pixelslgHtml.classList = 'pixelslg hidden lg:block';
        couleurHtml.textContent = this.couleur;

        carteHtml.appendChild(nombreHtml);
        carteHtml.appendChild(pixelssmHtml);
        carteHtml.appendChild(pixelslgHtml);
        carteHtml.appendChild(couleurHtml);


        return carteHtml;
        //indentation -0.5
    }
}

/**
 * @type {Card}
 */
const cards = [
    new Card(
        '1',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
    new Card(
        '2',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
    new Card(
        '3',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
    new Card(
        '4',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
    new Card(
        '5',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
    new Card(
        '6',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
    new Card(
        '7',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
    new Card(
        '8',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
    new Card(
        '9',
        '200px / 200px',
        '300px / 300px',
        'bleu',
    ),
]

const cardsContainer = document.querySelector('.cards-container');

cards.forEach((card) => {
    cardsContainer.appendChild(card.toCardHtml());
})

const btnEfface = document.querySelector('.effacer');
btnEfface.addEventListener('click', () => {

    cardsContainer.classList.toggle('hidden');
})

// Pas le bon type.
/**
 * @type {HTMLElement}
 */
const btnChange = document.querySelector('.change-vue');
const body = document.querySelector('body');
btnChange.addEventListener('click', () => {

    btnChange.classList.toggle('bg-pink');
    btnChange.classList.toggle('bg-black');
    body.classList.toggle('bg-black');
    body.classList.toggle('bg-green');  

    // Pas le bon type. Aucun point ne sera gagné pour le Jsdoc. Il est érroné et peu nombreux
    /**
     * @type {NodeList}
     */
    const cards = document.querySelectorAll('.carte');
    cards.forEach((card) => {
        card.classList.toggle('bg-pink');
        card.classList.toggle('bg-noir');
        //indentation -0.5
    });
});