
/*  document.getElementById('purple').onclick = partyPurple
 document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('lightyellow').onclick = yellowLight
document.getElementById('pink').onclick = pinkLight
document.getElementById('rose').onclick = roseLight
document.getElementById('orange').onclick = orangeLight
document.getElementById('limegreen').onclick = limeLight
document.getElementById('red').onclick = redLight
document.getElementById('indianred').onclick = indianRedLight
document.getElementById('turquoise').onclick = turquoiseLight */

  document.querySelector('#green').addEventListener('mouseenter', partyGreen)
  document.querySelector('#purple').addEventListener('mouseenter', partyPurple)
  document.querySelector('#blue').addEventListener('mouseenter', partyBlue)
  document.querySelector('#lightyellow').addEventListener('mouseenter', yellowLight)
  document.querySelector('#pink').addEventListener('mouseenter', pinkLight)
  document.querySelector('#rose').addEventListener('mouseenter', roseLight)
  document.querySelector('#orange').addEventListener('mouseenter', orangeLight)
  document.querySelector('#limegreen').addEventListener('mouseenter', limeLight)
  document.querySelector('#red').addEventListener('mouseenter', redLight)
  document.querySelector('#indianred').addEventListener('mouseenter', indianRedLight)
  document.querySelector('#turquoise').addEventListener('mouseenter', turquoiseLight)
  document.querySelector('#cornflowerblue').addEventListener('mouseenter', cornFlowerBlueLight)
  document.querySelector('#cantaloupe').addEventListener('mouseenter', cantaloupeLight)
  document.querySelector('#electricblue').addEventListener('mouseenter', electricBlueLight)
  document.querySelector('#darkslateblue').addEventListener('mouseenter', darkSlateBlueLight)


function darkSlateBlueLight(){
  document.querySelector('body').style.backgroundColor = '#483d8b'
  document.querySelector('body').style.color = 'black'
}
  

function electricBlueLight(){
  document.querySelector('body').style.backgroundColor = ' #9AFEFF '
  document.querySelector('body').style.color = 'black'
  
}

function cantaloupeLight(){
  document.querySelector('body').style.backgroundColor = '#FFA62F'
    document.querySelector('body').style.color = 'black'
  
}
  
  function cornFlowerBlueLight(){
    document.querySelector('body').style.backgroundColor = '#6495ed'
    document.querySelector('body').style.color = 'black'
  }
function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
} 

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'black'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function yellowLight(){
  document.querySelector('body').style.backgroundColor = 'rgb(255, 255, 180)'
  document.querySelector('body').style.color = 'black'

}

function pinkLight(){
  document.querySelector('body').style.backgroundColor = 'rgb(247, 149, 240)'
  document.querySelector('body').style.color = 'black'
}

function roseLight(){
  document.querySelector('body').style.backgroundColor = 'rgb(253, 103, 89)'
  document.querySelector('body').style.color = 'black'
}

function orangeLight(){
  document.querySelector('body').style.backgroundColor = 'orange'
  document.querySelector('body').style.color = 'black'
} 

function redLight(){
  document.querySelector('body').style.backgroundColor = 'red'
  document.querySelector('body').style.color = 'black'
} 

function limeLight(){
  document.querySelector('body').style.backgroundColor = 'limegreen'
  document.querySelector('body').style.color = 'black'
} 

function indianRedLight(){
  document.querySelector('body').style.backgroundColor = 'indianred'
  document.querySelector('body').style.color = 'black'
}

function turquoiseLight(){
  document.querySelector('body').style.backgroundColor = '#40e0d0	'
  document.querySelector('body').style.color = 'black'
}