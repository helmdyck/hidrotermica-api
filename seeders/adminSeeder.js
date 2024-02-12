const bcrypt = require("bcryptjs")
const { Admin } = require("../models");

module.exports = async () => {
  const hashedPassword = await bcrypt.hash("1234", 5);
  const Admins = [
    {
      username: "helmuth.dyck@gmail.com",
      password: hashedPassword,
    },
    
  ];

  await Admin.bulkCreate(Admins);
  console.log("[Database] Se corrió el seeder de Admins.");
};
