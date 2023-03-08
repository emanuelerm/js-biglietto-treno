/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

let passengersAge = prompt('Age');
let distance = prompt('Distance');


const priceForKm = 0.21;
const discountUnder = -0.2;
const discountOver = -0.4;
let priceForDistance = distance * priceForKm;


let ticketPrice = '';



if (!isNaN(passengersAge) && !isNaN(distance) && passengersAge && distance) {
    
    
    if (passengersAge >= 18 && passengersAge <= 65) {
        ticketPrice = (passengersAge * priceForDistance).toFixed(2);
    } 
    
    
    else if (passengersAge <= 17) {
        ticketPrice = (((passengersAge * priceForDistance) * discountUnder) + (passengersAge * priceForDistance)).toFixed(2);
    } 
    
    
    else if (passengersAge >= 66) {
        ticketPrice = (((passengersAge * priceForDistance) * discountOver) + (passengersAge * priceForDistance)).toFixed(2);
    }


}   else {
    alert('Insert data. Numbers Only.')
}


document.getElementById('result').innerHTML = ticketPrice