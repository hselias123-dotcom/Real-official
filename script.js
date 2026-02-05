// Handle Yes / No button clicks
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(() => {
            showYayThenHeart();
        });
    } else if (option === 'no') {
        const noButton = document.getElementById('no-button');
        noButton.innerText = 'Ju sure about that MUMMAAA 🙄?';

        const yesButton = document.getElementById('yes-button');
        const currentSize = window
            .getComputedStyle(yesButton)
            .getPropertyValue('font-size');

        yesButton.style.fontSize = parseFloat(currentSize) * 2 + 'px';
    }
}

// Rainbow flash effect
function flashRainbowColors(callback) {
    const colors = [
        '#ff0000',
        '#ff7f00',
        '#ffff00',
        '#00ff00',
        '#0000ff',
        '#4b0082',
        '#9400d3'
    ];

    let i = 0;
    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD';
        callback();
    }, 2000);
}

// Show cat on page load
function displayCat() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    const catImage = document.createElement('img');
    catImage.src = 'cat.gif.png';
    catImage.alt = 'Cat';

    imageContainer.appendChild(catImage);
}

// YES clicked → cat + bell → heart cat
function showYayThenHeart() {
    const imageContainer = document.getElementById('image-container');
    const question = document.getElementById('question');

    imageContainer.innerHTML = '';

    question.innerText =
        'BWAHAHA YAYYYYYYYYYY MY GOOD GIRLL JU MY VALENTINE FOREVERRR😆💖';
    question.style.fontSize = '56px';

    document.getElementById('options').style.display = 'none';

    // Cat image
    const catImage = document.createElement('img');
    catImage.src = 'cat.gif.png';
    catImage.alt = 'Happy Cat';

    // Bell image
    const bellImage = document.createElement('img');
    bellImage.src = 'bell.png';
    bellImage.alt = 'Bell';

    imageContainer.appendChild(catImage);
    imageContainer.appendChild(bellImage);

    // Switch to heart cat after 2 seconds
    setTimeout(() => {
        imageContainer.innerHTML = '';

        const heartImage = document.createElement('img');
        heartImage.src = 'cat-heart.gif';
        heartImage.alt = 'Cat Heart';

        imageContainer.appendChild(heartImage);
    }, 2000);
}

// Initial load
displayCat();
