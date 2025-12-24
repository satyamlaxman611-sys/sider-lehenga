import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "data", "orders.json");

    if (!fs.existsSync(filePath)) {
      return res.status(200).json([]);
    }

    const orders = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return res.status(200).json(orders);

  } catch (err) {
    return res.status(500).json({ error: "Unable to fetch orders" });
  }
}