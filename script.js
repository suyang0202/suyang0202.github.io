const translations = {
  zh: {
    brand: "蘇暘",
    navAbout: "關於",
    navWork: "事蹟",
    navContact: "聯絡",
    heroEyebrow: "台北醫學大學牙醫學系大一新生 / 小說愛好者",
    heroTitle: "蘇暘",
    heroLead: "從病人走向治療者，期許成為一位具有專業能力和同理心的牙醫師。",
    heroLocation: "台北 Taipei",
    heroStatus: "牙醫系新鮮人",
    heroFocus: "閱讀 × 醫療 × 同理心",
    specSignal: "IELTS",
    specProjects: "TOEIC",
    specMotion: "英文成果",
    aboutEyebrow: "About",
    aboutTitle: "關於我",
    aboutCardTitle: "我是誰",
    aboutBody: "我是一位愛好閱讀的牙醫系學生，因為從小豐富的牙醫治療經驗而產生成為一位牙醫師的想法。期許自己未來能夠成為一位同時具備專業知識與同理心，能夠為病患找回自信與笑容的牙醫師。",
    skillsTitle: "學習與興趣",
    workEyebrow: "Milestones",
    workTitle: "事蹟",
    m1Title: "取得雅思 8.5 分",
    m1Body: "以穩定的閱讀與表達能力完成 IELTS 測驗，作為未來醫學學習與國際交流的基礎。",
    m2Title: "多益 980 分",
    m2Body: "在聽力與閱讀測驗中取得高分，持續培養能理解專業文獻與清楚溝通的語言能力。",
    m3Title: "英文學測作文佳作",
    m3Body: "透過文字整理觀點，也在閱讀小說的過程中練習理解不同角色與人生處境。",
    dataEyebrow: "Profile Notes",
    dataTitle: "在書頁與診間之間前進",
    dataBody: "閱讀讓我練習理解人，牙醫治療經驗讓我知道病人的不安。這張電子名片記錄一位牙醫系新生的起點。",
    metricIdeas: "雅思成績",
    metricTalks: "多益成績",
    metricCities: "重要里程",
    contactEyebrow: "Contact",
    contactTitle: "聯絡我",
    contactCardTitle: "歡迎與我聯絡",
    contactBody: "如果你想聊牙醫學習、英文準備、小說閱讀，或只是分享一本最近讀到的好書，歡迎寄信給我。",
    footer: "© 2026 蘇暘 Jimmy Su。保持閱讀，也保持溫柔。"
  },
  en: {
    brand: "Jimmy Su",
    navAbout: "About",
    navWork: "Milestones",
    navContact: "Contact",
    heroEyebrow: "Freshman in Dentistry at Taipei Medical University / Novel Lover",
    heroTitle: "Jimmy Su",
    heroLead: "From patient to future healer, I hope to become a dentist with both professional ability and empathy.",
    heroLocation: "Taipei, Taiwan",
    heroStatus: "Dentistry Freshman",
    heroFocus: "Reading × Healthcare × Empathy",
    specSignal: "IELTS",
    specProjects: "TOEIC",
    specMotion: "English Milestone",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutCardTitle: "Who I Am",
    aboutBody: "I am a dentistry student who loves reading. Growing up with many dental treatment experiences led me to imagine becoming a dentist myself. I hope to become a clinician with both professional knowledge and empathy, helping patients regain confidence and smiles.",
    skillsTitle: "Studies & Interests",
    workEyebrow: "Milestones",
    workTitle: "Milestones",
    m1Title: "IELTS 8.5",
    m1Body: "Completed the IELTS exam with strong reading and expression skills, building a foundation for future medical study and international exchange.",
    m2Title: "TOEIC 980",
    m2Body: "Earned a high score in listening and reading while continuing to build the language ability needed for professional literature and clear communication.",
    m3Title: "English GSAT Essay Honorable Mention",
    m3Body: "Writing helped me organize ideas, while reading novels taught me to understand different characters and life situations.",
    dataEyebrow: "Profile Notes",
    dataTitle: "Between Books and the Clinic",
    dataBody: "Reading teaches me to understand people; dental treatment experiences taught me what patients may fear. This card marks the beginning of a dentistry freshman.",
    metricIdeas: "IELTS Score",
    metricTalks: "TOEIC Score",
    metricCities: "Milestone Year",
    contactEyebrow: "Contact",
    contactTitle: "Contact",
    contactCardTitle: "Feel free to reach out",
    contactBody: "I would be happy to talk about dentistry, English preparation, novels, or a good book you recently read.",
    footer: "© 2026 Jimmy Su. Keep reading, stay gentle."
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
  document.title = language === "zh" ? "蘇暘 | Jimmy Su" : "Jimmy Su | Personal Card";
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
    const hasDecimal = !Number.isInteger(target);
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 1.4,
      ease: "power2.out",
      onUpdate: () => {
        counter.textContent = hasDecimal ? state.value.toFixed(1) : Math.round(state.value);
      },
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
    ? ["rgba(216,166,79,", "rgba(184,106,84,", "rgba(126,155,116,"]
    : ["rgba(169,111,44,", "rgba(156,79,63,", "rgba(95,125,96,"];

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
