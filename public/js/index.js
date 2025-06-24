"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

// async function getRandomImage() {
//     const client_id = "V7skbSnJJFvihp_bDQ4B_6tQBRKg6jsDIio6zNxMnjs";
//     const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
//     try {
//         const response = await fetch(endpoint);
//         const returnedData = await response.json()
//         console.log(returnedData)
//     } catch (error) {
//         console.error(error)
//     }
// }

async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();


/* const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },

    {
        quote: "Doh!",
        author: "Homer Simpson",
    },

    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    },
    
        {
        quote: "I think of art as the highest level of creativity.",
        author: "David Rockefeller",
    },

        {
        quote: "The worst enemy to creativity is self-doubt.",
        author: "Sylvia Plath",
    },

        {
        quote: "A true artist is not one who is inspired, but one who inspires others.",
        author: "Salvador Dali",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000); */