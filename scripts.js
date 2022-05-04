console.log(document.title);

const title = document.querySelector('#gen-1').innerHTML = "Generasión 1 Pokimon";

const changeColor = document.querySelector('.infocard-list').style.backgroundColor = "#331F25";

const getUrl = document.URL;
console.log(getUrl);

const getDomain = window.location.hostname;
console.log(getDomain);

const printImages = document.getElementsByTagName('img');
console.log(printImages);

const changeImage = document.querySelectorAll('.img-fixed');
for (let i = 0; i < changeImage.length; i++) {
    changeImage[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"; 
} 


const flyingColor = document.querySelectorAll('.flying');
for (let i = 0; i < flyingColor.length - 1; i++) {
    if(flyingColor[i].href == "https://pokemondb.net/type/flying") {
        flyingColor[i].parentNode.parentNode.style.backgroundColor = "white";
    }
}








