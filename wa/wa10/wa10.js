// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

// let storyText="It was 94 fahrenheit outside, so insertx: went for a walk. When they got to inserty:, they stared in horror for a few moments, then insertz:. Bob saw the whole thing, but was not surprised — insertx: weighs 300 pounds, and it was a hot day."
let storyText=`As Tyler reached for the last piece of the $100 inserty:, Tyler's insertx: suddenly started talking. "You really should share", he said. Tyler was shocked and insertz: the inserty:. Then he said, "Just kidding, I can't eat inserty:!"`;
const insertx=["dog", "cat", "hamster"];
const inserty=["chocolate", "cookie", "brownie"];
const insertz=["handed him", "dropped", "screamed as he threw"];

// const insertx=["Willy the Goblin", "Big Daddy", "Father Christmas"];
// const inserty=["the soup kitchen", "Disneyland", "the White House"];
// const insertz=["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  const xItem= randomValueFromArray(insertx);
  const yItem= randomValueFromArray(inserty);
  const zItem= randomValueFromArray(insertz);  

  newStory=newStory.replaceAll('insertx:', xItem);
  newStory=newStory.replaceAll('inserty:', yItem);
  newStory=newStory.replaceAll('insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Tyler", name);
  }

  if(document.getElementById("uk").checked) {
    const currency = Math.round(100*0.81);
    newStory = newStory.replaceAll("$100", `£${currency}`);
    // const weight = Math.round(300/14);
    // newStory = newStory.replaceAll("300 pounds", weight)
    // const temperature =  Math.round((94-32)*(5/9));
    // newStory = newStory.replace("94 fahrenheit", temperature)

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}