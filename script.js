// Set initial height and width
let height = 21.5;
let width = 42.672;

// Get the button element by its ID
let button = document.getElementById("button");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Increase width and height by 10
  width += 10;
  height += 10;

  // Update button's height and width
  button.style.height = `${height}px`;
  button.style.width = `${width}px`;
});
