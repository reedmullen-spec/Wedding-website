// Shared navigation, footer and countdown for every page.
// To add, remove or rename a page, edit this list.
const PAGES = [
  { href: "index.html", label: "Welcome" },
  { href: "story.html", label: "Our Story" },
  { href: "rsvp.html", label: "RSVP" },
  { href: "timetable.html", label: "Timetable" },
  { href: "where-to-stay.html", label: "Where to Stay" },
  { href: "travel.html", label: "Travel" },
  { href: "wedding-party.html", label: "Wedding Party" },
  { href: "faq.html", label: "Q&A" },
  { href: "gift-list.html", label: "Gift List" },
  { href: "extend-your-trip.html", label: "Looking to extend your trip?" },
  { href: "dresscode.html", label: "Dresscode" },
];

const WEDDING_DATE = new Date("2027-08-28T16:00:00+02:00");

function currentPage() {
  const file = location.pathname.split("/").pop();
  return file === "" ? "index.html" : file;
}

function renderNav() {
  const nav = document.getElementById("site-nav");
  if (!nav) return;
  const here = currentPage();
  const links = PAGES.map(
    (p) =>
      `<li><a href="${p.href}"${p.href === here ? ' aria-current="page"' : ""}>${p.label}</a></li>`
  ).join("");

  nav.className = "site-nav";
  nav.innerHTML = `
    <div class="site-nav__inner">
      <button class="site-nav__toggle" type="button" aria-expanded="false">Menu</button>
      <ul>${links}</ul>
    </div>`;

  const toggle = nav.querySelector(".site-nav__toggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  footer.className = "site-footer";
  footer.textContent = "Holly & Reed";
}

function renderCountdown() {
  const days = Math.floor((WEDDING_DATE - new Date()) / 86400000);
  document.querySelectorAll("[data-countdown]").forEach((el) => {
    el.textContent = days > 0 ? `${days} days` : "Today!";
  });
}

renderNav();
renderFooter();
renderCountdown();
