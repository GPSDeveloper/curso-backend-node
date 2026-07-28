const nav = document.getElementById("lessonNav");
const content = document.getElementById("content");
const pageTitle = document.getElementById("pageTitle");
const lessonBadge = document.getElementById("lessonBadge");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const sidebarToggle = document.getElementById("sidebarToggle");

function renderNav() {
  const groups = {};

  LESSONS.forEach((lesson) => {
    if (!groups[lesson.module]) groups[lesson.module] = [];
    groups[lesson.module].push(lesson);
  });

  nav.innerHTML = Object.entries(groups)
    .map(
      ([module, items]) => `
      <div class="lesson-group">
        <p class="lesson-group-title">${module}</p>
        ${items
          .map(
            (lesson) => `
          <button
            class="lesson-link${lesson.comingSoon ? " coming-soon" : ""}"
            data-id="${lesson.id}"
            ${lesson.comingSoon ? "disabled" : ""}
          >
            <span class="num">${lesson.number}</span>
            <span class="info">
              <strong>${lesson.title}</strong>
              <small>${lesson.subtitle}</small>
            </span>
          </button>
        `
          )
          .join("")}
      </div>
    `
    )
    .join("");

  nav.querySelectorAll(".lesson-link:not(.coming-soon)").forEach((btn) => {
    btn.addEventListener("click", () => {
      loadLesson(btn.dataset.id);
      closeSidebar();
    });
  });
}

function loadLesson(id) {
  const lesson = LESSONS.find((l) => l.id === id);
  if (!lesson || lesson.comingSoon) return;

  pageTitle.textContent = lesson.title;
  lessonBadge.textContent = `Aula ${lesson.number}`;
  content.innerHTML = lesson.content;

  nav.querySelectorAll(".lesson-link").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });

  history.replaceState(null, "", `#${id}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("visible");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("visible");
}

menuBtn.addEventListener("click", openSidebar);
sidebarToggle.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

renderNav();

const hash = location.hash.replace("#", "");
const firstAvailable = LESSONS.find((l) => !l.comingSoon);
loadLesson(hash && LESSONS.some((l) => l.id === hash) ? hash : firstAvailable.id);
