const db = require("../../api/data/db-config");

//Get all of the Adidas shoes
const getAll = () => {
  return db("shoes").where("shoe_brand", "Adidas");
};

//Get Men Adidas shoes
const getMen = () => {
  return db("shoes").where("shoe_brand", "Adidas").where("shoe_gender", "m");
};

//Get Women Adidas shoes
const getWomen = () => {
  return db("shoes").where("shoe_brand", "Adidas").where("shoe_gender", "w");
};

//Get shoe by ID

const getByID = (id) => {
  return db("shoes").where("shoe_id", id);
};


module.exports = {
  getAll,
  getMen,
  getWomen,
  getByID,
};
