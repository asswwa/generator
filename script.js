let ass = [
    'украина',
    'я хохол',
    'я правнук гитлера',
    'я гитлер',
    'я еврей',
    'письки',
    'жопы',
    'мама ярика',
    '11 сентября',
    'садам хусейн',
    'тесак',
    'ракеты на украину',
    'дети',
    'сталин',
    'свастига',
    'зига',
    'басиста не слышно',
    'вар тандер',
    'педофил',
    'балканы',
    'сербия',
    'омоновцы',
    'дядя изя',
]

document.querySelector("#hoha").onclick = function(){
    let joke = Math.floor(Math.random() * ((ass.length - 1) + 1));
    document.getElementById("demo").innerHTML = ass[joke];

}
console.log("че пялишь")
