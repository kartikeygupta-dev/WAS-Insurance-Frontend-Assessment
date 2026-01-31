const navbar   = document.getElementById("navbar");
const menu     = document.getElementById("menuHover");
const megaMenu = document.getElementById("megaMenu");
const overlay  = document.getElementById("overlay");
const logo     = document.getElementById("logoImg");

let isHovering = false;

function openMenu(){
  isHovering = true;
  navbar.classList.add("active");
  menu.classList.add("active");
  megaMenu.style.display = "block";
  overlay.classList.add("show");
  logo.src = "logo-white.png";
}

function closeMenu(){
  isHovering = false;
  navbar.classList.remove("active");
  menu.classList.remove("active");
  megaMenu.style.display = "none";
  overlay.classList.remove("show");
  logo.src = "logo-dark.png";
}

/* OPEN on hover */
menu.addEventListener("mouseenter", openMenu);
megaMenu.addEventListener("mouseenter", openMenu);

/* CLOSE only when leaving BOTH */
menu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!isHovering) closeMenu();
  }, 80);
});

megaMenu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!isHovering) closeMenu();
  }, 80);
});

/* Overlay closes */
overlay.addEventListener("mouseenter", closeMenu);

/* MOBILE MENU (unchanged) */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const navItems = document.querySelectorAll(".nav-item");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("show");

  megaMenu.style.display="none";
  overlay.classList.remove("show");
};

navItems.forEach(item=>{
  const head = item.querySelector(".nav-head");
  head.onclick = ()=>{
    navItems.forEach(i=>i!==item && i.classList.remove("active"));
    item.classList.toggle("active");
  };
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