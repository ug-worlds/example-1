/* =========================
   NAVBAR ACTIVE LINK
========================= */
const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#38bdf8";
  }
});

/* =========================
   HERO BUTTON NAVIGATION
========================= */
const shopBtn = document.getElementById("shopBtn");

if (shopBtn) {
  shopBtn.addEventListener("click", () => {
    shopBtn.classList.add("clicked");
    setTimeout(() => {
      window.location.href = "shop.html";
    }, 200);
  });
}

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.background = "rgba(2, 6, 23, 0.85)";
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    nav.style.background = "rgba(15, 23, 42, 0.65)";
    nav.style.boxShadow = "none";
  }
});

/* =========================
   TOUCH FEEDBACK (MOBILE)
========================= */
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("touchstart", () => {
    btn.style.transform = "scale(0.96)";
  });

  btn.addEventListener("touchend", () => {
    btn.style.transform = "scale(1)";
  });
});

/* =========================
   PAGE LOAD ANIMATION
========================= */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
