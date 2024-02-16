const express = require("express");
const router = express.Router();
const configController = require("../controllers/configController")
const brandController = require("../controllers/brandController")
const productController = require("../controllers/productController")
const projectController = require("../controllers/projectController")

router.get("/", configController.index)
router.get("/brands", brandController.show)
router.get("/products/:id", productController.show)
router.get("/projects", projectController.index)
router.get("/projects/:id", projectController.show)
router.get("/about", configController.showAbout)
router.get("/contact", configController.showContact)

module.exports = router;
