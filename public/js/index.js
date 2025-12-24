const horizontalWrap = document.getElementById("horizontalProducts");
const verticalWrap = document.getElementById("verticalProducts");
const navMenu = document.getElementById("navMenu");

function toggleMenu(){
  navMenu.classList.toggle("hidden");
}

/* ===== LOAD PRODUCTS ===== */
fetch("/products-data.json")
  .then(res => res.json())
  .then(products => {
    const visible = products.filter(p => p.visible && p.images?.length);

    renderHorizontal(visible.slice(0, 10));
    renderVertical(visible.slice(10, 18));
  });

/* ===== HORIZONTAL ===== */
function renderHorizontal(list){
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "h-card";
    card.onclick = () =>
      location.href = `product.html?id=${p.id}`;

    card.innerHTML = `
      <img src="${p.images[0]}" />
      <div class="h-title">${p.title}</div>
      <div class="h-price">₹${p.price}</div>
    `;
    horizontalWrap.appendChild(card);
  });
}

/* ===== VERTICAL ===== */
function renderVertical(list){
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "v-card";
    card.onclick = () =>
      location.href = `product.html?id=${p.id}`;

    card.innerHTML = `
      <img src="${p.images[0]}" />
      <div class="v-info">
        <div class="v-title">${p.title}</div>
        <div class="v-price">₹${p.price}</div>
      </div>
    `;
    verticalWrap.appendChild(card);
  });
}

/* ===== OWNER CARD 3D TILT ===== */
const ownerCard = document.getElementById("ownerCard");

let ox = 0, oy = 0;

ownerCard.addEventListener("mousemove", e=>{
  const rect = ownerCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rx = ((y / rect.height) - .5) * -10;
  const ry = ((x / rect.width) - .5) * 10;

  ownerCard.style.transform =
    `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
});

ownerCard.addEventListener("mouseleave", ()=>{
  ownerCard.style.transform =
    `rotateX(0deg) rotateY(0deg) scale(1)`;
});

/* CLICK → EMAIL */
ownerCard.addEventListener("click", ()=>{
  window.location.href =
    "public/about-developer.html";
});
