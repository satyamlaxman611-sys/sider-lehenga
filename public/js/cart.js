const cartList = document.getElementById("cartList");
const summary = document.getElementById("summary");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

/* ===== RENDER CART ===== */
function renderCart(){
  cartList.innerHTML = "";

  if(cart.length === 0){
    cartList.innerHTML = `
      <div class="empty">
        <p>Your cart is empty</p>
        <button onclick="location.href='products.html'">
          Explore Lehengas
        </button>
      </div>
    `;
    summary.classList.add("hidden");
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" />
      <div class="item-info">
        <div class="item-title">${item.title}</div>
        <div class="item-price">₹${item.price}</div>

        <div class="qty">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>

        <div class="remove" onclick="removeItem(${index})">
          Remove
        </div>
      </div>
    `;
    cartList.appendChild(div);
  });

  subtotalEl.textContent = "₹" + total;
  totalEl.textContent = "₹" + total;
  summary.classList.remove("hidden");
}

/* ===== ACTIONS ===== */
function changeQty(index, delta){
  cart[index].qty += delta;
  if(cart[index].qty <= 0){
    cart.splice(index, 1);
  }
  saveCart();
}

function removeItem(index){
  cart.splice(index, 1);
  saveCart();
}

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function goCheckout(){
  location.href = "checkout.html";
}

/* INIT */
renderCart();
