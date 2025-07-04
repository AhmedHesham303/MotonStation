const audio = document.getElementById("player");
const cardsContainer = document.querySelector(".cards");
const randomButton = document.getElementById("random-play");
let currentPlayButton = null;

const files = [
  {
    title: "الأذكار والآداب",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0101AlAthkaar_AbdulAzizAsSini.mp3",
  },
  {
    title: "نواقض الإسلام",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0203NawaaqidAlIslaam_AbdulAzizAsSini.mp3",
  },
  {
    title: "القواعد الأربع",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0202AlQawaidAlArba_AbdulAzizAsSini.mp3",
  },
  {
    title: "الأصول الثلاثة ودليلها",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0201AlUsulAtThalaath_AbdulAzizAsSini.mp3",
  },
  {
    title: "الأربعين النووية",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0204AlArbaunAnNawawiyah_AbdulAzizAsSini.mp3",
  },
  {
    title: "تحفة الأطفال",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0301ThufatUlAtfaal_AbdulAzizAsSini.mp3",
  },
  {
    title: "شروط الصلاة وأركانها وواجباتها",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0302ShurutAsSalaah_AbdulAzizAsSini.mp3",
  },
  {
    title: "كتاب التوحيد",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0303KitaabAtTawheed_AbdulAzizAsSini.mp3",
  },
  {
    title: "منظومة البيقونية",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0401AlBayqooni_AbdulAzizAsSini.mp3",
  },
  {
    title: "قصيدة أبي إسحاق الإلبيري",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0402AlIlbiri_AbdulAzizAsSini.mp3",
  },
  {
    title: "المقدمة الآجرومية",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0403AlAajurrumiyyah_AbdulAzizAsSini.mp3",
  },
  {
    title: "العقيدة الواسطية",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0404AlWaasitiyyah_AbdulAzizAsSini.mp3",
  },
  {
    title: "الورقات",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0501AlWaraqat_AbdulAzizAsSini.mp3",
  },
  {
    title: "عنوان الحكم",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0502UnwanAlHikm_AbdulAzizAsSini.mp3",
  },
  {
    title: "الرحبية",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0503ArRahbiyah_AbdulAzizAsSini.mp3",
  },
  {
    title: "العقيدة الطحاوية",
    url: "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0504AtTahawiyah_AbdulAzizAsSini.mp3",
  },
  {
    title: "بلوغ المرام",
    url: "  https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0601Buloogh_AbdulAzizAsSini.mp3",
  },
  {
    title: "زاد المستقنع في اختصار المقنع",
    url: "    https://files.a-alqasim.com/audio/Mutoon/MaajidMustafa/0602Zaad_MaajidMustafa.mp3",
  },
  {
    title: "ألفية ابن مالك",
    url: "    https://files.a-alqasim.com/audio/Mutoon/AbdulGhaniSaadiqAlFaqeeh/0603AlfiyyahIbnMaalik_AbdulGhaniSaadiqAlFaqeeh.mp3",
  },
  {
    title: "نخبة الفكر",
    url: "      https://files.a-alqasim.com/audio/Mutoon/IbraheemAlMihdaar/0801Nukhbah_IbraheemAlMihdaar.mp3",
  },
  {
    title: "عمدة الأحكام",
    url: "     https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0802AlUmdatuFilAhkaam_AbdulAzizAsSini.mp3",
  },
  {
    title: "ألفية العراقي في الحديث",
    url: "      https://files.a-alqasim.com/audio/Mutoon/YusufAlAynaaty/0805AlfiyyahAlIraaqi_YusufAlAynaaty.mp3",
  },
  {
    title: "الشاطبية",
    url: "https://files.a-alqasim.com/audio/Mutoon/MahmudHaleem/0814AsShaatibiyyah_MahmudHaleem.mp3",
  },

  {
    title: "الحموية",
    url: "          https://files.a-alqasim.com/audio/Mutoon/YahfazAsShanqiti/0815AlHamawiyyah_YahfazAsShanqiti.mp3",
  },
];

function playFromTime(file, button) {
  if (currentPlayButton) {
    currentPlayButton.textContent = "▶";
  }
  currentPlayButton = button;
  button.textContent = "❚❚";
  audio.src = file.url;
  audio.addEventListener(
    "loadedmetadata",
    () => {
      const now = new Date();
      const secondsToday =
        now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
      const seekTime = secondsToday % audio.duration;
      audio.currentTime = seekTime;
      audio.play();
    },
    { once: true }
  );
}
// function playFromTime(file, button) {
//   if (currentPlayButton) {
//     currentPlayButton.textContent = "▶";
//   }
//   currentPlayButton = button;
//   button.textContent = "❚❚";
//   audio.src = file.url;
//   audio.currentTime = 0;
//   audio.play();
// }

function createCard(file) {
  const card = document.createElement("div");
  card.className = "card";

  const top = document.createElement("div");
  top.className = "card-top";

  const fav = document.createElement("span");
  fav.className = "fav";
  fav.textContent = "♥";

  const playBtn = document.createElement("button");
  playBtn.className = "play";
  playBtn.textContent = "▶";
  playBtn.onclick = () => playFromTime(file, playBtn);

  top.appendChild(fav);
  top.appendChild(playBtn);

  const title = document.createElement("h3");
  title.textContent = file.title;

  card.appendChild(top);
  card.appendChild(title);

  cardsContainer.appendChild(card);
}

files.forEach((file) => createCard(file));

randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * files.length);
  playFromTime(files[randomIndex]);
});

// تحميل كل الملفات الصوتية في الخلفية
// files.forEach((file) => {
//   const audioPreload = new Audio();
//   audioPreload.src = file.url;
//   audioPreload.preload = "auto";
// });

// async function getCacheSize(cacheName) {
//   const cache = await caches.open(cacheName);
//   const requests = await cache.keys();
//   let totalSize = 0;

//   for (const req of requests) {
//     const response = await cache.match(req);
//     const blob = await response.blob();
//     totalSize += blob.size;
//   }

//   return (totalSize / 1024 / 1024).toFixed(2); // MB
// }

// getCacheSize("moton-cache").then((size) => {
//   console.log(`Cache size: ${size} MB`);
// });
