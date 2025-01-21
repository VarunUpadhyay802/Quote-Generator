
let quote_text = "";
let quote_author = "";
const container = document.querySelector("#quote-container");
const loader = document.querySelector(".loader");
const getQuotes = async () => {
    loader.classList.remove("hidden");
    container.classList.add("hidden");

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
        quote_text = result?.content || "No quote available";
        quote_author = result?.originator?.name || "Unknown author";

        document.getElementById('quote').innerHTML = quote_text ;
        document.getElementById('author').innerHTML = quote_author;

        loader.classList.add("hidden");
        container.classList.remove("hidden");

    } catch (error) {
        console.error(error);

        loader.classList.add("hidden");
        container.classList.remove("hidden");
    }

}

getQuotes();


//clicking on a new quote should trigger the api again
const newQuoteBtn = document.getElementById('new-quote');
newQuoteBtn.addEventListener("click", () => {
    getQuotes();
})



//clicking on the twitter button
const twitter = document.getElementById('twitter');
twitter.addEventListener("click",()=>{
    sendToTwitter();
})
const sendToTwitter = () =>{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote_text} - ${quote_author}`;
    window.open(twitterUrl , '_blank');
}

