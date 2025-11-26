const footballTeam = {
    team: "Napoli",
    year: 2025,
    players: [
        { name: "Victor Osimhen", position: "forward", isCaptain: true },
        { name: "Lorenzo Insigne", position: "forward", isCaptain: false },
        { name: "Kalidou Koulibaly", position: "defender", isCaptain: false },
        { name: "Fabian Ruiz", position: "midfielder", isCaptain: false },
        { name: "David Ospina", position: "goalkeeper", isCaptain: false },
        { name: "Piotr Zieliński", position: "midfielder", isCaptain: false },
        { name: "Giovanni Di Lorenzo", position: "defender", isCaptain: false },
        { name: "Hirving Lozano", position: "forward", isCaptain: false },
        { name: "Andre-Frank Zambo Anguissa", position: "midfielder", isCaptain: false },
        { name: "Matteo Politano", position: "forward", isCaptain: false },
        { name: "Kostas Manolas", position: "defender", isCaptain: false }
    ], 
    headCoach: "Luciano Spalletti"
}

const teamSpanElement = document.getElementById("team");
const yearSpanElement = document.getElementById("year");
const headCoachSpanElement = document.getElementById("head-coach");
const playerOptions = document.getElementById('players');
const playerCards = document.getElementById('player-cards');

teamSpanElement.textContent = footballTeam.team;
yearSpanElement.textContent = footballTeam.year;
headCoachSpanElement.textContent = footballTeam.headCoach;

const showPlayers = (selectedPosition) => {
    playerCards.innerHTML = "";

    let playersToShow =
        selectedPosition === "all"
            ? footballTeam.players
            : footballTeam.players.filter(player => player.position === selectedPosition);

    playersToShow.forEach(player => {
        playerCards.innerHTML += `
            <div class="player-card">
                <h2>${player.isCaptain ? "(Captain)" : ""} ${player.name}</h2>
                <p>Position: ${player.position}</p>
            </div>`;
    });
};

showPlayers('all');


playerOptions.addEventListener('change', () => {
    showPlayers(playerOptions.value);
});

