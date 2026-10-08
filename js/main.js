const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

const skills = [
  { name: "HTML5", icon: "imgs/html5new.svg" },
  { name: "CSS3", icon: "imgs/css-3-logo.svg" },
  { name: "JavaScript", icon: "imgs/javascript.svg" },
  { name: "TypeScript", icon: "imgs/typescript.svg" },
  { name: "React JS", icon: "imgs/react-1.svg" },
  { name: "Bootstrap 5", icon: "imgs/bootstrap-4.svg" },
  { name: "Tailwind CSS", icon: "imgs/Tailwind_CSS_Logo.svg.png" },
  { name: "Git", icon: "imgs/git.svg" },
  { name: "GitHub", icon: "imgs/github.png" },
  { name: "Node JS", icon: "imgs/nodejs.svg" },
  {
    name: "Express JS",
    icon: "imgs/express-js-logo-png_seeklogo-339850.png",
  },
  { name: "MongoDB", icon: "imgs/mongodb.webp" },
];
const skillsGrid = document.getElementById("skills-grid");
skills.forEach((s, i) => {
  const delay = (i % 4) * 0.08;
  skillsGrid.innerHTML += `
          <div class="skill-card reveal" style="transition-delay:${delay}s">
            <img src="${s.icon}" alt="${s.name}" class="skill-icon" />
            <div class="skill-name">${s.name}</div>
          </div>`;
});

const projectsRow = document.getElementById("projects-row");

const setUpProjects = async () => {
  try {
    const response = await fetch("../data/dummy.json");
    const data = await response.json();
    addProjects(data);
  } catch (error) {
    console.log(error);
  }
};

setUpProjects();

function addProjects(data) {
  let projectsData = "";
  for (let i = 0; i < data.length; i++) {
    projectsData += `
          <div class="col-project">
            <div class="project down-up">
              <div class="project-thumb">
                <img src="${data[i].img}" alt="${data[i].name}" />
                <span class="project-num">0${i + 1}</span>
              </div>
              <div class="project-content">
                <h3 class="project-title">${data[i].name}</h3>
                <p class="project-desc">${data[i].desc}</p>
                <div class="project-tags">
                  ${data[i].tools.map((t) => `<span class="project-tag">${t}</span>`).join("")}
                </div>
              </div>
              <div class="project-footer">
                <a href="${data[i].github}" target="_blank" class="project-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub <span class="arrow">→</span>
                </a>
                ${
                  data[i]["live-demo"]
                    ? `
                <a href="${data[i]["live-demo"]}" target="_blank" class="project-link project-link--demo">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
                    <path d="M5 5h6v2H7v10h10v-4h2v6H5z"/>
                  </svg>
                  Live Demo <span class="arrow">→</span>
                </a>`
                    : ""
                }
              </div>
            </div>
          </div>`;
  }
  projectsRow.innerHTML = projectsData;

  document
    .querySelectorAll("#projects-row .reveal, #projects-row .project")
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

  document.querySelectorAll(".project").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("big"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("big"));
  });
}

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
revealEls.forEach((el) => observer.observe(el));

document.querySelectorAll("a, button, .skill-card, .project").forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("big"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("big"));
});
