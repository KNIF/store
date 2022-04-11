import json from "../../data/products.json";

// api route returning all products as json on "GET /api/products"
export default function handler(req, res) {
  // send a response with http status 200 (success) with data from imported file as json
  res.status(200).json(json);
}
