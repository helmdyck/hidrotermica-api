const { Brand } = require("../models");

async function show(req, res) {
  const brands = await Brand.findAll();
  res.json({ brands });
}

module.exports = {
  show,
};
