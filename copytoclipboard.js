// Select the elements using the class name
const button = document.querySelector(".contact_email-wrapper");
const text = document.querySelector(".contact_email");
const background = document.querySelector(".contact_email-background");
const icon = document.querySelector(".contact_email-icon");

// Store the original text
const email = "daniel@danielsantos.co";
const newText = "copied to clipboard";
const typingSpeed = 20; // Typing speed in milliseconds
let typingInterval; // Store the typing interval ID

// Change the text
//text.innerText = "copied to clipboard";

// Function to perform typewriter effect
function typeWriter(element, text, callback) {
  let index = 0;
  element.textContent = ""; // Clear the current text content

  if (typingInterval) {
    clearInterval(typingInterval); // Stop any ongoing animation
  }

  typingInterval = setInterval(() => {
    element.textContent += text.charAt(index);
    index++;
    if (index > text.length) {
      clearInterval(typingInterval); // Stop the interval when done
      if (callback) callback(); // Execute callback if provided
    }
  }, typingSpeed);
}
function animateText() {
  navigator.clipboard.writeText("daniel@danielsantos.co");
  button.style.paddingLeft = "1.5rem";
  text.style.color = "var(--neutral--900)";
  background.style.transform = "translateX(0%)";
  text.style.fontSize = "2.25rem";
  icon.style.opacity = 0;

  typeWriter(text, newText, () => {
    setTimeout(() => {
      text.style.color = "var(--white)";
      background.style.transform = "translateX(-101%)";
      text.style.fontSize = "2.25rem";

      text.style.opacity = "0%";
      background.style.transition =
        "transform 0.5s cubic-bezier(.75, 0, .75, .9)";
    }, 3000); // Wait before reverting
    setTimeout(() => {
      button.style.paddingLeft = "0";
      text.style.opacity = "100%";
      typeWriter(text, email);
      background.style.transition =
        "transform 0.3s cubic-bezier(.165, .84, .44, 1)";
      icon.style.opacity = "100%";
    }, 3400); // Wait before reverting
  });
}

// Add a click event listener to the button
button.addEventListener("click", () => {
  //typeWriter(text, newText);
  animateText(); // Start the text animation sequence
  //button.style.paddingLeft = "1.5rem";
  //text.style.color = "var(--neutral--400)";
  //background.style.transform = "translateX(0%)";

  // Change the text back after 3 seconds (3000 milliseconds)
  /*setTimeout(function () {
    //text.innerText = originalText;
    typeWriter(text, email);
    button.style.paddingLeft = originalPadding;
    text.style.color = "var(--white)";
    background.style.transform = "translateX(-100%)";
  }, 3000);*/
});
