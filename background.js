// ==== DOM Elements ====
const audio = document.getElementById("player");
const cardsContainer = document.querySelector(".cards");
const randomButton = document.getElementById("random-play");
const categoryBtn = document.querySelectorAll(".categories button");
const searchInput = document.querySelector(".search");

// ==== State ====
let currentPlayButton = null;
const curFiles = [...files];
let selectedCategory = "الكل";

// ==== Utility Functions ====
function eraseElementClass(elements, className) {
  elements.forEach((el) => el.classList.remove(className));
}

function addElementClass(element, className) {
  element.classList.add(className);
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[\u064B-\u065F]/g, "") // Remove tashkeel
    .replace(/ة/g, "ه") // Normalize taa marbouta
    .replace(/أ|إ|آ/g, "ا") // Normalize different forms of alif
    .trim();
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

function searchFiles(query) {
  const normalizedQuery = normalize(query);
  return files.filter(
    (file) => normalize(file.title).includes(normalizedQuery)
    // &&
    // file.category == selectedCategory
  );
}

// ==== Event Binding ====
function handleCategoryClick() {
  categoryBtn.forEach((btn) => {
    selectedCategory = btn.textContent;

    btn.addEventListener("click", () => {
      displayByCategory(btn.textContent);
      eraseElementClass(categoryBtn, "active");
      addElementClass(btn, "active");
    });
  });
}

searchInput.addEventListener("input", () => {
  const results = searchFiles(searchInput.value);
  cardsContainer.innerHTML = "";
  results.forEach((file) => createCard(file));
});

randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * files.length);
  playFromTime(files[randomIndex]);
});

// ==== Background Utility ====
async function ensureOffscreen() {
  const exists = await chrome.offscreen.hasDocument();
  if (!exists) {
    await chrome.offscreen.createDocument({
      url: "offscreen.html",
      reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK],
      justification:
        "To allow continuous audio playback even when the popup window is closed.",
    });
  }
}

async function playInBackground(url) {
  await ensureOffscreen();
  chrome.runtime.sendMessage({ type: "play-audio", url });
}

// ==== Init ====
curFiles.forEach((file) => createCard(file));
handleCategoryClick();
