// Wait for the DOM content to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal element
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (modal && event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Get the element with ID "demo"
  var element = document.getElementById("demo");

  // Get the element with ID "submit"
  var submitButton = document.getElementById("submit");

  // Check if the elements exist before adding event listeners
  if (submitButton) {
      // Add an event listener for the submit button
      submitButton.addEventListener("click", changeContent);
  }

  // Define a function to change the content of the "demo" element
  function changeContent() {
    // Get the values entered by the user
    var nume = document.getElementById("uname").value;
    var cnp = document.getElementById("psw").value;

    // Check if the values are valid
    if (nume && cnp && element) {
      // Hide the modal window
      if (modal) {
          modal.style.display = "none";
      }

      // Change the content of the "demo" element with a personalized message
      element.innerHTML = "Bine ai venit, " + nume + "! Alegeți candidatul preferat din lista de mai jos.";
    } else {
      // Display an error message
      if (element) {
          element.innerHTML = "Vă rugăm să introduceți numele și CNP-ul corect.";
      }
    }
  }
});
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
