function createCard(date, day, games) {
  return `
    <div class="card">
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
      <img src="../assets/icon-${player1}.svg" alt="Brandeira da seleção ${player1}" />
      <strong>${hour}</strong>
      <img src="../assets/icon-${player2}.svg" alt="Brandeira da seleção ${player2}" />
    </li>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="../assets/logo.svg" alt="Logo da semana NLW" />
  </header>
  <main id="cards">
    ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
    ${createCard(
      "28/11",
      "segunda",
      createGame("switzerland", "13:00", "brazil") +
        createGame("portugal", "16:00", "uruguay")
    )}
    ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))}
  </main>
`
