// Mobile menu toggle
const toggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
toggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }),
);

// Marquee content (duplicated for seamless loop)
const cats = [
  "Camisetas",
  "Canecas",
  "Kits de presente",
  "Datas especiais",
  "Personalização de marca",
  "Aniversários",
  "Casamentos",
];
const sparkSVG =
  '<svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A227" aria-hidden="true"><path d="M12 2l1.8 6.4L20 10l-6.2 1.6L12 18l-1.8-6.4L4 10l6.2-1.6L12 2z"/></svg>';
const track = document.querySelector("#marquee > div");
const html = cats.map((c) => `<span>${c} ${sparkSVG}</span>`).join("");
track.innerHTML = html + html;

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Year
document.getElementById("year").textContent = new Date().getFullYear();
