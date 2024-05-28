let quote = document.querySelector("#quote");
let generateQuote = document.querySelector("#generate-quote");
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Be yourself; everyone else is already taken.",
  "Strive not to be a success, but rather to be of value.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only way to do great work is to love what you do.",
  "Be the change that you wish to see in the world.",
];
let generator = () => {
    let randQuoteIndex = Math.floor((Math.random()* quotes.length));
    quote.textContent = quotes[randQuoteIndex]; 
    quote.style.transition = "0.7s";
};
generateQuote.addEventListener("click", generator);
