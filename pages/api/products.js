import json from '../../data/products.json';

export default function handler(req, res) {
  res.status(200).json(json);
}
