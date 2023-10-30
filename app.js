const board = document.querySelector('#board')
const colors = ['#15F4EE','#39FF14','#BF00FF','#FFF01F','#FE59C2','#CCCCCC','#FF1818','#FF760D','#3A68E8']
const SquaresNumbers = 1200
for (let i = 0; i < SquaresNumbers;i++){
    const square = document.createElement('div')
    square.classList.add('square')

   
    square.addEventListener('touchstart',()=>{
        setColor(square)
    })

  
    square.addEventListener('touchend',()=>{
        removeColor(square)
    })
    


    board.append(square)

}
function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`
}
function getRandomColor() {
   const index =  Math.floor(Math.random()*colors.length)
   return colors[index]

}




