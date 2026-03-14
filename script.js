const tutorialBtn = document.getElementById("tutorialBtn");
const accessibilityBtn = document.getElementById("accessibilityBtn");
const readPageBtn = document.getElementById("readPageBtn");
const repeatBtn = document.getElementById("repeatBtn");
const contrastBtn = document.getElementById("contrastBtn");
const stopBtn = document.getElementById("stopBtn");
const voiceHint = document.getElementById("voiceHint");

let lastMessage = "You are on the home page.";

function speak(text) {
  if (!text || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

function announce(text) {
  voiceHint.textContent = text;
  lastMessage = text;
  speak(text);
}

window.addEventListener("load", () => {
  announce("You are on the home page. This page includes quick access and accessibility tools.");
});

tutorialBtn.addEventListener("click", () => {
  announce("Beginner tutorials page is not built yet. This button will open the tutorial hub in the next step.");
});

accessibilityBtn.addEventListener("click", () => {
  announce("Accessibility settings page is not built yet. This button will open the settings page in the next step.");
});

readPageBtn.addEventListener("click", () => {
  announce(
    "Reading this page. This prototype focuses on beginner tutorial guidance, accessible mobile interface, speech feedback, and VoiceOver style interaction."
  );
});

repeatBtn.addEventListener("click", () => {
  speak(lastMessage);
});

contrastBtn.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");

  if (document.body.classList.contains("high-contrast")) {
    announce("High contrast mode enabled.");
  } else {
    announce("High contrast mode disabled.");
  }
});

stopBtn.addEventListener("click", () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  voiceHint.textContent = "Speech stopped.";
});

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
  button.addEventListener("focus", () => {
    const label = button.getAttribute("aria-label");
    if (label) {
      speak(label);
    }
  });
});
