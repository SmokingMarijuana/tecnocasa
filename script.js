document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupContatti");
  const apri = document.getElementById("prenotaBtn");
  const chiudi = document.getElementById("chiudiBtn");

  apri.addEventListener("click", () => {
    // Rimuove eventuali classi di uscita
    popup.classList.remove("esci");
    // Imposta display visibile
    popup.style.display = "flex";
    // Forza un piccolo ritardo per permettere il reflow prima di aggiungere la classe di entrata
    requestAnimationFrame(() => {
      popup.classList.add("mostra");
    });
  });

  chiudi.addEventListener("click", () => {
    // Rimuove la classe di entrata e aggiunge quella di uscita
    popup.classList.remove("mostra");
    popup.classList.add("esci");

    // Dopo l’animazione, nasconde il popup
    setTimeout(() => {
      popup.style.display = "none";
      popup.classList.remove("esci");
    }, 400); // tempo uguale alla durata dell'animazione
  });

  // Chiudi cliccando fuori dalla finestra
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      chiudi.click();
    }
  });
});
