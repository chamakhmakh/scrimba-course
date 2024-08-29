let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

/**
 * If the sum of the two cards is less than or equal to 20, the player
 * is asked if they want to draw a new card. If the sum is exactly 21,
 * the player is congratulated for getting Blackjack. Otherwise, the
 * player is told that they are out of the game.
 **/

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1]
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
    let card = 7 

    sum += card
    renderGame()
}