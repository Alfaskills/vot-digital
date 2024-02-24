var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// obține elementul HTML cu id-ul "demo"
var element = document.getElementById("demo");

// definește o funcție care schimbă conținutul elementului
function changeContent() {
  // preia valorile introduse de utilizator
  var nume = document.getElementById("uname").value;
  var cnp = document.getElementById("psw").value;

  // verifică dacă valorile sunt valide
  if (nume && cnp) {
    // ascunde fereastra modală
    document.getElementById("id01").style.display = "none";

    // schimbă conținutul elementului cu un mesaj personalizat
    element.innerHTML = "Bine ai venit, " + nume + "! Alegeți candidatul preferat din lista de mai jos.";
  } else {
    // afișează un mesaj de eroare
    element.innerHTML = "Vă rugăm să introduceți numele și CNP-ul corect.";
  }
}

// adaugă un ascultător de evenimente pentru butonul de submit
document.getElementById("submit").addEventListener("click", changeContent);
