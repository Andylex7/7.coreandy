function changeText() {
    document.getElementById("message").textContent = "Thanks for clicking the button!";
  }function changeText() {
    document.getElementById("message").textContent = "Thanks for clicking the button!";
  }
  
  function submitForm(event) {
    event.preventDefault(); // Prevents page reload
    document.getElementById("form-message").textContent = "Thank you for your message!";
  }