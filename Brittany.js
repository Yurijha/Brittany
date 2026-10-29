const header = document.querySelector(".topbar");
if (header) {
  window.addEventListener(
    "scroll",
    () => header.classList.toggle("scrolled", scrollY > 30),
    { passive: true },
  );
}

// The typewriter belongs to the homepage; contact.html has no hero heading.
const name = "Uriane Robinson";
const target = document.querySelector("#type-name");
if (target) {
  let i = 0;
  target.textContent = "";
  const type = () => {
    if (i < name.length) {
      target.textContent += name[i++];
      setTimeout(type, 75);
    }
  };
  setTimeout(type, 450);
}

// Accessible mobile navigation: close after choosing a destination or pressing Escape.
const menuButton = document.querySelector(".menu");
const primaryNavigation = document.querySelector("#primary-navigation");
if (header && menuButton && primaryNavigation) {
  const setMenuOpen = (open) => {
    header.classList.toggle("nav-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuButton.textContent = open ? "×" : "☰";
  };
  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });
  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
}
