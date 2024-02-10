
const { Brand } = require("../models");

module.exports = async () => {
  const brands = [
    {
      name: "Koolair",
      logo: ["Koolair.jpg"],
    },
    {
        name: "Aermec",
        logo: ["Aermec.jpg"],
      },
      {
        name: "Belimo",
        logo: ["Belimo.jpg"],
      },
  ];

  await Brand.bulkCreate(brands);
  console.log("[Database] Se corrió el seeder de Brands.");
};
