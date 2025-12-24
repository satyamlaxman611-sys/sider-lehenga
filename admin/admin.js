/* ===== LOGIN ===== */
function login(){
  const u=document.getElementById("username").value;
  const p=document.getElementById("password").value;

  if(u==="bsu2vz7wg" && p==="28zbwv2628192bst2v"){
    localStorage.setItem("adminAuth","true");
    location.href="panel-dashboard-x2872.html";
  }else{
    document.getElementById("error").innerText="Invalid credentials";
  }
}

/* ===== LOGOUT ===== */
function logout(){
  localStorage.removeItem("adminAuth");
  location.href="panel-auth-9x72.html";
}

/* ===== LOAD ORDERS ===== */
async function loadOrders(){
  const wrap=document.getElementById("orders");
  if(!wrap) return;

  const res=await fetch("/api/get-orders");
  const orders=await res.json();

  if(!orders.length){
    wrap.innerHTML="<p>No orders yet</p>";
    return;
  }

  orders.reverse().forEach(o=>{
    const d=document.createElement("div");
    d.className="order-card";

    d.innerHTML=`
      <p><b>Name:</b> ${o.name}</p>
      <p><b>Phone:</b> ${o.phone}</p>
      <p><b>Amount:</b> ₹${o.amount}</p>
      <p><b>Status:</b></p>
      <select onchange="updateStatus('${o.paymentId}',this.value)">
        <option ${o.status==="PAID"?"selected":""}>PAID</option>
        <option ${o.status==="SHIPPED"?"selected":""}>SHIPPED</option>
        <option ${o.status==="COMPLETED"?"selected":""}>COMPLETED</option>
      </select>
    `;
    wrap.appendChild(d);
  });
}

async function updateStatus(id,status){
  await fetch("/api/update-order",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({paymentId:id,status})
  });
}

loadOrders();
/* ===== FIXED ADMIN CREDENTIALS ===== */
const ADMIN_USER = "bsu2vz7wg";
const ADMIN_PASS = "28zbwv2628192bst2v";

/* LOGIN */
function login(){
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const err = document.getElementById("error");

  if(u === ADMIN_USER && p === ADMIN_PASS){
    localStorage.setItem("adminAuth","true");
    location.href = "panel-dashboard-x2872.html";
  }else{
    err.innerText = "Invalid username or password";
  }
}

/* LOGOUT */
function logout(){
  localStorage.removeItem("adminAuth");
  location.href = "panel-auth-9x72.html";
}