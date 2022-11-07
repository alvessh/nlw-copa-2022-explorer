let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/icon-${player1}.svg" alt="Brandeira da seleção ${player1}" />
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="Brandeira da seleção ${player2}" />
    </li>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "06:00", "cameroon") +
      createGame("uruguay", "09:00", "southkorea") +
      createGame("portugal", "12:00", "ghana") +
      createGame("brazil", "15:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "06:00", "serbia") +
      createGame("southkorea", "09:00", "ghana") +
      createGame("brazil", "12:00", "switzerland") +
      createGame("portugal", "15:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "11:00", "portugal") +
      createGame("ghana", "11:00", "uruguay") +
      createGame("serbia", "15:00", "switzerland") +
      createGame("cameroon", "15:00", "brazil")
  )
