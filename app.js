const middle = document.getElementById('text');
const top = document.getElementById('top');
const bottom = document.getElementById('bottom');
const myButton = document.getElementById('my-button');
const myInput = document.getElementById('my-input');
const pink = document.getElementById('pink');
const lightGreen = document.getElementById('light-green');
const lightBlue = document.getElementById('light-blue');
const pronounInput = document.getElementById('pronoun-input');
const pronoun = document.getElementById('pronoun');


myButton.addEventListener ('click', () => {
    const userTyped = myInput.value;
    text.textContent = userTyped;
    text.style.color = 'pink';   
})

pink.addEventListener ('click', () => {
    top.style.backgroundColor = 'pink';  
    bottom.style.backgroundColor = 'pink'; 
    bottom.style.borderBottomRightRadius = "25px";
    bottom.style.borderBottomLeftRadius = "25px"; 
    top.style.borderTopLeftRadius = "25px";
    top.style.borderTopRightRadius = "25px";
})

lightBlue.addEventListener ('click', () => {
    top.style.backgroundColor = 'lightBlue';  
    bottom.style.backgroundColor = 'lightBlue';
    bottom.style.borderBottomRightRadius = "25px";
    bottom.style.borderBottomLeftRadius = "25px"; 
    top.style.borderTopLeftRadius = "25px";
    top.style.borderTopRightRadius = "25px";
})

lightGreen.addEventListener ('click', () => {
    top.style.backgroundColor = 'lightGreen';  
    bottom.style.backgroundColor = 'lightGreen';
    bottom.style.borderBottomRightRadius = "25px";
    bottom.style.borderBottomLeftRadius = "25px"; 
    top.style.borderTopLeftRadius = "25px";
    top.style.borderTopRightRadius = "25px";
})

pronoun.addEventListener ('click', () => {
    
})