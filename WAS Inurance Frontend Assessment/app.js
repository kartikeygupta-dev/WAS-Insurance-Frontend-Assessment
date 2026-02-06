const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("show");
  mobileNav.classList.toggle("menu-open");
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-head").forEach(head => {
  head.addEventListener("click", () => {
    const parent = head.parentElement;
    parent.classList.toggle("active");
  });
});

const navbar   = document.getElementById("navbar");
const menuItem = document.getElementById("menuHover");
const megaMenu = document.getElementById("megaMenu");
const overlay  = document.getElementById("overlay");

menuItem.addEventListener("click", () => {
  const isOpen = menuItem.classList.contains("active");

  if (isOpen) {
    menuItem.classList.remove("active");
    navbar.classList.remove("active");
    megaMenu.style.display = "none";
    overlay.classList.remove("show");
  } else {
    menuItem.classList.add("active");
    navbar.classList.add("active");
    megaMenu.style.display = "block";
    overlay.classList.add("show");
  }
});

overlay.addEventListener("click", () => {
  menuItem.classList.remove("active");
  navbar.classList.remove("active");
  megaMenu.style.display = "none";
  overlay.classList.remove("show");
});

const dropdown=document.getElementById("dropdowns");
const chips=document.getElementById("chips");

function toggleDropdown(){
  dropdown.style.display=dropdown.style.display==="block"?"none":"block";
}

function addChip(text){
  if([...chips.children].some(c=>c.textContent.includes(text))) return;
  const chip=document.createElement("div");
  chip.className="chip";
  chip.textContent=text+" ×";
  chip.onclick=()=>chip.remove();
  chips.appendChild(chip);
  dropdown.style.display="none";
}
