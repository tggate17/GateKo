const PASSWORD = "test";

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-message");

  if (input === PASSWORD) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-site").classList.remove("hidden");
  } else {
    error.textContent = "Incorrect password";
  }
}

function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");

  const activeButton = Array.from(tabs).find(
    button => button.textContent.replace(/\s/g, "").toLowerCase().includes(tabId)
  );
  if (activeButton) activeButton.classList.add("active");
}
const RSVP_ENDPOINT = "https://script.google.com/macros/s/AKfycbwfT3H4wIl10a09ySJ3RcQMYsnjiaVdpgGWZUCTUBoKV_QVt-X7OVhfWDGonB94SAmt/exec";


function sendRSVP(answer) {
  const nameInput = document.getElementById("guest-name");
  const message = document.getElementById("rsvp-message");

  const guestName = nameInput.value.trim();

  if (!guestName) {
    message.textContent = "Please enter your name.";
    return;
  }

  fetch(RSVP_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: guestName,
      rsvp: answer
    })
  });

  message.textContent = "Thank you! Your RSVP has been recorded.";
  nameInput.value = "";
}
