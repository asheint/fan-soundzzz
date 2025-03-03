// src/pages/api/version.js
export default function handler(req, res) {
  // You can store this in environment variables or a config file
  const version = process.env.APP_VERSION || "v0";
  res.status(200).json({ version });
}
