document.querySelector('#trans-code').addEventListener('click', getRandomInt)


let randNumber = 34

function getRandomInt(randNumber) {
    
    document.querySelector('#resultcode').textContent = Math.random(randNumber)
  
}
