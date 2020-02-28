fetch('https://api.magicthegathering.io/v1/cards')
 .then((responce) => {
     return responce.json();
 })
 .then((data) => {
    console.log(data.cards);
    const container = document.getElementById('container')
    data.cards.forEach(card => {
        console.log(card) 
        let cardDiv = document.createElement('div')
        cardDiv.innerHTML = '<div class="name">' + card.name + '</div> <div class="manaCost">' + card.manaCost + '</div> <div class="cmc">' + card.cmc + '</div>'
        container.append(cardDiv)
    });
 });
