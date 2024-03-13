import {getEleves} from "./fetch.js"
function displayEleves(eleves){
  for (let i =0 ; i<eleves.length ; i++){
    document.querySelector('body').innerHTML += `<li><h3>${eleves[i].prenom}</h3>
    <p>
    ${eleves[i].id}
    </p></li>`}
}

getEleves(displayEleves)
