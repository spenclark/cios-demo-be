/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    // This is just a test schema
    table.uuid("id").unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("primaryEmail", 128).notNullable().unique();
    table.string("password", 128).notNullable();
    table.string("firstName");
    table.string("lastName");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
