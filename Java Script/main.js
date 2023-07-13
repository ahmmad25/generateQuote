var quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "It's not what happens to you, but how you react to it that matters.",
        author: "Epictetus"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying",
        author: " Oscar Wilde, The Happy Prince and Other Stories"
    }

];

var quoteContainer = document.getElementById("quote");
var newQuoteButton = document.getElementById("new-quote");

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    var { quote, author } = generateQuote();
    quoteContainer.innerHTML = `"${quote}"<br>- ${author}`;
}

    newQuoteButton.addEventListener("click", displayQuote);
    

displayQuote(); 
