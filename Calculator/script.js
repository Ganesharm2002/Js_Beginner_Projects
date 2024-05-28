let string = "";
const display =document.querySelector('#display');
const btns =document.querySelectorAll('.buttons button');
Array.from(btns).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML === "="){
      string = eval(string);
      display.value = string;
    }
    else if(e.target.innerHTML === "DEL"){
      string = string.substring(0, string.length-1)
      display.value = string;
    } 
    else if(e.target.innerHTML === "AC"){
      string ="";
      display.value ="";
    }
    else{
      string += e.target.innerHTML;
      display.value = string;
    }  
      
  })
})