// References for the various dynamic element 
const counterElement = document.getElementById('counter')
const decElement = document.getElementById('-')
const incElement = document.getElementById('+')
const likeButtonElement = document.getElementById('<3')
const likeListElement = document.getElementById('likes')
const pauseButtonElement = document.getElementById('pause')
let isPaused = false

let likeHash = {}
let timeCountingCounter = counterElement.innerText

function checkHash (key) {
  isNaN(likeHash[key]) ? likeHash[key] = 1 : likeHash[key]++
}

const timerCounter = (function() {
    counterElement.innerText = `${timeCountingCounter++}`   
})();

const likeCounter = function() {
  let key = counterElement.innerText
  checkHash(key)
  let li = document.getElementById(`like-${key}`)
  if (li) {
    li.innerText = `${key} has ${likeHash[key]} ❤️ `
  } else {
    let li = document.createElement("li")
    li.innerText = `${key} has ${likeHash[key]} ❤️ `
    li.setAttribute("id", `like-${key}`)
    likeListElement.appendChild(li)
  }
}

const timerFunc = e => setInterval((function() {
    if (!isPaused) {
    counterElement.innerText = `${timeCountingCounter++}`   
}}), 1000)

const incCounter = function() {
    counterElement.innerText = `${timeCountingCounter++}`
}
const decCounter = function() {
    counterElement.innerText = `${timeCountingCounter--}`
}

// const toggleAttributes(docElementsArray) {
//   docElementsArray.forEach (elem => elem.disabled ? elem.disabled = false : elem.disabled = true )
// }c

const pauseDisableResume = function () {
    
  incElement.disabled ? incElement.disabled = false : incElement.disabled = true
  decElement.disabled ? decElement.disabled = false : decElement.disabled = true
  likeButtonElement.disabled ? likeButtonElement.disabled = false : likeButtonElement.disabled = true
  isPaused ? isPaused = false : isPaused = true
  pauseButtonElement.innerText === 'pause' ? pauseButtonElement.innerText = 'resume' : pauseButtonElement.innerText = 'pause'
}
incElement.addEventListener('click', incCounter)
decElement.addEventListener('click', decCounter)
likeButtonElement.addEventListener('click', likeCounter)
pauseButtonElement.addEventListener('click', pauseDisableResume)
timerFunc();

// const decElement = document.getElementById('-')
// const incElement = document.getElementById('+')
// const counterElement = document.getElementById('timer')
// let timerCounter = 0
// const timerCounter = (function() {
//     // console.log('hi')
//     counterElement.innerText = `${timerCounter++}`   
// })();


// const counterElement = document.getElementById('counter')

// const timerFunc = e => setInterval((function() {
//     // console.log('hi')
//     counterElement.innerText = `${timerCounter++}`   
// }), 1000)

// let counter = counterElement.innerText
// const incCounter = function() {
//     counterElement.innerText = `${counter++}`
// }
// const decCounter = function() {
//     counterElement.innerText = `${counter--}`
// }


// // const chgCounter = function(event) {
// //     if (event.target.id === incElement.id) {
// //         counterElement.innerText = `${counter++}`
// //     } else if (event.target.id === decElement.id) {
// //         counterElement.innerText = `${counter--}`
// //     }
// // }
// // const we = function() {console.log(thi)}

// // window.addEventListener('click', we)
// document.addEventListener('click', incCounter)
// document.addEventListener('click', decCounter)
// document.addEventListener('DOMContentLoaded', timerFunc)

