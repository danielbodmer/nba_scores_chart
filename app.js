const warriorsGames = [
  {
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false,
    },
  },
];

const ulParent = document.createElement('ul');
const checkWinner = (homePoints, awayPoints) => {
  return awayPoints > homePoints
    ? `<b>${awayPoints}</b>-${homePoints}`
    : `${awayPoints}-<b>${homePoints}</b>`;
};
const isWinner = (isWinner) => (isWinner ? 'win' : 'loss');

for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const gameLi = document.createElement('li');
  const teamNames = `${aTeam} @ ${hTeam}`;
  const scoreLine = checkWinner(hPoints, aPoints);

  gameLi.innerHTML = `${teamNames} ${scoreLine}`;
  const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
  gameLi.classList.add(isWinner(warriors.isWinner));
  ulParent.append(gameLi);
}

document.body.prepend(ulParent);
