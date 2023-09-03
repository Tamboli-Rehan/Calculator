// window.alert('Open the Calculator & Read down the note by clicking the note btn!')
function showCustomModal() {
    document.getElementById("customModal").style.display = "block";
  }

  function closeCustomModal() {
    document.getElementById("customModal").style.display = "none";
  }

document.addEventListener("DOMContentLoaded", function () {
    const helloElement = document.getElementById("hello");

    setTimeout(() => {
        helloElement.textContent = "Let's Calculate!";
        helloElement.style.transform = "scale(1)";
        helloElement.style.color = "green"
    }, 2500);
});

function clearDisplay() {
  document.getElementById('search').value='';
}
function appendToDisplay(value) {
  document.getElementById('search').value += value;
}

function calculate() {
  try {
      var operator = document.getElementById('search').value;
      var result = eval(operator);
      document.getElementById('search').value = result;
  } catch (error) {
      document.getElementById('search').value = 'Error';
  }
}