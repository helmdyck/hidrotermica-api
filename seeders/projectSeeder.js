const { Project } = require("../models");

module.exports = async () => {
  const projects = [
    {
      name: "Centrales de Shopping",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      name: "Local comercial",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      name: "Mejora de ductos",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
  ];

  await Project.bulkCreate(projects);
  console.log("[Database] Se corrió el seeder de Projects.");
};
