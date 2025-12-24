import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const order = req.body;

    if (!order || !order.paymentId) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    const filePath = path.join(process.cwd(), "data", "orders.json");

    let orders = [];
    if (fs.existsSync(filePath)) {
      orders = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    orders.push(order);

    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({ error: "Order save failed" });
  }
}
