let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

function add () {
    let num1 = Number(num1El.value)
    let num2 = Number(num2El.value)

    let sum = num1 + num2

    document.getElementById("sum-el").textContent = "Sum: " + sum
}

function subtract () {
    let num1 = Number(num1El.value)
    let num2 = Number(num2El.value)

    let sum = num1 - num2

    document.getElementById("sum-el").textContent = "Sum: " + sum
}


function divide () {
    let num1 = Number(num1El.value)
    let num2 = Number(num2El.value)

    let sum = num1 / num2

    document.getElementById("sum-el").textContent = "Sum: " + sum
}


function multiply () {
    let num1 = Number(num1El.value)
    let num2 = Number(num2El.value)

    let sum = num1 * num2

    document.getElementById("sum-el").textContent = "Sum: " + sum
}

function reset () {
    num1El.value = ""
    num2El.value = ""

    document.getElementById("sum-el").textContent = "Sum: "
}
