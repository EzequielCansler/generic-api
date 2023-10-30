const item = require("../database/Item");

const getAllItem = () => {
  const allItems = item.getAllItem();
  return allItems;
};
const getOneItem = () => {
  return;
};
const createNewItem = () => {
  return;
};
const updateOneItem = () => {
  return;
};
const deleteOneItem = () => {
  return;
};

module.exports = {
  getAllItem,
  getOneItem,
  createNewItem,
  updateOneItem,
  deleteOneItem,
};
