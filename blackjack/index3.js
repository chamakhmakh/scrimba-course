let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Farouk",
    chips: 145
}
let playerEl = document.getElementById("player-el").textContent = player.name + ": $" + player.chips

/**
 * Returns a random number between 1 and 13, with 1 being represented as 11
 * and numbers > 10 being represented as 10
 * returns number a random number between 1 and 13
 */
function getRandomCard() {
    let randomCard = Math.floor(Math.random() *13) + 1

    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}
/**
 * Starts a new round of Blackjack.
 * Sets isAlive to true, deals two new cards, and updates the message and cards elements.
 */
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

/**
 * If the sum of the two cards is less than or equal to 20, the player
 * is asked if they want to draw a new card. If the sum is exactly 21,
 * the player is congratulated for getting Blackjack. Otherwise, the
 * player is told that they are out of the game.
 **/

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + "-"
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message
}

/**
 * Increases the sum by the value of the new card and updates the 
 * message and cards elements. If the player has Blackjack or is 
 * out of the game, the message and elements are updated accordingly.
 */

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()        

        sum += card
        cards.push(card)
        renderGame()
    }
}