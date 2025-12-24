import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { paymentId, status } = req.body;

    const filePath = path.join(process.cwd(), "data", "orders.json");
    const orders = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const index = orders.findIndex(o => o.paymentId === paymentId);
    if (index === -1) {
      return res.status(404).json({ error: "Order not found" });
    }

    orders[index].status = status;

    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({ error: "Update failed" });
  }
}