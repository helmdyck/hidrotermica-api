/*  npm run seeders */

require("dotenv").config();

async function runAllSeeders() {
  await require("./articleSeeder")();
  await require("./brandSeeder")();
  await require("./configurationSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
