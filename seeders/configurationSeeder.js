const { Configuration } = require("../models");

module.exports = async () => {
  const configuration = [
    {
      address: "Calle Fulanita 3556, Barrio Villa Brigida.",
      description:
        "HIDROTERMICA es una empresa fundada en el 2023, integrada por profesionales de larga trayectoria en el rubro de la climatización, que representa a los mejores fabricantes de equipos y accesorios de Ventilación, Aire Acondicionado y Calefacción (HVAC).",
      mobile: "+591 7000099",
      phone: "3420000",
      email: "contacto@hidrotermica.com.bo",
      linkedIn: "https://www.linkedin.com/in/hidrotermica/",
    },
  ];

  await Configuration.bulkCreate(configuration);
  console.log("[Database] Se corrió el seeder de Configuration.");
};
