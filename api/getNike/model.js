const db = require("../../api/data/db-config");

//Get all of the Nike shoes
const getAll = () => {
  return db("shoes").where("shoe_brand", "Nike");
};

//Get Men Nike shoes
const getMen = () => {
  return db("shoes").where("shoe_brand", "Nike" && "shoe_gender", "m");
};

//Get Women Nike shoes
const getWomen = () => {
  return db("shoes").where("shoe_brand", "Nike" && "shoe_brand", "Nike" && "shoe_gender", "w")
};

//Get shoe by ID

const getByID = (id) => {
  return db("shoes").where("shoe_id", id);
};

//Post a new Nike shoe   (Needs fixed, possible ID increment error)
const postShoe = (shoe) => {
  return db("shoes")
    .insert(shoe)
};

//Delete a Nike shoe by ID
const deleteShoe = (id) => {
    return db("shoes").where("shoe_id", id).del()
}

//Edit a shoe by ID
const editShoe = (id, changes) => {
    return db("shoes").where("shoe_id", id).update(changes)
}

module.exports = {
  getAll,
  getMen,
  getWomen,
  getByID,
  postShoe,
  deleteShoe,
  editShoe,
};
