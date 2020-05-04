createNumSelect('howmuchmafia-select', 'howmuchmafia', 1, 5);
createNumSelect('howmuch-select', 'howmuch', 6, 15);

document.getElementById('trish').addEventListener('click', (ev) => {
    if (ev.target.checked) {
        document.getElementById('diavolo').checked = true;
    }
});

document.getElementById('manage').addEventListener('click', (ev) => {
    let maniac = document.getElementById('maniac').checked;
    let kommie = document.getElementById('kommie').checked;
    let diavolo = document.getElementById('diavolo').checked;
    let trish = document.getElementById('trish').checked;
    let doc = document.getElementById('doc').checked;
    let peaceful = document.getElementById('howmuch').value;
    let mafia = document.getElementById('howmuchmafia').value;

    peaceful -= mafia;

    let roles = [];

    if (kommie) {
        roles.push('Комиссар');
        peaceful--;
    }

    if (maniac) {
        roles.push('Маньяк');
        peaceful--;
    }

    if (diavolo) {
        roles.push('Дон мафии');
        mafia--;

        if (trish) {
            roles.push('Дочь мафии');
            peaceful--;
        }
    }

    if (doc) {
        roles.push('Доктор');
        peaceful--;
    }

    for (let maf = 0; maf < mafia; maf++) {
        roles.push('Мафия');
    }

    for (let peace = 0; peace < peaceful; peace++) {
        roles.push('Мирный');
    }

    shuffle(roles);

    let resultCard = document.getElementById('results-card');
    let resultBlock = document.getElementById('results');

    resultBlock.innerHTML = '';

    roles.forEach((element, index) => {
        let realIndex = index + 1;
        let block = `<div class=\"result-line\">${realIndex} - ${element}</div>`;

        resultBlock.innerHTML += block;
    });

    resultCard.classList.remove('hidden');
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createNumSelect(id, selectId, min, max) {
    let select = `<select id="${selectId}">`

    for (let index = min; index <= max; index++) {
        select += `<option value="${index}">${index}</option>`
    }

    select += "</select>";

    document.getElementById(id).innerHTML += select;
} 