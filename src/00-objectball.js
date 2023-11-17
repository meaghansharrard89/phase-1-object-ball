function gameObject() {

const sportsBall = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
            },
        },
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks:  5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            },
        },
    },
}
return sportsBall;
}


function numPointsScored(playerName) {
    const gameData = gameObject();
    let points = null;
  
    // Check if the playerName exists in the home team players
    if (gameData.home.players.hasOwnProperty(playerName)) {
      points = gameData.home.players[playerName].points;
    }
  
    // If playerName doesn't exist in the home team players, check the away team players
    if (points === null && gameData.away.players.hasOwnProperty(playerName)) {
      points = gameData.away.players[playerName].points;
    }
  
    return points;
}

function shoeSize (playerName) {
    const gameData = gameObject();
    let shoeSize = null;

    if (gameData.home.players.hasOwnProperty(playerName)) {
        shoeSize = gameData.home.players[playerName].shoe;
}

    if (shoeSize === null && gameData.away.players.hasOwnProperty(playerName)) {
        shoeSize = gameData.away.players[playerName].shoe;
    }

    return shoeSize;
}

function teamColors(teamName){
    const gameData = gameObject();
    let color = null;

    if (gameData.home.teamName === teamName) {
        color = gameData.home.colors;
    }

    if (color === null && gameData.away.teamName === teamName) {
        color = gameData.away.colors;
    }

    return color;
}

//In this updated code, I modified the loop to iterate over the home and away objects within the gameObj. Then, within each iteration, I checked if the teamObj has a property called "teamName". If it does, I pushed the value of teamObj.teamName into the array. Now, when you call teamNames(gameObject()), it should return an array with the team names ["Brooklyn Nets", "Charlotte Hornets"].
function teamNames(gameObj){
    let array = [];

    for (let team in gameObj) {
        let teamObj = gameObj[team];
        if (teamObj.hasOwnProperty("teamName")) {
            array.push(teamObj.teamName);
        }
    }

    return array;
}


//This updated version uses nested loops to iterate over the gameData object and check if the teamName matches. If there is a match, it iterates over the players of that team and pushes their numbers into the array.
function playerNumbers(teamName){
    let array = [];
    let gameData = gameObject();

for (const team in gameData) {
    if (gameData.hasOwnProperty(team)) {
        if (gameData[team].teamName === teamName) {
            const players = gameData[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    array.push(players[player].number);
                }
            }
        }
    }
}
     return array;
}

console.log(playerNumbers("Brooklyn Nets"));