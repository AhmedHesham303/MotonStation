// ==== DOM Elements ====
const audio = document.getElementById("player");
const cardsContainer = document.querySelector(".cards");
const randomButton = document.getElementById("random-play");
const categoryBtn = document.querySelectorAll(".categories button");
const searchInput = document.querySelector(".search");
const about = document.querySelector(".about");
// ==== State ====
let currentPlayButton = null;
const curFiles = [...files];
let selectedCategory = "الكل";

// ==== Utility Functions ====

function getFilesFromLocalStorage() {
  const matchedFiles = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    // Try to find a file with a matching title
    const file = files.find((f) => f.title === key);

    if (file) {
      matchedFiles.push(file);
    }
  }

  return matchedFiles;
}

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

// function getFileDuration(urls) {
//   let duration = 0;
//   urls.forEach((url) => {
//     let audio = new Audio(url);
//     duration += audio.duration;
//   });
//   return duration;
// }

// ==== Playback Logic ====
function playFromTime(file, button) {
  if (currentPlayButton && currentPlayButton !== button) {
    currentPlayButton.textContent = "▶";
  }

  currentPlayButton = button;
  button.textContent = "❚❚";

  const now = new Date();
  const secondsToday =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const index = 0;
  const selectedUrl = file.url[index].trim();
  const isLive = !selectedUrl.endsWith(".mp3");

  audio.src = selectedUrl;
  document.querySelector(".playing-audio").textContent = file.title;
  if (isLive) {
    document.querySelector(".section-audio").style.display = "none";
    document.querySelector(".live-audio").style.display = "block";
    audio.controls = false;
    audio.play();
  } else {
    document.querySelector(".section-audio").style.display = "block";
    document.querySelector(".live-audio").style.display = "none";
    audio.controls = true;
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
}

function stopAudio(button) {
  if (audio) {
    audio.pause();
  }
  if (button) button.textContent = "▶";
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

  // Load favorite state from localStorage
  if (localStorage.getItem(file.title)) {
    fav.classList.add("active");
  }

  fav.addEventListener("click", () => {
    if (fav.classList.contains("active")) {
      fav.classList.remove("active");
      localStorage.removeItem(file.title);
      if (selectedCategory === "المفضلة") {
        card.remove();
      }
    } else {
      fav.classList.add("active");
      localStorage.setItem(file.title, "#ff9800");
    }
  });

  const playBtn = document.createElement("button");
  playBtn.className = "play";
  playBtn.textContent = "▶";

  playBtn.onclick = () => {
    if (playBtn.textContent === "❚❚") {
      stopAudio(playBtn);
      currentPlayButton = null;
    } else {
      playFromTime(file, playBtn);
    }
  };

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
    selectedCategory === "المفضلة"
      ? getFilesFromLocalStorage()
      : selectedCategory === "الكل"
      ? files
      : files.filter((file) => file.category === selectedCategory);

  cardsContainer.innerHTML = "";
  filteredFiles.forEach(createCard);
}

function searchFiles(query) {
  const normalizedQuery = normalize(query);
  return files.filter((file) =>
    normalize(file.title).includes(normalizedQuery)
  );
}

// ==== Event Binding ====
function handleCategoryClick() {
  categoryBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.textContent;
      displayByCategory(selectedCategory);
      eraseElementClass(categoryBtn, "active");
      addElementClass(btn, "active");
    });
  });
}

about.addEventListener("click", () => {
  window.location = "./about.html";
});

searchInput.addEventListener("input", () => {
  const results = searchFiles(searchInput.value);
  cardsContainer.innerHTML = "";
  results.forEach((file) => createCard(file));
});

randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * files.length); // Pick random file
  const randomFile = files[randomIndex];
  console.log(randomFile);

  cardsContainer.innerHTML = ""; // Clear all cards

  createCard(randomFile); // Create and append the card to container

  const lastCard = cardsContainer.querySelector(".card:last-child"); // Get the new card
  const playBtn = lastCard.querySelector(".card-right .play"); // Get the button inside that card

  playFromTime(randomFile, playBtn); // Play the audio
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
