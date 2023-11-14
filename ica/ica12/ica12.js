const newBtn = document.querySelector(`#js-new-quote`);
const answerBtn = document.querySelector(`#js-answer-text`);
newBtn.addEventListener("click", getQuote);
answerBtn.addEventListener(`click`, getAnswer);

const endpoint = `https://trivia.cyberwisp.com/getrandomchristmasquestion`;

let answer = '';

async function getQuote()
{
    // console.log(`test`);

    try{
        const response = await fetch(endpoint);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        const json = await response.json();
        // console.log(json);
        displayQuote(json[`question`]);
        answer = json[`answer`];

    }
    catch(err){
        console.log(err);
        alert(`failed to fetch new quote`);
    }
}

function displayQuote(question){
    const questionTxt=document.querySelector(`#js-quote-text`);
    questionTxt.textContent = question;
}

function displayAnswer(answer)
{
    const answerTxt = document.querySelector(`#js-answer-text`);
    answerTxt.textContent = ``;
}

getQuote();