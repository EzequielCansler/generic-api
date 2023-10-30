const express = require("express");
const router = express();
const itemController = require("../../controllers/itemController");

router
  .get("/", itemController.getAllItem)

  .get("/:itemId", itemController.getOneItem)

  .post("/:itemId", itemController.createNewItem)

  .patch("/:itemId", itemController.updateOneItem)

  .delete("/:itemId", itemController.deleteOneItem);

module.exports = router;
