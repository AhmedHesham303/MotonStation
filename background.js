// ==== DOM Elements ====
const audio = document.getElementById("player");
const cardsContainer = document.querySelector(".cards");
const randomButton = document.getElementById("random-play");
const categoryBtn = document.querySelectorAll(".categories button");
const searchInput = document.querySelector(".search");
const about = document.querySelector(".about");
const playLive = document.querySelector(".play-live");

// ==== State ====
let currentPlayButton = null;
let currentLiveFile = null;
let selectedCategory = "أهم الصوتيات";

const curFiles = files.filter((file) =>
  file.category.includes(selectedCategory)
);

// ==== Utility Functions ====

function getFilesFromLocalStorage() {
  const matchedFiles = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const file = files.find((f) => f.title === key);
    if (file) matchedFiles.push(file);
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

function handelBigFiles(file, secondsToday) {
  let index = 0;
  for (let i = 0; i < file.duration.length; i++) {
    const duration = file.duration[i];
    if (secondsToday > duration) {
      secondsToday -= duration;
      index += 1;
    } else {
      return [index, secondsToday];
    }
  }
  // If we exceed all durations, use last index
  return [file.duration.length - 1, secondsToday];
}

// ==== Playback Logic ====
function playFromTime(file, button) {
  if (currentPlayButton && currentPlayButton !== button) {
    currentPlayButton.textContent = "▶";
  }

  currentPlayButton = button;
  button.textContent = "❚❚";

  const now = new Date();
  const factor = Math.ceil(file.total_duration / 86400) || 1;
  let secondsToday =
    (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) * factor;
  let index = 0;

  if (file.size === "big") {
    [index, secondsToday] = handelBigFiles(file, secondsToday);
  }
  if (file.size !== "big") audio.loop = true;

  const selectedUrl = file.url[index].trim();
  const isLive =
    !selectedUrl.endsWith(".mp3") && !selectedUrl.includes("audmat");

  audio.src = selectedUrl;
  document.querySelector(".playing-audio").textContent = file.title;

  if (isLive) {
    currentLiveFile = file; // Save live file
    document.querySelector(".section-audio").style.display = "none";
    document.querySelector(".live-audio").style.display = "flex";
    audio.controls = false;
    audio.play();
  } else {
    currentLiveFile = null;
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
    audio.addEventListener(
      "ended",
      () => {
        if (file.size === "big") {
          secondsToday =
            now.getHours() * 3600 +
            now.getMinutes() * 60 +
            now.getSeconds() +
            1;
          const seekTime = secondsToday % audio.duration;
          console.log("finished");
          audio.currentTime = seekTime;
          audio.play();
        }
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

// ==== Live Button Logic ====
playLive.onclick = () => {
  if (playLive.textContent === "❚❚") {
    stopAudio(playLive);
    currentPlayButton = null;
  } else if (currentLiveFile) {
    playFromTime(currentLiveFile, playLive);
  } else {
    alert("اختر بثًا مباشرًا أولاً.");
  }
};

// ==== Card UI ====
function createCard(file) {
  const card = document.createElement("div");
  card.className = "card";

  const right = document.createElement("div");
  right.className = "card-right";

  const fav = document.createElement("span");
  fav.className = "fav";
  fav.textContent = "♥";

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
      : files.filter((file) => file.category.includes(selectedCategory));

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
  const randomIndex = Math.floor(Math.random() * files.length);
  const randomFile = files[randomIndex];

  cardsContainer.innerHTML = "";
  createCard(randomFile);

  const lastCard = cardsContainer.querySelector(".card:last-child");
  const playBtn = lastCard.querySelector(".card-right .play");

  playFromTime(randomFile, playBtn);
});

// ==== Init ====
curFiles.forEach((file) => createCard(file));
handleCategoryClick();
