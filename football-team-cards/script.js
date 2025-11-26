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


playerOptions.addEventListener('change', () => {
    showPlayers(playerOptions.value);
});

const showPlayers = (selectedPosition) => {
    playerCards.innerHTML = ""; // Clear previous cards
    if (selectedPosition === "all") {
        footballTeam.players.forEach(player => {
            playerCards.innerHTML += `<div class="player-card">
                <h2>${player.name}</h2>
                <p>Position: ${player.position}</p>
            </div>`;
        });
    } else if (selectedPosition === "forward") {
        playerCards.innerHTML = ""; // Clear previous cards
        const forwardPlayers = footballTeam.players.filter(player => player.position === "forward");
        console.log("Forward Players:");
        forwardPlayers.forEach(player => {
            playerCards.innerHTML += `<div class="player-card">
                <h2>${player.name}</h2>
                <p>Position: ${player.position}</p>
            </div>`;
        });
    } else if (selectedPosition === "midfielder") {
        playerCards.innerHTML = ""; // Clear previous cards
        const midfielderPlayers = footballTeam.players.filter(player => player.position === "midfielder");
        console.log("Midfielder Players:");
        midfielderPlayers.forEach(player => {
            playerCards.innerHTML += `<div class="player-card">
                <h2>${player.name}</h2>
                <p>Position: ${player.position}</p>
            </div>`;
        });
    } else if (selectedPosition === "defender") {
        playerCards.innerHTML = ""; // Clear previous cards
        const defenderPlayers = footballTeam.players.filter(player => player.position === "defender");
        console.log("Defender Players:");
        defenderPlayers.forEach(player => {
            playerCards.innerHTML += `<div class="player-card">
                <h2>${player.name}</h2>
                <p>Position: ${player.position}</p>
            </div>`;
        });
    } else if (selectedPosition === "goalkeeper") {
        playerCards.innerHTML = ""; // Clear previous cards
        const goalkeeperPlayers = footballTeam.players.filter(player => player.position === "goalkeeper");
        console.log("Goalkeeper Players:");
        goalkeeperPlayers.forEach(player => {
            playerCards.innerHTML += `<div class="player-card">
                <h2>${player.name}</h2>
                <p>Position: ${player.position}</p>
            </div>`;
        });
    }
}