
let quote = "";
let quote_author = "";
const container = document.querySelector("#quote-container");
const loader = document.querySelector(".loader");
const getQuotes = async () => {
    //start loader
    loader.style.display = 'block'
    container.style.display = 'none'

    const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9a7e95866fmshe6876598d2a9944p1271acjsnbd14936b0dba',
            'x-rapidapi-host': 'quotes15.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse response as JSON
        quoteText = result?.content || "No quote available";
        quote_author = result?.originator?.name || "Unknown author";

        const quote = document.getElementById('quote');
        quote.innerHTML = quoteText ;
        const author = document.getElementById('author');
        author.innerHTML = quote_author ;
        container.style.display = 'block'
        loader.style.display = 'none'
        
    } catch (error) {
        console.error(error);
        loader.style.display = 'none'
        container.style.display = 'block'
    }

}

getQuotes();


//clicking on a new quote should trigger the api again
const newQuoteBtn = document.getElementById('new-quote');
newQuoteBtn.addEventListener("click",()=>{
    getQuotes();

})

