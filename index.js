
document.addEventListener("DOMContentLoaded", function() {
  // Seleziona il dropdown e il menu
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

  // Funzione per aprire/chiudere il dropdown al clic
  dropdownToggle.addEventListener('click', function(e) {
    e.preventDefault(); // Impedisce il comportamento predefinito del clic
    dropdownMenu.classList.toggle('show'); // Apre o chiude il menu
  });

  // Chiude il dropdown se si clicca fuori
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdownMenu.classList.remove('show'); // Chiudi il menu se si clicca all'esterno
    }
  });
});
