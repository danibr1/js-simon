/**
 * 
    Descrizione
    Un alert() espone 5 numeri generati casualmente.
    Da li parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    1. Creo una funzione per generare 5 numeri random univoci;
    2. Inserisco i numeri generati all'interno di un array;
    3. Faccio partire un timer di 30 secondi;

 */

$(document).ready(function (){

    // References
    var numberMax = 10; // range max di numeri random
    var numbers = 5; // tot numeri random da generare
    var numArray = []; // array numeri random
    var userNumber = []; // numeri inseriti dall'utente
    var rightNumber = []; // numeri indovinati
    var wrongNumber = []; // numeri sbagliati 
    var countdown = 3; // seconds countdown
  
    //Inserisco i numeri random all'interno dell'array
    while (numArray.length < numbers) {
        var num = randomNumber(numberMax);
        
        if (!numArray.includes(num)){
            numArray.push(num);
        }
    }
    
    //Stampo i numeri generati da memorizzare
    console.log(numArray);
    alert('I ' + numbers + ' numeri casuali da memorizzare sono: ' + numArray +'.\nHai ' + countdown + ' secondi per memorizzarli!');


    var timer = setInterval(function(){

        if (countdown === 0) {
            clearInterval(timer)
            // Richiesta numeri all'utente
            for (var i = 1; i <= numbers; i++){

                var user = parseInt ( prompt('Inserisci il °'+ i + ' numero di ' + numbers));

                // controllo
                if ( !isNaN(user) ){
                    userNumber.push(user);
                    // console.log(userNumber);
                }
                else {
                    alert('Numero inserito non valido');
                }
            }
        
            // Creazione array numeri corretti e sbagliati
            for (var i = 0; i <= userNumber.length; i++) {
    
                // Inserimento numeri corretti nell'array
                if ( numArray.includes(userNumber[i]) ) {
                    rightNumber.push(userNumber[i]);
                    console.log(rightNumber);
                }
                // Inserimento numeri errati nell'array
                else  {
                    wrongNumber.push(userNumber[i]);
                    console.log(wrongNumber);
                }
            }
        
            // OUTPUT
            
            // Numeri errati
            console.log('Su ' + numbers + ' numeri hai sbalgiato i seguenti: ' + wrongNumber);
            // Numeri corretti
            console.log('Su ' + numbers + ' numeri hai indovinato i seguenti ' + rightNumber);

        
        } else {
            console.log('Countdown! Mancano ' + countdown + ' secondi!');
            countdown--;
        }
    }, 1000)
//End doc ready
});

/*****************
 * FUNCTION
 *****************/
/**
 * Generatore numeri random univoci 
 * @param {*} max numero max
 * @returns 
 */
function randomNumber(max){
    return Math.round(Math.random() * max) + 1;
}