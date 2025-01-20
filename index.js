
let quote = "";
let quote_author = "";
const getQuotes = async () => {
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
    } catch (error) {
        console.error(error);
    }

}

getQuotes();


