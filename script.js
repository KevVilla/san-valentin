const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const response = document.getElementById("response");
const imageContainer = document.getElementById("imageContainer");
const container = document.querySelector(".container");

let isFirstClick = true; // Flag to track the first click

yesButton.addEventListener("click", () => {
  // Clear everything in the container
  container.innerHTML = "";

  const message = document.createElement("p");
  const message1 = document.createElement("p");
  message.id = "response";
  message1.id = "response1";
  message.textContent =
    "Feliz San Valentín! 💖 Me haces el hombre más feliz del mundo 💖";
  message1.textContent = " TE AMO MI OJITOS DE TAPIOCA! 💖";
  container.appendChild(message);

  // Create a new div for the grid and message
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("image-grid");

  // Add images to the grid
  const images = [
    "./images/image-1.png",
    "./images/image-2.png",
    "./images/image-3.png",
    "./images/image-4.png",
    "./images/image-5.png",
    "./images/image-6.png",
  ];

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Imagen amorosa";
    gridContainer.appendChild(img);
  });

  // Add the grid to the container
  container.appendChild(gridContainer);
  container.appendChild(message1);

  // Add the response message
});

function moveNoButton() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Calculate random positions within the visible screen area
  const maxX = screenWidth - buttonWidth;
  const maxY = screenHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Set the new position
  noButton.style.position = "fixed"; // Use fixed positioning to stay within the viewport
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Show image and move button when "No" is clicked or hovered
noButton.addEventListener("click", () => {
  if (isFirstClick) {
    // Apply a transition effect on the first click
    noButton.style.transition = "transform 0.5s ease";
    noButton.style.transform = "scale(1.2)"; // Example: Scale up the button
    setTimeout(() => {
      noButton.style.transform = "scale(1)"; // Reset the scale
      isFirstClick = false; // Mark the first click as done
    }, 500); // Duration of the transition
  }
  mouseoverNoButton();
  moveNoButton();
});
function mouseoverNoButton() {
  noButton.addEventListener("mouseover", () => {
    imageContainer.innerHTML = `
    <video autoplay loop muted playsinline  controls>
  <source src="./images/mushu.mp4" type="video/mp4" />
  Tu navegador no soporta el elemento de video.
</video>
`;
    response.textContent = "Jaja, no puedes tocar el botón 🤣🫢";
    moveNoButton();
  });
}
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text based on the current mode
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Modo Claro ☀️";
  } else {
    darkModeToggle.textContent = "Modo Oscuro 🌙";
  }
});
