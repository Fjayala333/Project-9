const cards = document.querySelectorAll(".card");



cards.forEach(card => {
    card.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            card.style.transform = "rotateY(-180deg)";
        }
    });
});

    window.addEventListener('click', e => {
        if (e.target.tagName !== 'BUTTON' && e.target.innerText !== 'More Info') {
            cards.forEach(card => {
                card.style.transform = "rotateY(0deg)";
            });
        }
    });
