const cards = document.querySelectorAll(".card");

cards.forEach( card => {
    let moreInfo = card.querySelector("more-info");

    card.addEventListener('click', e => {
        if(e.target.classList == "more-info") {
            card.classList.toggle('is-flipped');
        }
    });

    window.addEventListener('click', e => {
        if (!e.target.classList.contains('more-info')) {
            card.classList.remove('is-flipped');
        }
    });
});