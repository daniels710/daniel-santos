// Disable scroll on menu open
document.addEventListener("DOMContentLoaded", () => {
  // Get a reference to the button element
  const button = document.querySelector(".nav_menu-button");

  // Get a reference to the body element
  const body = document.body;

  // Set a flag to keep track of the current state of the overflow property
  let overflowIsHidden = false;

  // Define a function to toggle the overflow property
  function toggleOverflow() {
    if (overflowIsHidden) {
      // If the overflow property is currently hidden, show it
      body.style.overflow = "auto";
      overflowIsHidden = false;
      lenis.start();
    } else {
      // If the overflow property is currently visible, hide it
      body.style.overflow = "hidden";
      overflowIsHidden = true;
      lenis.stop();
    }
  }
  button.addEventListener("click", toggleOverflow);
});
