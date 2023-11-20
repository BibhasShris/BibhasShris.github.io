const newBtn = document.querySelector(`#js-new-quote`);
const imageElement = document.getElementById('js-random-image');
const imageElement2 = document.getElementById('js-random-image2');
const imageElement3 = document.getElementById('js-random-image3');
const imageElement4 = document.getElementById('js-random-image4');
newBtn.addEventListener("click", getQuote);

const questionTxt = document.querySelector('#js-quote-text');

// this is the endpoint for the API that we want to get a reponse from
const endpoint = `https://api.pokemontcg.io/v2/cards`;

async function getQuote()
{
 // try -> tries something; if it returns an error, it puts us into the catch block
    try{
        // Show loading state
        questionTxt.textContent = 'Loading...';
        const response = await fetch(endpoint);
            if(!response.ok)
            {
                throw Error(response.statusText);
            }
            const json = await response.json();
    
        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        console.log(json);
        console.log(json.data);
        
        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        const randomIndex = Math.floor(Math.random() * 100);
        displayImage(json.data[randomIndex].images.large, imageElement);
        displayQuote(json.data[randomIndex].flavorText);
        const randomIndex2 = Math.floor(Math.random() * 100);
        displayImage(json.data[randomIndex2].images.large, imageElement2);
        const randomIndex3 = Math.floor(Math.random() * 100);
        displayImage(json.data[randomIndex3].images.large, imageElement3);
        const randomIndex4 = Math.floor(Math.random() * 100);
        displayImage(json.data[randomIndex4].images.large, imageElement4);
        

    }
    catch(err){
        console.log(err);
        alert(`failed to fetch new quote`);
    }
}

// this function shows the question
function displayImage(imageUrl, imageElementToUpdate) {
    imageElementToUpdate.src = imageUrl;
    imageElementToUpdate.alt = "Artwork Image"; 
}

function displayQuote(question){
    questionTxt.textContent = question;
}


// we run getQuote once when the script first loads to populate a question
// when the page is loading
getQuote();