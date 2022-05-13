const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db("lead");
}

function findBy(filter) {
  return db("lead").where(filter);
}

async function add(entry) {
  const [id] = await db("lead").insert(entry, "id");
  return findById(id);
}

function findById(id) {
  return db("lead").where({ id }).first();
}

async function update(id, entry) {
  await db("lead").where("id", Number(id)).update(entry, "id");
  return findById(id);
}

function remove(id) {
  return db("lead").where("id", Number(id)).del();
}
