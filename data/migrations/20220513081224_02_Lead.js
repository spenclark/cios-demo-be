/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("lead", (table) => {
    table.uuid("id").unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("email").notNullable();
    table.jsonb("lead_content");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("lead");
};
