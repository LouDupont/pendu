//Génération de mot aléatoire

var words = ['ennemi','medaillon','aperitif','reserves','formel','moto','homicide','royal','alarme','gladiateur',
            'secret','martien','novice','cercle','alcoolique','histoire','camion','sucre','enigme','titanesque',
            'rencontre','poule','fusil','prince','animaux','attaque','protection','plateau','bougie','danger'];

var randWord = Math.floor(Math.random() * words.length);
var chosenWord = words[randWord];
// Tableau pour stocker les lettres du mot à trouver
var wordToFind = [];
//Nombre de tentatives
var wrongGuesses = 0;
var wrongLetters = [];
//Variable pour connaître le nombre de lettres qu'il reste à trouver (qu'on réduit à chaque lettre trouvée dans la fonction)
lettersToFind = chosenWord.length;
console.log(chosenWord);



//Cacher le mot généré avec des undescores pour chaque lettre dans le mot

for(i = 0; i < chosenWord.length; i++)
{  
    wordToFind[i] = " _ ";    
}

document.getElementById('randWord').innerHTML = wordToFind;
// Fonction qui s'active quand on rentre une lettre dans le text area 
function play()
{  
    
    // On récupère la lettre rentrée dans le text area
    var letterEntered = document.getElementById("letterEntered").value;
    //Si il y pas plus d'un caractère rentré, message d'erreur
    if(letterEntered.length !==1) 
    {
        alert("Tu dois rentrer une lettre ! Et une seule !")
    }
    // Si la lettre entrée ne fait pas partie du mot on incrémenter le nombre de mauvais essais
    else if(chosenWord.indexOf(letterEntered) == -1)
    {
        wrongGuesses ++;
        // si la lettre n'a jamais été rentrée dans le tableau wrongLetters (donc qu'elle n'est pas dans le mot)
        if(wrongLetters.indexOf(letterEntered) == -1)
        {
            // on concatène et on écrit les lettres utilisées qui ne sont pas dans le mot
            wrongLetters += letterEntered;
            document.getElementById('wrongGuesses').innerHTML = "Wrong letters : " + wrongLetters;
        }
        // sinon c'est que la lettre est déjà utilisée
        else
        {
            alert("Lettre déjà utilisée !")
        }
        // conditions pour "afficher" le pendu en fonction du nombre de mauvaises tentatives qu'on incrémente ligne 42
        if(wrongGuesses == 1)
        {
            document.getElementById('head').innerHTML = "Head";
        }

        else if(wrongGuesses == 2)
        {
            document.getElementById('body').innerHTML = "Body";
        }

        else if(wrongGuesses == 3)
        {
            document.getElementById('leftArm').innerHTML = "Left Arm";
        }

        else if(wrongGuesses == 4)
        {
            document.getElementById('rightArm').innerHTML = "Right Arm";
        }

        else if(wrongGuesses == 5)
        {
            document.getElementById('leftLeg').innerHTML = "Left Leg";
        }

        else if(wrongGuesses > 5)
        {
            document.getElementById('rightLeg').innerHTML = "Right Leg";
            
        }
    }

    else
    {   
        // Pour chaque lettre dans le mot choisi
        for(i = 0; i < chosenWord.length; i++)
        {    
            // Si elle est égale à la lettre rentrée     
            if(chosenWord[i] == letterEntered)
            {
                // On remplace les instances dans le tableau par la lettre rentrée
                wordToFind[i] = letterEntered;
                document.getElementById('randWord').innerHTML = wordToFind;
                lettersToFind --;
                console.log(lettersToFind)
            }
        }
    }
    // Reset de la text area à chaque entrée
    document.getElementById('letterEntered').value ="";
    // conditions de défaite : si le nombre de mauvaises tentatives est > 5, on met une alert et on affiche le mot qui était à trouver
    if(wrongGuesses > 5 )
    {
        document.getElementById('randWord').innerHTML = chosenWord;
        alert("C'est perdu ! ");
    }
    // cibdition de victoire : si le nbr de lettres à trouver est = à 0 c'est que le mot est affiché complètement
    if(lettersToFind == 0)
    {
        document.getElementById('randWord').innerHTML = chosenWord;
        alert('Gagné !');
    }
}