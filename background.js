// ==== DOM Elements ====
const audio = document.getElementById("player");
const cardsContainer = document.querySelector(".cards");
const randomButton = document.getElementById("random-play");
const categoryBtn = document.querySelectorAll(".categories button");

// ==== State ====
let currentPlayButton = null;
const curFiles = [...files];
const selectedCategory = "الكل";

// ==== Utility Functions ====
function eraseElementClass(elements, className) {
  elements.forEach((el) => el.classList.remove(className));
}

function addElementClass(element, className) {
  element.classList.add(className);
}

// ==== Playback Logic ====
function playFromTime(file, button) {
  if (currentPlayButton) currentPlayButton.textContent = "▶";
  currentPlayButton = button;
  button.textContent = "❚❚";

  const now = new Date();
  const secondsToday =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  const index = secondsToday % file.url.length;
  const selectedUrl = file.url[index];

  audio.src = selectedUrl;

  audio.addEventListener(
    "loadedmetadata",
    () => {
      const seekTime = secondsToday % audio.duration;
      audio.currentTime = seekTime;
      audio.play();
    },
    { once: true }
  );
}

// ==== Card UI ====
function createCard(file) {
  const card = document.createElement("div");
  card.className = "card";

  const right = document.createElement("div");
  right.className = "card-right";

  const fav = document.createElement("span");
  fav.className = "fav";
  fav.textContent = "♥";

  const playBtn = document.createElement("button");
  playBtn.className = "play";
  playBtn.textContent = "▶";
  playBtn.onclick = () => playFromTime(file, playBtn);

  const title = document.createElement("h3");
  title.textContent = file.title;

  right.appendChild(playBtn);
  right.appendChild(title);
  card.appendChild(right);
  card.appendChild(fav);

  cardsContainer.appendChild(card);
}

// ==== Filtering ====
function displayByCategory(selectedCategory) {
  const filteredFiles =
    selectedCategory === "الكل"
      ? files
      : files.filter((file) => file.category === selectedCategory);

  cardsContainer.innerHTML = "";
  filteredFiles.forEach((file) => createCard(file));
}

// ==== Event Binding ====
function handleCategoryClick() {
  categoryBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      displayByCategory(btn.textContent);
      eraseElementClass(categoryBtn, "active");
      addElementClass(btn, "active");
    });
  });
}

randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * files.length);
  playFromTime(files[randomIndex]);
});

// ==== Init ====
curFiles.forEach((file) => createCard(file));
handleCategoryClick();
