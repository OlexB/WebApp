let coin = document.querySelector('.coin-cost')
let parsedCoin = parseFloat(coin.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClikerCost = parseFloat(clickerCost.innerHTML)

function incrementCoin() {
    parsedCoin += 1
    coin.innerHTML = parsedCoin
}

function buyClicker() {
    if (parsedCoin >= parsedClikerCost) {
        parsedCoin -= parsedClikerCost
        coin.innerHTML = parsedCoin
    }
}