const translations = {
  zh: {
    brand: "林曜辰",
    navAbout: "關於",
    navWork: "事蹟",
    navContact: "聯絡",
    heroEyebrow: "互動設計師 / 資料敘事者 / 城市觀察家",
    heroTitle: "林曜辰",
    heroLead: "把複雜資訊變成會呼吸的介面，讓科技看起來冷靜，使用起來卻很有溫度。",
    heroLocation: "台北 Taipei",
    heroStatus: "開放合作中",
    heroFocus: "AI × 產品體驗",
    specSignal: "故事訊號",
    specProjects: "完成專案",
    specMotion: "動態指數",
    aboutEyebrow: "About",
    aboutTitle: "關於我",
    aboutCardTitle: "我是誰",
    aboutBody: "林曜辰是一位虛構的產品設計師，擅長把資料、動畫與敘事節奏揉成一個好理解的互動體驗。週末會在城市裡拍霓虹招牌，也會把咖啡店的收據整理成小型資料視覺化。",
    skillsTitle: "技能光譜",
    workEyebrow: "Milestones",
    workTitle: "虛構事蹟",
    m1Title: "設計「城市心跳儀表板」",
    m1Body: "將即時交通、天氣與活動資料轉換成沉浸式城市脈搏視覺，入選虛構互動設計獎。",
    m2Title: "發表 AI 原型工作坊",
    m2Body: "帶領 600 位產品人用一天做出會動、會說明、會收集回饋的互動原型。",
    m3Title: "完成 100 天創意程式挑戰",
    m3Body: "每天用原生 JavaScript 寫一個微型視覺實驗，累積一座可互動的數位花園。",
    dataEyebrow: "Live Profile",
    dataTitle: "一張會動的電子名片",
    dataBody: "數字、興趣、專案狀態與社群入口以動態方式呈現，像產品發表頁一樣把個人故事推向前景。",
    metricIdeas: "點子草稿",
    metricTalks: "公開分享",
    metricCities: "走訪城市",
    contactEyebrow: "Contact",
    contactTitle: "聯絡我",
    contactCardTitle: "一起做點漂亮又有用的東西",
    contactBody: "歡迎聊產品設計、資料視覺化、互動網頁、AI 工作流程，或只是交換一份很好喝的咖啡地圖。",
    footer: "© 2026 林曜辰。虛構人物，真實動態。"
  },
  en: {
    brand: "Yuchen Lin",
    navAbout: "About",
    navWork: "Milestones",
    navContact: "Contact",
    heroEyebrow: "Interaction Designer / Data Storyteller / City Observer",
    heroTitle: "Yuchen Lin",
    heroLead: "I turn complex information into interfaces that breathe, making technology feel calm, clear, and quietly human.",
    heroLocation: "Taipei, Taiwan",
    heroStatus: "Open to collaborate",
    heroFocus: "AI × Product Experience",
    specSignal: "Story Signal",
    specProjects: "Projects Shipped",
    specMotion: "Motion Index",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutCardTitle: "Who I Am",
    aboutBody: "Yuchen Lin is a fictional product designer who blends data, motion, and narrative rhythm into understandable interactive experiences. On weekends, he photographs neon signs and turns cafe receipts into tiny data visualizations.",
    skillsTitle: "Skill Spectrum",
    workEyebrow: "Milestones",
    workTitle: "Fictional Wins",
    m1Title: "Designed the City Pulse Dashboard",
    m1Body: "Transformed live traffic, weather, and event feeds into an immersive civic heartbeat visualization for a fictional interaction award.",
    m2Title: "Hosted an AI Prototyping Lab",
    m2Body: "Guided 600 product makers to build moving, explainable, feedback-ready prototypes in one focused day.",
    m3Title: "Completed 100 Days of Creative Code",
    m3Body: "Created a native JavaScript visual experiment every day, growing an interactive digital garden.",
    dataEyebrow: "Live Profile",
    dataTitle: "A Business Card in Motion",
    dataBody: "Numbers, interests, project status, and social links appear dynamically, pushing the personal story forward like a product reveal.",
    metricIdeas: "Idea Drafts",
    metricTalks: "Public Talks",
    metricCities: "Cities Explored",
    contactEyebrow: "Contact",
    contactTitle: "Contact",
    contactCardTitle: "Let’s make something beautiful and useful",
    contactBody: "Reach out for product design, data visualization, interactive websites, AI workflows, or an excellent coffee map exchange.",
    footer: "© 2026 Yuchen Lin. Fictional person, real motion."
  }
};

const root = document.documentElement;
const langButton = document.querySelector("#languageToggle .button-main");
const themeButton = document.querySelector("#themeToggle");
let language = "zh";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key] || node.textContent;
  });
  langButton.textContent = language === "zh" ? "EN" : "繁";
  document.title = language === "zh" ? "林曜辰 | Personal Card" : "Yuchen Lin | Personal Card";
}

document.getElementById("languageToggle").addEventListener("click", () => {
  const next = language === "zh" ? "en" : "zh";
  if (window.gsap) {
    gsap.to("[data-i18n]", {
      y: -10,
      opacity: 0,
      duration: 0.16,
      stagger: 0.006,
      onComplete: () => {
        setLanguage(next);
        gsap.fromTo("[data-i18n]", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.32, stagger: 0.006 });
      }
    });
  } else {
    setLanguage(next);
  }
});

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  themeButton.querySelector(".theme-icon").textContent = nextTheme === "dark" ? "◐" : "●";
});

function initGsap() {
  if (!window.gsap) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }
  if (!window.ScrollTrigger) {
    gsap.to(".reveal", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.06 });
    document.querySelectorAll(".skill-bars b").forEach((bar) => bar.classList.add("fill"));
    document.querySelectorAll(".metric strong").forEach((counter) => {
      counter.textContent = counter.dataset.count;
    });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".reveal", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.08,
    scrollTrigger: { trigger: ".hero", start: "top 72%" }
  });
  gsap.utils.toArray(".section:not(.hero) .reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 82%" }
    });
  });
  gsap.to(".device-card", {
    rotateY: -9,
    rotateX: 6,
    y: -24,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
  gsap.to(".marquee-track", {
    xPercent: -18,
    ease: "none",
    scrollTrigger: { trigger: ".marquee-band", start: "top bottom", end: "bottom top", scrub: 1 }
  });
  document.querySelectorAll(".skill-bars b").forEach((bar) => {
    gsap.to(bar, {
      "--progress": 1,
      scrollTrigger: { trigger: bar, start: "top 88%", once: true },
      onStart: () => bar.classList.add("fill")
    });
  });
  document.querySelectorAll(".metric strong").forEach((counter) => {
    const target = Number(counter.dataset.count);
    gsap.to(counter, {
      textContent: target,
      duration: 1.4,
      ease: "power2.out",
      snap: { textContent: 1 },
      scrollTrigger: { trigger: counter, start: "top 86%", once: true }
    });
  });
}

document.addEventListener("pointermove", (event) => {
  document.querySelectorAll(".magnetic").forEach((item) => {
    const rect = item.getBoundingClientRect();
    const dx = event.clientX - rect.left - rect.width / 2;
    const dy = event.clientY - rect.top - rect.height / 2;
    const distance = Math.hypot(dx, dy);
    if (distance < 110 && window.gsap) {
      gsap.to(item, { x: dx * 0.12, y: dy * 0.12, duration: 0.35, ease: "power3.out" });
    } else if (window.gsap) {
      gsap.to(item, { x: 0, y: 0, duration: 0.45, ease: "power3.out" });
    }
  });
});

const canvas = document.getElementById("auroraCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let pointer = { x: 0.5, y: 0.5 };

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(innerWidth * ratio);
  canvas.height = Math.floor(innerHeight * ratio);
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(86, Math.floor(innerWidth / 13)) }, (_, index) => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: 1 + Math.random() * 3,
    a: Math.random() * Math.PI * 2,
    s: 0.25 + Math.random() * 0.8,
    hue: index % 3
  }));
}

function drawAurora() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  const theme = root.dataset.theme;
  const fade = theme === "dark" ? 0.13 : 0.08;
  const colors = theme === "dark"
    ? ["rgba(84,214,255,", "rgba(255,107,214,", "rgba(167,255,131,"]
    : ["rgba(0,113,227,", "rgba(176,0,185,", "rgba(22,131,58,"];

  const gradient = ctx.createRadialGradient(pointer.x * innerWidth, pointer.y * innerHeight, 0, innerWidth / 2, innerHeight / 2, innerWidth * 0.9);
  gradient.addColorStop(0, colors[0] + fade + ")");
  gradient.addColorStop(0.45, colors[1] + fade * 0.7 + ")");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  particles.forEach((p) => {
    p.a += 0.01 * p.s;
    p.x += Math.cos(p.a) * p.s + (pointer.x - 0.5) * 0.25;
    p.y += Math.sin(p.a * 1.2) * p.s + (pointer.y - 0.5) * 0.25;
    if (p.x < -30) p.x = innerWidth + 30;
    if (p.x > innerWidth + 30) p.x = -30;
    if (p.y < -30) p.y = innerHeight + 30;
    if (p.y > innerHeight + 30) p.y = -30;
    ctx.beginPath();
    ctx.fillStyle = colors[p.hue] + (theme === "dark" ? ".36" : ".24") + ")";
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawAurora);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", (event) => {
  pointer = { x: event.clientX / innerWidth, y: event.clientY / innerHeight };
});

window.addEventListener("load", () => {
  setLanguage("zh");
  resizeCanvas();
  drawAurora();
  initGsap();
});
