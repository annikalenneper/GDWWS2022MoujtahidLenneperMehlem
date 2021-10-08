//Aufgabe 1 
/*Schreiben Sie Code welches ihren Namen ausgibt
Daten können über den Aufruf console.log() auf der Konsole 
ausgegeben werden*/

console.log("Abdelbasset Moujtahid");

//Aufgabe 2-5
const readline = require('readline');
const read = readline.createInterface({input: process.stdin, output: process.stdout});

function getAnyBewertung(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

var maximale_bewertung = 5; // 5 Sterne ist die maximale Bewertung
var anzahl_bewertung = 0; //Summe aller Bewertungen
var bewertung = 0; //Zähler

const Bewerte = function()
{
    read.question('Drücken Sie die 1 um eine Bewertung anzugeben\n'+
    'Drücken Sie die 2 um eine zufällige Bewertung anzugeben\n', function(x)
    {
        switch(parseInt(x))
        {
            case 1:
                bewerten(log); //Eingabe Funktion
                break;
            
            case 2:
                random(log); //Eingabe durch Zufall
                break;
            
            default:
                console.log('Falsche Eingabe !'); //Wenn Eingabe nicht vom Typ Int oder größer als 5 und kleiner als 0
                break;
        }
    })
}

const random = function(callback)
{
    var random;

    for(var i=1; i<=20; i++)
    {
        random = getRandomInt(6); //Zwischen 0 und 5
        bewertung += random;
        console.log('Person'+i+'hat die App mit'+random+'Sternen bewertet');
    }
    callback(('Die App hat eine durchschnittliche Note von: '+Math.round(bewertung/i*10)/10+'/'+maximale_bewertung));

    read.close();
}

const log = function(message)
{
    console.log(message);
}

const calculate = myArr =>
{
    const sum = myArr.reduce((total, amout) => total + amount);
    const cal = sum / myArr.length;

    console.log('Die durchschnittliche Bewertung beträgt' + Math.round(cal));
};

var question = (q) => 
{
    return new Promise((res, rej)=> 
    {
        read.question(q, answer =>
            {
                res(answer);
            })
    });
};

const bewerten = async function eingabe(callback)
{
    var x;
    const myArr = [];

    while(x != 'quit')
    {
        x = await question('Geben Sie Ihre Bewertung ein: \n')
        {
            switch(x)
            {
                case '0':
                    myArr.push(0);
                    break;
                case '1':
                    myArr.push(1);
                    break;
                case '2':
                    myArr.push(2);
                    break;
                case '3':
                    myArr.push(3);
                    break;
                case '4':
                    myArr.push(4);
                    break;
                case '5':
                    myArr.push(5);
                    break;
                case 'calc':
                    calculate(myArr);
                    break;
                case 'count':
                    callback(myArr);
                    break;
                default:
                    console.log('Falsche Eingabe!');
                    break;
            }//switch
        }//while
    }//function number two 
    read.close();
}//function number 1

Bewerte();

