const team = {
  _players: [
    { firstName: "Mohammed", lastName: "Salah", age: 28 },
    { firstName: "Luis", lastName: "Diaz", age: 26 },
    { firstName: "Thiago", lastName: "Alcantara", age: 29 },
  ],
  _games: [
    { opponent: "Manchester Utd", teamPoints: 5, opponentPoints: 0 },
    { opponent: "Manchester City", teamPoints: 3, opponentPoints: 2 },
    { opponent: "Chelsea", teamPoints: 1, opponentPoints: 0 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 8, 7);
console.log(team.games);
