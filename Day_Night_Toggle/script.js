document.addEventListener('DOMContentLoaded', ()=>{
    const bodyEl = document.querySelector('body');
    const checkBox = document.querySelector('#dark-mode');
    const toggleMode = ()=>{
        if(checkBox.checked){
            bodyEl.style.backgroundColor = "black";
            localStorage.setItem('darkMode', 'enabled');
        }
        else{
            bodyEl.style.backgroundColor = "white";
            localStorage.removeItem('darkMode');
        }
    }
    const checkDarkMode = ()=>{
       const dark = localStorage.getItem('darkMode');
        if(dark =="enabled"){
            checkBox.checked =true;
            toggleMode();
        }
    }
    checkDarkMode();
    toggleMode();
    checkBox.addEventListener('change',toggleMode);
})