const db = require("../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db("tenant");
}

function findBy(filter) {
  return db("tenant").where(filter);
}

async function add(entry) {
  const [id] = await db("tenant").insert(entry, "id");
  return findById(id);
}

function findById(id) {
  return db("tenant").where({ id }).first();
}

async function update(id, entry) {
  await db("tenant").where("id", Number(id)).update(entry, "id");
  return findById(id);
}

function remove(id) {
  return db("tenant").where("id", Number(id)).del();
}
