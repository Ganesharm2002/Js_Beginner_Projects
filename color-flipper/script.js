let redBtn =document.querySelector('#red-btn');
let greenBtn =document.querySelector('#green-btn');
let blueBtn =document.querySelector('#blue-btn');
let randomColor = ['purple','grey','black','white','aqua','pink']
let randomBtn =document.querySelector('#random-btn');
const changeRed = ()=>{
    document.body.style.backgroundColor = "red";
    document.body.style.transition = "0.7s";
}
const changeGreen = ()=>{
    document.body.style.backgroundColor = "green"
    document.body.style.transition = "0.7s";
}
const changeBlue = ()=> {
    document.body.style.backgroundColor = "blue";
    document.body.style.transition = "0.7s";
}
let generateRandomColor= ()=>{

    let randIndex =Math.floor(Math.random()*randomColor.length);
    document.body.style.backgroundColor = randomColor[randIndex];
    document.body.style.transition = "0.7s";
}
redBtn.addEventListener('click',changeRed);
greenBtn.addEventListener('click',changeGreen);
blueBtn.addEventListener('click', changeBlue);
randomBtn.addEventListener('click',generateRandomColor);