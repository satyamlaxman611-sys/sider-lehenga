# 🛍️ Sider Lehenga – Premium Ethnic Wear Website

A fully responsive, premium e-commerce website for **Sider Lehenga**, built using **HTML, CSS, JavaScript** with **Razorpay payment integration** and **Vercel serverless backend**.

This project is optimized for **mobile-first experience**, fast performance, and secure checkout.

---

## 🌐 Live Features

- Premium glassmorphism UI (black & gold theme)
- Mobile-first responsive design
- Product listing & product detail pages
- Cart system (LocalStorage based)
- Secure Razorpay checkout
- Order verification backend
- Success & Failed payment handling
- Admin panel (basic setup)
- Deployed using **Vercel**

---

## 📁 Project Structure
project/

├── public/

│   ├── index.html

│   ├── about-developer.html

│   ├── products.html

│   ├── product.html

│   ├── cart.html

│   ├── about.html

│   ├── checkout.html

│   ├── contact.html 

│   ├── failed.html

│   ├── returns-refund.html

│   ├── products-data.json

│   ├── success.html

│   ├── terms.html

│   ├── css/

│   │   ├── checkout.css

│   │   └── style.css

│   ├── js/

│   │   ├── products.js

│   │   ├── product.js

│   │   ├── cart.js

│   │   ├── index.js

│   │   └── checkout.js

│   └── assets/

│       ├── pictures/

│       └── videos/

│

├── api/

│   ├── admin-login.js

│   ├── create-order.js

│   ├── get-orders.js

│   ├── verify-payment.js

│   └── update-order.js

│

├── admin/

│   ├── panel-auth-9x72.html

│   ├── panel-dashboard-x2872.html

│   ├── admin.css

│   └── admin.js

│

├── README.md

└── vercel.json


---

## 💳 Payment Integration (Razorpay)

This project uses **Razorpay Standard Checkout** with a secure backend.

### 🔑 Required Backend APIs

Located inside `/api` folder (Vercel serverless functions):

- `create-order.js`
  - Creates Razorpay order
- `verify-payment.js`
  - Verifies payment signature
  - Redirects to success / failed page

> ⚠️ **Important:**  
> Razorpay **Secret Key is NEVER exposed** on frontend.

---

## ⚙️ Environment Variables (Vercel)

Set the following variables in **Vercel Dashboard → Project → Settings → Environment Variables**

🚫 Do **NOT** commit secret keys to GitHub.

---

## 🚀 Deployment (Vercel)

### Step 1
Push the entire project folder to **GitHub repository**

### Step 2
Go to https://vercel.com  
→ Import GitHub repo  
→ Deploy

Vercel automatically:
- Serves `/public` as frontend
- Treats `/api` as backend serverless APIs

---

## 🧪 Local Testing (Optional)

Frontend can be tested directly using:
- Mobile browser
- Local file preview
- VS Code / Acode preview

⚠️ Razorpay checkout requires **live deployment** for full testing.

---

## 🛡️ Security Notes

- Razorpay Secret Key stored only on server
- Payment verification done server-side
- No sensitive data stored on frontend
- Cart uses browser LocalStorage only

---

## 🧑‍💻 Developer

**Abrar Khan**  
IT Student • Certified Web Developer • AI Expert  

🌐 Website: https://devabrarkhan.github.io/instaforgex/  
📍 Kendrapara, Odisha, India  

Agency: **INSTAFORGEX**  
Services:
- Frontend Development
- Backend Development
- UI/UX Design
- Graphic & Logo Design
- Content Writing
- Social Media & AI Solutions

---

## 📄 License

This project is proprietary and built for **Sider Lehenga**.  
Unauthorized resale or redistribution is not permitted.

---

## ✅ Status

✔ Frontend: Completed  
✔ Backend: Payment ready  
✔ Deployment: Vercel compatible  
✔ Mobile optimized: Yes  

---

**Made with ❤️ for premium Indian ethnic fashion**
