let usedNumbers = [];

function submitForm() {
    let phoneNumber = document.getElementById(`phoneNumber`).value;

    if (phoneNumber.length < 12 || phoneNumber.length > 12) 
    {
        alert(`Please enter a valid phone number!`);
    } else 
    {
        alert(`This is your phone number: ` + phoneNumber);
    }
}

function generateRandomNumber() {
    // Check if all possible numbers have been used
    if (usedNumbers.length === 10) 
    {
        return;
    }

    let randomValue;

    do {
        randomValue = Math.floor(Math.random() * 10);
    } while (usedNumbers.includes(randomValue));

    usedNumbers.push(randomValue);

    document.getElementById(`randomNumberDisplay`).textContent = randomValue;
}

function enterNumber() {
    let entry = document.getElementById('randomNumberDisplay').textContent;
    let currentPhoneNumber = document.getElementById('phoneNumber').value;

    // adding numbers
    document.getElementById('phoneNumber').value = currentPhoneNumber + entry;

    // Reset the random number generator
    usedNumbers = [];
    document.getElementById('randomNumberDisplay').textContent = '';
}

function moveButton() {
    let button = document.getElementById('enterButton');

    function animate() {
        // Calculate new position (random values between 0 and window width/height)
        let newX = Math.random() * (window.innerWidth - button.clientWidth);
        let newY = Math.random() * (window.innerHeight - button.clientHeight);

        // Apply new position
        button.style.left = newX + 'px';
        button.style.top = newY + 'px';

        setTimeout(() => {
            // Request the next animation frame after the delay
            requestAnimationFrame(animate);
        }, 900);
    }

    // Start the animation loop
    animate();
}

document.addEventListener('DOMContentLoaded', function() {
    moveButton();
});
