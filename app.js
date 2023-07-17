const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        card.setAttribute('class', "card")
        grid.appendChild(card)
       // console.log(card, i)
    }
}

console.log(cardArray)
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const card1Id = cardsChosenIds[0]
    const card2Id = cardsChosenIds[1]

    console.log("22222222222222222222")
    if (card1Id == card2Id) {
        // alert('You click on the same card')
        cards[card1Id].setAttribute('src', 'images/blank.png')
        cards[card2Id].setAttribute('src', 'images/blank.png')
    } else {
        
        if (cardsChosen[0] == cardsChosen[1]) {
            //alert('You found a match!')
            cards[card1Id].setAttribute('src', 'images/white.png')
            cards[card2Id].setAttribute('src', 'images/white.png')
            cards[card1Id].removeEventListener('click', flipCard)
            cards[card2Id].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[card1Id].setAttribute('src', 'images/blank.png')
            cards[card2Id].setAttribute('src', 'images/blank.png')
        }
    }
    result.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2){
        result.innerHTML = 'Congratulations you found them all!'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}





