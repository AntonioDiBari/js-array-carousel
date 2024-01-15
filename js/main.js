// PRENDO GLI ELEMENTI CHE MI SERVIRANNO DAL DOM

const userNumberResult = document.getElementById("numero-utente");

const resultBtn = document.getElementById("result-btn");

const computerNumberResult = document.getElementById("numero-pc");

const finalResult = document.getElementById("result");

// ASSEGNO I NUMERI RANDOM A DUE COSTANTI

const userNumber = Math.floor(Math.random() * 6 + 1);
console.log("numero Utente " + userNumber);

const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log("numero Computer " + computerNumber);

// RENDO NOTO ALL'UTENTE DEL SUON NUMERO
userNumberResult.innerText = `Il dado lanciato per te ha dato il numero: ${userNumber}`;

// ASCOLTO L'EVENTO DEL BTN
resultBtn.addEventListener("click", function () {
  computerNumberResult.innerText = `Il dado lanciato per il computer ha dato il numero: ${computerNumber}`;
  let result = "";
  let colorResult = "text-black";
  //   CONDIZIONE PER CONTROLLARE LA GIOCATA
  if (userNumber > computerNumber) {
    result = "HAI VINTO!!";
    colorResult = "text-success";
  } else if (userNumber == computerNumber) {
    result = "PAREGGIO :/";
  } else {
    result = "HAI PERSO :(";
    colorResult = "text-danger";
  }

  //  STAMPO IL RISULTATO
  finalResult.classList.add(colorResult);
  finalResult.innerText = result;
});
