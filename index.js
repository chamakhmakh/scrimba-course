let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment () {
    count += 1
    countEl.textContent = count  // count the number of click
}

function save () {
    let countStr = count + " - "
    saveEl.textContent += countStr  // textContent save the space

    count = 0
    countEl.textContent = 0  // renisialization for the next count
}

let myPoints = 3

function add3Points () {
    myPoints += 3
}

function remove1Points () {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()



console.log(myPoints)
console.log("My points: " + 5 + 9)