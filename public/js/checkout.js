async function startPayment(order, formData, cartItems, totalAmount) {
  const options = {
    key: RAZORPAY_KEY_ID, // frontend key only
    amount: order.amount,
    currency: "INR",
    name: "Sider Lehenga",
    description: "Order Payment",
    order_id: order.id,

    handler: async function (response) {
      // 🔹 response me Razorpay ka data aata hai
      const verifyRes = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,

          // 🔹 Apna order data (ADMIN PANEL ke liye)
          orderData: {
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            items: cartItems,
            amount: totalAmount
          }
        })
      });

      const result = await verifyRes.json();

      if (result.success) {
        // cart clear
        localStorage.removeItem("cart");

        // success page
        window.location.href = "/success.html";
      } else {
        window.location.href = "/failed.html";
      }
    },

    theme: {
      color: "#f5c97a"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
