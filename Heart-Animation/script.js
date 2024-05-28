let bodyEl = document.body;
let randomColor = [
  "orange",
  "#ffb3ba",
  "#baffc9",
  "ffdfba",
  "#bae1ff",
  "aqua",
  "pink",
  " yellow",
  "red",
  "brown",
   "khaki"
];
bodyEl.addEventListener("mousemove", (e) => {
  let heart = document.createElement("span");
  heart.style.left = e.offsetX + "px";
  heart.style.top = e.offsetY + "px";
  const size = Math.random() * 100;
  heart.style.height = size + "px";
  heart.style.width = size + "px";
  const changeBackgroundColor =()=>{
    randInd = Math.floor(Math.random() * randomColor.length);
    bodyEl.style.backgroundColor= randomColor[randInd];
    bodyEl.style.transition='2s';
  }
  
setInterval(()=>{
 changeBackgroundColor();
},3000)
  bodyEl.appendChild(heart);
  e.offsetX = heart;
  setTimeout(() => {
    heart.remove();
  }, 3000);
});
