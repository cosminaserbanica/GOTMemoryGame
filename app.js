document.addEventListener('DOMContentLoaded', () => {


  //card options

  const cardArray = [
    {
      name: 'aria',
      img: 'images/aria.png'
    },
    {
      name: 'aria',
      img: 'images/aria.png'
    },
    {
      name: 'cersei',
      img: 'images/cersei.png'
    },
    {
      name: 'cersei',
      img: 'images/cersei.png'
    },
    {
      name: 'danny',
      img: 'images/danny.png'
    },
    {
      name: 'danny',
      img: 'images/danny.png'
    },
    {
      name: 'jamie',
      img: 'images/jamie.png'
    },
    {
      name: 'jamie',
      img: 'images/jamie.png'
    },
    {
      name: 'ned',
      img: 'images/ned.png'
    },
    {
      name: 'ned',
      img: 'images/ned.png'
    },
    {
      name: 'snow',
      img: 'images/snow.png'
    },
    {
      name: 'snow',
      img: 'images/snow.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []
  //create game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/throne.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Winter is coming! You're getting close!")
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cardsWon.push(cardsChosen)
    } else {      
      cards[optionOneId].setAttribute('src', 'images/throne.png')
      cards[optionTwoId].setAttribute('src', 'images/throne.png')
      alert("You know nothing, Jon Snow!")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'You won. Good. Now go win again.'
    }
  }

  //flip your card
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}





  createBoard()



})