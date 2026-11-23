
"use strict";

/* =========================================================
   PARVEEN KUMAR — ACADEMIC WEBSITE
   Complete JavaScript File
   ========================================================= */

// Add JS class for animations
document.documentElement.classList.add("js");

// =========================================================
// 1. MOBILE NAVIGATION
// =========================================================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  if (!menuButton || !navLinks) return;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute(
    "aria-label",
    "Open navigation menu"
  );

  navLinks.classList.remove("open");
  document.body.classList.remove("menu-open");
}

if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen
        ? "Open navigation menu"
        : "Close navigation menu"
    );

    navLinks.classList.toggle("open", !isOpen);

    document.body.classList.toggle(
      "menu-open",
      !isOpen
    );

  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {
      closeMenu();
    });

  });

  // Close menu using Escape key
  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });

  // Close menu when resizing to desktop
  window.addEventListener("resize", () => {

    if (window.innerWidth > 780) {
      closeMenu();
    }

  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {

    const isMenuOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (!isMenuOpen) return;

    if (
      !menuButton.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {
      closeMenu();
    }

  });

}

// =========================================================
// 2. SCROLL REVEAL ANIMATIONS
// =========================================================

const revealElements = document.querySelectorAll(
  ".section-heading, " +
  ".about-lead, " +
  ".about-detail, " +
  ".research-card, " +
  ".publication, " +
  ".timeline-item, " +
  ".education-card, " +
  ".event, " +
  ".contact-panel"
);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (
  "IntersectionObserver" in window &&
  !prefersReducedMotion
) {

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

  });

} else {

  // Keep all content visible when animations are unsupported
  revealElements.forEach((element) => {

    element.classList.add("is-visible");

  });

}

// =========================================================
// 3. ACTIVE NAVIGATION LINK
// =========================================================

const pageSections = document.querySelectorAll(
  "main section[id]"
);

const navigationLinks = document.querySelectorAll(
  ".nav-links a[href^='#']"
);

function setActiveNavigation(sectionId) {

  navigationLinks.forEach((link) => {

    const linkTarget = link.getAttribute("href");

    const isActive = linkTarget === "#" + sectionId;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }

  });

}

if ("IntersectionObserver" in window) {

  const sectionObserver = new IntersectionObserver(
    (entries) => {

      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            b.intersectionRatio - a.intersectionRatio
        );

      if (visibleSections.length > 0) {

        const activeSection =
          visibleSections[0].target.id;

        setActiveNavigation(activeSection);

      }

    },
    {
      rootMargin: "-25% 0px -55% 0px",
      threshold: [0, 0.1, 0.25, 0.5]
    }
  );

  pageSections.forEach((section) => {

    sectionObserver.observe(section);

  });

}

// Highlight link immediately when clicked
navigationLinks.forEach((link) => {

  link.addEventListener("click", () => {

    const sectionId =
      link.getAttribute("href").substring(1);

    setActiveNavigation(sectionId);

  });

});

// =========================================================
// 4. SMOOTH SCROLLING
// =========================================================

const internalLinks = document.querySelectorAll(
  'a[href^="#"]'
);

internalLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const targetElement =
      document.getElementById(targetId.substring(1));

    if (!targetElement) return;

    event.preventDefault();

    targetElement.scrollIntoView({
      behavior: prefersReducedMotion
        ? "auto"
        : "smooth",
      block: "start"
    });

    if (window.location.hash !== targetId) {
      history.pushState(null, "", targetId);
    }

  });

});

// =========================================================
// 5. AUTOMATIC COPYRIGHT YEAR
// =========================================================

const yearElement = document.querySelector(
  "#current-year"
);

if (yearElement) {

  const currentYear = new Date().getFullYear();

  yearElement.textContent = currentYear;

}

// =========================================================
// 6. HANDLE PAGE LOADING
// =========================================================

window.addEventListener("load", () => {

  // If page opens with a section hash,
  // highlight its navigation link.
  const currentHash = window.location.hash;

  if (currentHash && currentHash.length > 1) {

    const sectionId = currentHash.substring(1);

    setActiveNavigation(sectionId);

  }

});

// =========================================================
// 7. HANDLE BROWSER BACK/FORWARD NAVIGATION
// =========================================================

window.addEventListener("hashchange", () => {

  const currentHash = window.location.hash;

  if (currentHash && currentHash.length > 1) {

    setActiveNavigation(currentHash.substring(1));

  } else {

    setActiveNavigation("home");

  }

});

// =========================================================
// END OF SCRIPT
// =========================================================
