function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(showCatAndBell);
    } else if (option === 'no') {
        document.getElementById('no-button').innerText =
            'Ju sure about that MUMMAAA 🙄?';

        const yesButton = document.getElementById('yes-button');
        const currentFontSize = window.getComputedStyle(yesButton).fontSize;
        yesButton.style.fontSize = parseFloat(currentFontSize) * 2 + 'px';
    }
}

function flashRainbowColors(callback) {
    const colors = [
        '#ff0000', '#ff7f00', '#ffff00',
        '#00ff00', '#0000ff', '#4b0082', '#9400d3'
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

// Initial cat
function displayCat() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    const cat = new Image();
    cat.src = 'cat.gif.png';
    cat.className = 'cat-img';

    imageContainer.appendChild(cat);
}

// YES → show cat + bell together
function showCatAndBell() {
    const imageContainer = document.getElementById('image-container');
    const question = document.getElementById('question');

    imageContainer.innerHTML = '';

    question.innerText = 'BWAHAHA YAYYYYYYYYYY 😆💖';
    question.style.fontSize = '56px';
    question.style.color = '#000000';

    document.getElementById('options').style.display = 'none';

    const cat = new Image();
    cat.src = 'cat.gif.png';
    cat.className = 'cat-img';

    const bell = new Image();
    bell.src = 'bell.png';
    bell.className = 'bell-img';

    imageContainer.appendChild(cat);
    imageContainer.appendChild(bell);
}

displayCat();
