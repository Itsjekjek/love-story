/* ============================================================
   LOVE STORY SETTINGS — EDIT THESE FIRST ❤️
   ============================================================ */

const LOVE_CONFIG = {
  // 1) ADD YOUR NAMES
  yourName: "Your Boy",
  girlfriendName: "Christineeeeeeee",
  finalTitle: "Forever isn't long enough with you. ❤️",

  // 2) ADD YOUR ANNIVERSARY / START DATE
  // Format: "YYYY-MM-DDTHH:MM:SS"
  // Example: "2024-02-14T19:30:00"
  togetherSince: "2024-02-14T19:30:00",

  // 3) ADD YOUR LOVE LETTER
  // Tip: Use blank lines between paragraphs. Replace this whole text with your own letter.
  loveLetter: `My dearest Christineeeeeeee,

Do you know why I'm always trying my best to show you how much I love you? It's because I know I've never been like this with anyone before. With you, I learned how to love someone this deeply, and honestly, I never knew I could love someone this much until I met you.

When I'm with you, I get to see the happiest version of myself. You make me feel like I can be myself, and somehow you made me happier and made me want to become a better person too. You're one of the reasons why I became the person I am today, and I'll always be grateful for that.

I love the little things — the way you laugh at my dumb jokes, the way you look at me when you think I'm not watching, and how even ordinary days feel special just because you're in them. You turned my world softer, warmer, and so much brighter.

That's why as long as you're here, I'll never get tired of showing you how much I love you. I'll keep reminding you, even through the little things, because I never want you to doubt how much you mean to me. I know I'm not perfect, but I'll always do my best to make you feel loved by me.

Thank you for choosing me. Thank you for staying. Thank you for being you.

Forever yours,
Your Boy ♡`,

  // 4) ADD YOUR MUSIC
  // Put the audio file inside assets/, then change this path.
  // Example: musicPath: "assets/our-song.mp3"
  musicPath: "assets/our-song.mp3",
  songTitle: "Our Song ❤️",

  // 5) ADD YOUR PHOTOS
  // Example placeholders use .svg for now. Replace with your own .jpg / .png later:
  //   1. Put files in assets/ (e.g. photo1.jpg)
  //   2. Change the src paths below to match
  photos: [
    { src: "assets/photo1.svg", caption: "My favorite smile ❤️" },
    { src: "assets/photo2.svg", caption: "Us being us 🥰" },
    { src: "assets/photo3.svg", caption: "A memory I keep close 🌸" },
    { src: "assets/photo4.svg", caption: "My favorite person 💕" },
    { src: "assets/photo5.svg", caption: "One of our little moments ✨" },
    { src: "assets/photo6.svg", caption: "Still choosing you ❤️" }
  ],

  // 6) ADD / EDIT YOUR MEMORIES
  // Replace the descriptions and photo paths with your real stories.
  memories: [
    {
      date: "February 14, 2024",
      title: "The Love Of My Life ❤️",
      description: "This is where our story started. The first conversation, the first nervous smile, and the quiet moment I realized this felt different — in the best way. From that day, everything changed.",
      photo: "assets/memory1.svg"
    },
    {
      date: "Our First Date",
      title: "💕 Our First Date",
      description: "We went somewhere simple, but I still remember every detail — what we talked about, how you laughed, and how the whole world felt quieter when I was with you. I knew I wanted more days like that.",
      photo: "assets/memory2.svg"
    },
    {
      date: "A Favorite Day",
      title: "🌸 Our Favorite Memory",
      description: "One of those days that still makes me smile whenever I think about it. No big plans, just us, good food, soft conversations, and the feeling that home is wherever you are.",
      photo: "assets/memory3.svg"
    },
    {
      date: "Always",
      title: "🥰 A Special Moment",
      description: "The story is still being written. Every ordinary Tuesday and every little adventure is another chapter. I can't wait to keep filling this timeline with more of us.",
      photo: ""
    }
  ],

  // 7) RANDOM LOVE NOTES
  // These appear when someone clicks "Give Me a Love Note"
  loveNotes: [
    "If I could choose one person to annoy for the rest of my life, it would still be you. 😂❤️",
    "You make ordinary days feel like something worth remembering.",
    "I don't need a perfect life. I just want a life where I get to keep choosing you.",
    "Your smile is still one of my favorite things in this entire world.",
    "No matter how many times I meet you, I think I'd still fall for you.",
    "You are my favorite notification. Every. Single. Time. 💕",
    "Home isn't always a place. Sometimes it's a person. For me, it's you.",
    "Even on the busiest days, you're the first person I want to tell everything to.",
    "I fall for you a little more every time you look at me like that.",
    "Thank you for being the softest part of my life."
  ],

  // 8) REASONS I LOVE YOU
  reasons: [
    ["♥", "Your smile"],
    ["🌷", "Your kindness"],
    ["😂", "The way you make me laugh"],
    ["🤍", "The way you care"],
    ["✨", "Your little habits"],
    ["🥰", "The way you make me feel safe"],
    ["🌙", "The late-night conversations"],
    ["💗", "Because you're you"],
    ["☀️", "How you brighten my days"],
    ["🫶", "How you always try"],
    ["🎀", "Your beautiful heart"],
    ["♾️", "Because I simply choose you"]
  ]
};


/* ============================================================
   HELPERS/* ============================================================
   HELPERS
   ============================================================ */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

function makePlaceholder(label = "Our Photo") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900">
    <defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#f8d7e6"/><stop offset="1" stop-color="#d8c6f2"/></linearGradient></defs>
    <rect width="900" height="900" fill="url(#g)"/>
    <text x="450" y="410" text-anchor="middle" font-family="Arial" font-size="70" fill="#7b4660">♥</text>
    <text x="450" y="505" text-anchor="middle" font-family="Arial" font-size="34" fill="#7b4660">${escapeHTML(label)}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function setImageFallback(img, label) {
  img.onerror = () => {
    img.onerror = null;
    img.src = makePlaceholder(label);
  };
}


/* ============================================================
   PERSONAL TEXT
   ============================================================ */

document.title = `Our Little Love Story ❤️ | ${LOVE_CONFIG.girlfriendName}`;

const letterName = $("#letterName");
if (letterName) letterName.textContent = LOVE_CONFIG.girlfriendName;

const finalTitle = $(".final-section h2");
if (finalTitle) finalTitle.textContent = LOVE_CONFIG.finalTitle;

const songName = $("#songName");
if (songName) songName.textContent = LOVE_CONFIG.songTitle;

const music = $("#music");
music.src = LOVE_CONFIG.musicPath;
setImageFallback(document.querySelector(".photo-left img"), "Your Photo");
setImageFallback(document.querySelector(".photo-right img"), "Her Photo");


/* ============================================================
   LOVE COUNTER
   ============================================================ */

function updateCounter() {
  const start = new Date(LOVE_CONFIG.togetherSince);
  const now = new Date();
  let diff = Math.max(0, now - start);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(diff / day);
  diff %= day;
  const hours = Math.floor(diff / hour);
  diff %= hour;
  const minutes = Math.floor(diff / minute);
  diff %= minute;
  const seconds = Math.floor(diff / second);

  $("#days").textContent = days.toLocaleString();
  $("#hours").textContent = String(hours).padStart(2, "0");
  $("#minutes").textContent = String(minutes).padStart(2, "0");
  $("#seconds").textContent = String(seconds).padStart(2, "0");
}
updateCounter();
setInterval(updateCounter, 1000);


/* ============================================================
   LOVE LETTER TYPING EFFECT
   ============================================================ */

const letterText = $("#letterText");
const readMore = $("#readMore");
let typingFinished = false;
let typingStarted = false;
const letterParagraphs = LOVE_CONFIG.loveLetter.split(/\n\s*\n/);
const previewLength = 500;
let letterExpanded = false;

function renderLetterText(text) {
  letterText.innerHTML = "";
  const paragraphs = text.split(/\n\s*\n/);
  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    letterText.appendChild(p);
  });
}

function typeLetter() {
  if (typingStarted) return;
  typingStarted = true;
  const fullText = LOVE_CONFIG.loveLetter;
  let index = 0;
  letterText.textContent = "";

  const interval = setInterval(() => {
    letterText.textContent = fullText.slice(0, index++);
    if (index > fullText.length) {
      clearInterval(interval);
      typingFinished = true;
      renderLetterText(fullText);
    }
  }, 12);
}

readMore.addEventListener("click", () => {
  letterExpanded = !letterExpanded;
  if (letterExpanded) {
    renderLetterText(LOVE_CONFIG.loveLetter);
    readMore.textContent = "Show Less ❤️";
  } else {
    const preview = LOVE_CONFIG.loveLetter.slice(0, previewLength);
    renderLetterText(preview + (LOVE_CONFIG.loveLetter.length > previewLength ? "..." : ""));
    readMore.textContent = "Read More ❤️";
  }
});


/* ============================================================
   GALLERY + LIGHTBOX
   ============================================================ */

const galleryGrid = $("#galleryGrid");
let currentPhoto = 0;

function renderGallery() {
  galleryGrid.innerHTML = "";
  LOVE_CONFIG.photos.forEach((photo, index) => {
    const card = document.createElement("article");
    card.className = "gallery-card reveal";
    card.innerHTML = `
      <span class="gallery-heart">♥</span>
      <img src="${escapeHTML(photo.src)}" alt="${escapeHTML(photo.caption)}" />
      <div class="gallery-caption">${escapeHTML(photo.caption)}</div>
    `;
    const img = card.querySelector("img");
    setImageFallback(img, `Photo ${index + 1}`);
    card.addEventListener("click", () => openLightbox(index));
    galleryGrid.appendChild(card);
  });
}
renderGallery();

const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
const lightboxCaption = $("#lightboxCaption");

function openLightbox(index) {
  currentPhoto = index;
  const photo = LOVE_CONFIG.photos[currentPhoto];
  lightboxImage.src = photo.src;
  setImageFallback(lightboxImage, `Photo ${currentPhoto + 1}`);
  lightboxImage.alt = photo.caption;
  lightboxCaption.textContent = photo.caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function movePhoto(direction) {
  currentPhoto = (currentPhoto + direction + LOVE_CONFIG.photos.length) % LOVE_CONFIG.photos.length;
  openLightbox(currentPhoto);
}
$("#lightboxClose").addEventListener("click", closeLightbox);
$("#lightboxPrev").addEventListener("click", () => movePhoto(-1));
$("#lightboxNext").addEventListener("click", () => movePhoto(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") movePhoto(-1);
  if (e.key === "ArrowRight") movePhoto(1);
});


/* ============================================================
   TIMELINE
   ============================================================ */

const timelineList = $("#timelineList");

function renderTimeline() {
  timelineList.innerHTML = "";
  LOVE_CONFIG.memories.forEach((memory, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";
    item.innerHTML = `
      <span class="timeline-dot"></span>
      <article class="memory-card">
        <small>${escapeHTML(memory.date)}</small>
        <h3>${escapeHTML(memory.title)}</h3>
        <div class="memory-desc">
          <p>${escapeHTML(memory.description)}</p>
          ${memory.photo ? `<img class="memory-photo" src="${escapeHTML(memory.photo)}" alt="${escapeHTML(memory.title)}" />` : ""}
        </div>
      </article>
    `;
    const image = item.querySelector(".memory-photo");
    if (image) setImageFallback(image, `Memory ${index + 1}`);
    item.querySelector(".memory-card").addEventListener("click", () => item.classList.toggle("open"));
    timelineList.appendChild(item);
  });
}
renderTimeline();


/* ============================================================
   RANDOM LOVE NOTES
   ============================================================ */

$("#loveNoteBtn").addEventListener("click", () => {
  const notes = LOVE_CONFIG.loveNotes;
  const current = $("#loveNote").textContent;
  let next = notes[Math.floor(Math.random() * notes.length)];
  if (notes.length > 1) {
    while (next === current) next = notes[Math.floor(Math.random() * notes.length)];
  }
  $("#loveNote").animate(
    [{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 400, easing: "ease-out" }
  );
  $("#loveNote").textContent = next;
});


/* ============================================================
   REASONS I LOVE YOU
   ============================================================ */

const reasonsGrid = $("#reasonsGrid");
let reasonsVisible = 4;

function renderReasons() {
  reasonsGrid.innerHTML = "";
  LOVE_CONFIG.reasons.slice(0, reasonsVisible).forEach(([icon, text]) => {
    const card = document.createElement("article");
    card.className = "reason-card reveal visible";
    card.innerHTML = `<div><span>${escapeHTML(icon)}</span><h3>${escapeHTML(text)}</h3></div>`;
    reasonsGrid.appendChild(card);
  });
  $("#moreReasons").textContent =
    reasonsVisible >= LOVE_CONFIG.reasons.length ? "You found them all ❤️" : "Reveal More Reasons ✨";
}
renderReasons();

$("#moreReasons").addEventListener("click", () => {
  if (reasonsVisible < LOVE_CONFIG.reasons.length) {
    reasonsVisible = Math.min(reasonsVisible + 4, LOVE_CONFIG.reasons.length);
    renderReasons();
  }
});


/* ============================================================
   LOVE METER
   ============================================================ */

let lovePercent = 0;
$("#loveHeart").addEventListener("click", (e) => {
  lovePercent = Math.min(100, lovePercent + Math.floor(Math.random() * 9) + 7);
  $("#loveFill").style.width = `${lovePercent}%`;
  $("#lovePercent").textContent = `${lovePercent}%`;

  burstHearts(e.clientX, e.clientY, 5);

  if (lovePercent >= 100) {
    $("#lovePercent").textContent = "∞%";
    createConfetti(45);
  }
});


/* ============================================================
   MUSIC PLAYER
   ============================================================ */

const musicBtn = $("#musicBtn");
const vinyl = $("#vinyl");

music.volume = Number($("#volume").value);
$("#volume").addEventListener("input", (e) => music.volume = Number(e.target.value));

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicBtn.textContent = "❚❚ Pause";
      vinyl.classList.add("playing");
    } else {
      music.pause();
      musicBtn.textContent = "▶ Play";
      vinyl.classList.remove("playing");
    }
  } catch {
    musicBtn.textContent = "Add your song 🎵";
  }
});
music.addEventListener("ended", () => {
  musicBtn.textContent = "▶ Play";
  vinyl.classList.remove("playing");
});


/* ============================================================
   SECRET MESSAGE
   ============================================================ */

$("#secretBtn").addEventListener("click", () => {
  const message = $("#secretMessage");
  message.hidden = false;
  $("#secretBtn").textContent = "I Told You Not To Click 😂❤️";
  burstHearts(window.innerWidth / 2, window.innerHeight / 2, 18);
});


/* ============================================================
   SURPRISE / CONFETTI / HEART BURST
   ============================================================ */

function createConfetti(amount = 70) {
  const container = $("#confetti");
  container.innerHTML = "";
  const symbols = ["♥", "✦", "✧", "•", "♡"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${-10 - Math.random() * 20}%`;
    piece.style.fontSize = `${10 + Math.random() * 18}px`;
    piece.style.animationDelay = `${Math.random() * .8}s`;
    piece.style.animationDuration = `${1.8 + Math.random() * 1.8}s`;
    piece.style.color = ["#ef6f9c","#9b78c8","#f5a5bd","#fff","#d88aa9"][Math.floor(Math.random()*5)];
    container.appendChild(piece);
  }
  setTimeout(() => container.innerHTML = "", 5000);
}

function burstHearts(x, y, amount = 10) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.textContent = Math.random() > .3 ? "♥" : "✦";
    heart.style.position = "fixed";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";
    heart.style.color = ["#ef6f9c","#9b78c8","#ffb1cc","#fff"][Math.floor(Math.random()*4)];
    heart.style.fontSize = `${12 + Math.random() * 18}px`;
    document.body.appendChild(heart);

    const dx = (Math.random() - .5) * 220;
    const dy = -(60 + Math.random() * 180);
    heart.animate(
      [
        { transform:"translate(-50%,-50%) scale(.5)", opacity:0 },
        { transform:"translate(-50%,-50%) scale(1)", opacity:1, offset:.15 },
        { transform:`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.2)`, opacity:0 }
      ],
      { duration:900 + Math.random()*500, easing:"cubic-bezier(.2,.8,.2,1)" }
    ).onfinish = () => heart.remove();
  }
}

function surprise() {
  createConfetti(100);
  burstHearts(window.innerWidth / 2, window.innerHeight * .45, 28);

  const final = $("#final");
  final.scrollIntoView({ behavior: "smooth", block: "center" });

  setTimeout(() => {
    const message = document.createElement("div");
    message.textContent = `I love you, ${LOVE_CONFIG.girlfriendName}. ❤️`;
    Object.assign(message.style, {
      position:"fixed", left:"50%", top:"50%", transform:"translate(-50%,-50%)",
      zIndex:"1000", padding:"22px 30px", borderRadius:"999px",
      background:"rgba(255,255,255,.95)", color:"#8d4866",
      fontFamily:"Great Vibes, cursive", fontSize:"34px",
      boxShadow:"0 20px 70px rgba(0,0,0,.25)", textAlign:"center"
    });
    document.body.appendChild(message);
    message.animate(
      [{opacity:0, transform:"translate(-50%,-50%) scale(.7)"},{opacity:1,transform:"translate(-50%,-50%) scale(1)"}],
      {duration:450,easing:"ease-out"}
    );
    setTimeout(() => {
      message.animate([{opacity:1},{opacity:0}], {duration:500}).onfinish = () => message.remove();
    }, 2200);
  }, 450);
}

$("#surpriseBtn").addEventListener("click", surprise);
$("#surpriseHero").addEventListener("click", surprise);


/* ============================================================
   CURSOR / CLICK HEARTS
   ============================================================ */

document.addEventListener("click", (e) => {
  if (e.target.closest("button, a, .gallery-card, .memory-card")) {
    burstHearts(e.clientX, e.clientY, 2);
  }
});


/* ============================================================
   FLOATING HEARTS + NIGHT SKY
   ============================================================ */

const floatingHearts = $("#floating-hearts");
function spawnFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .2 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 22}px`;
  heart.style.animationDuration = `${8 + Math.random() * 10}s`;
  heart.style.animationDelay = `${Math.random()}s`;
  floatingHearts.appendChild(heart);
  setTimeout(() => heart.remove(), 19000);
}
setInterval(spawnFloatingHeart, 850);
for (let i = 0; i < 12; i++) spawnFloatingHeart();

const stars = $("#stars");
for (let i = 0; i < 75; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  star.style.opacity = bodyIsDark() ? ".8" : "0";
  stars.appendChild(star);
}
function bodyIsDark() { return document.body.classList.contains("dark"); }


/* ============================================================
   NIGHT MODE
   ============================================================ */

const savedTheme = localStorage.getItem("love-theme");
if (savedTheme === "dark") document.body.classList.add("dark");

function updateStars() {
  $$(".star").forEach(star => star.style.opacity = document.body.classList.contains("dark") ? ".8" : "0");
}
$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("love-theme", document.body.classList.contains("dark") ? "dark" : "light");
  $("#themeToggle").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  updateStars();
});
$("#themeToggle").textContent = document.body.classList.contains("dark") ? "☀" : "☾";


/* ============================================================
   SCROLL REVEAL
   ============================================================ */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      if (entry.target.closest("#letter")) typeLetter();
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

$$(".reveal").forEach(el => revealObserver.observe(el));


/* ============================================================
   SMOOTH BACK TO TOP + LETTER DATE
   ============================================================ */

$("#backTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$("#letterDate").textContent = new Date().toLocaleDateString(undefined, {
  year: "numeric", month: "long", day: "numeric"
});

/* Accessibility: prevent background scrolling when lightbox is open. */
window.addEventListener("resize", () => {
  if (window.innerWidth > 850) document.body.style.overflow = "";
});
