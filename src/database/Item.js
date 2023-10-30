const DB = require("./db.json");

const getAllItem = () => {
  return DB.workouts;
};

module.exports = { getAllItem };
