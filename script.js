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
