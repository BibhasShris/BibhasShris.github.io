const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
/* Declaring the array of image filenames */
const image=["images/scene1.jpg", "images/scene2.jpg", "images/scene3.jpg", "images/scene4.png", "images/scene5.jpg"];

/* Declaring the alternative text for each image file */
const alternateName={
    "images/scene1.jpg":"park",
    "images/scene2.jpg":"NC",
    "images/scene3.jpg":"road work",
    "images/scene4.jpg":"pink",
    "images/scene5.jpg":"Intro MV"
};

/* Looping through images */

for(let i=0; i<image.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image[i]);
    newImage.setAttribute('alt', alternateName[image[i]]);
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', ()=> {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
      });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class'); // Get the current class attribute of the button
  
    if (currentClass === 'dark') {
      // If the current class is 'dark', change it to 'light'
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
      // If the current class is not 'dark', change it back to 'dark'
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  });
  
