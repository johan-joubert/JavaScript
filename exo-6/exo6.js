// Partie 8 code academy

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
console.log((joeInfo.cars).length);

// changer le nombre de salle de bains de Joe : il n'en possède au'une.
console.log(joeInfo.bathrooms);

// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage = true;


let teamHurling = {
    _players: [
        {
            firstName: "Johan",
            lastName: "Joubert",
            age: 29,
        },
        {
            firstName: "Sebastient",
            lastName: "Pochtron",
            age: 58,
        },
        {
            firstName: "Patrick",
            lastName: "Ducon",
            age: 48,
        },
        {
            firstName: "Gerard",
            lastName: "Pasbien",
            age: 42,
        }
    ],
    _games: [
        {
            opponent: "Chiché",
            teamPoints: 32,
            opponentPoints: 23,
        },
        {
            opponent: "St Pardoux",
            teamPoints: 43,
            opponentPoints: 44,
        },
        {
            opponent: "Poitiers",
            teamPoints: 56,
            opponentPoints: 2,
        }
    ],
};

function addPlayer (first, last, age) {
    teamHurling._players.push({firstName:first, lastName:last, age:age});
}

addPlayer("jo", "Coco", 45);
addPlayer("Bernard", "Poivreaux", 8);
addPlayer("Stéphane", "Souslard", 53);
addPlayer("Gérard", "Arsouille", 40);


function addGames (opp, team, points) {
    teamHurling._games.push({opponent:opp, teamPoints:team, opponentPOints:points});
}

addGames("Pougnérisson", 25, 25);
addGames("Vouillé", 33, 26);
addGames("Vérines", 18, 29);
addGames("Bonneuil", 42, 33);

let total = 0;

for (let i = 0; i < teamHurling._games.length ; i++) {
    total += teamHurling._games[i].teamPoints;
}

let moyenne = 0;

for (let i = 0; i < teamHurling._games.length; i++) {
    moyenne = (total / teamHurling._games.length);
}

console.log(moyenne.toFixed(2));

let oldestPlayer = teamHurling._players[0];

    for (let i = 1; i < teamHurling._players.length; i++) {

        let currentPlayer = teamHurling._players[i];

        if(currentPlayer.age > oldestPlayer.age ) {
            oldestPlayer = currentPlayer;
        }
    }

console.log(oldestPlayer);


teamHurling._players.sort( (a,b) => {

    if(a.lastName < b.lastName) {
        return -1;
    }
    if (a.lastName > b.lastName) {
        return 1;
    }
    return 0;

})

console.log(teamHurling);
