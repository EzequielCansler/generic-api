const itemService = require("../services/itemService");

const getAllItem = (req, res) => {
  const allItems = itemService.getAllItem();
  res.send({ status: "ok", data: allItems });
};
const getOneItem = (req, res) => {
  const item = itemService.getOneItem();
  res.send(`Get item ${req.params.itemId}`);
};
const createNewItem = (req, res) => {
  const createdItem = itemService.createNewItem();
  res.send(`Get item ${req.params.itemId}`);
};
const updateOneItem = (req, res) => {
  const updatedItem = itemService.updateOneItem();
  res.send(`Get item ${req.params.itemId}`);
};
const deleteOneItem = (req, res) => {
  itemService.deleteOneItem(req.params.itemId);
  res.send(`Get item ${req.params.itemId}`);
};

module.exports = {
  getAllItem,
  getOneItem,
  createNewItem,
  updateOneItem,
  deleteOneItem,
};
