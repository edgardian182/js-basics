const team = {
  _players: [], // { firstName:, lastName:, age: }
  _games: [], // { opponent:, teamPoints:, opponentPoints: }

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer (firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this.games.push(game)
  }
}

team.addPlayer('Matt', 'Soros', 60);
team.addPlayer('Jennifer', 'Rocker', 20);
team.addGame('Dragon', 100, 1000);
team.addGame('Zombie', 10, 100);

console.log(team.players);
console.log(team.games);