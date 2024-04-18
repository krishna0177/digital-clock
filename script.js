const clock = document.querySelector('#clock');

setInterval(() => {
     let date = new Date();
     clock.innerHTML = date.toLocaleTimeString()
     

}, 1000);


let stl = document.querySelector("#clock")
stl.style.color = 'black'
stl.style.fontSize = '30px'