/*  npm run seeders */

require("dotenv").config();

async function runAllSeeders() {
  await require("./brandSeeder")();
  await require("./configurationSeeder")();
  await require("./productSeeder")();
  await require("./projectSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
