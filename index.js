const deg = 6

const hour = document.querySelector("#hr")
const minute = document.querySelector("#mn")
const second = document.querySelector("#sc")


setInterval(() => {
  let now = new Date()
  let hh = now.getHours() * 30
  let mm = now.getMinutes() * deg
  let ss = now.getSeconds() * deg
  console.log('tim')
  hour.style.transform = `rotateZ(${(hh+(mm/12))}deg)`
  minute.style.transform = `rotateZ(${mm}deg)`
  second.style.transform = `rotateZ(${ss}deg)`
}, 1000)

