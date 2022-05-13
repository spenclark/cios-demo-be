/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tenant", (table) => {
    table.uuid("id").unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    log
      .integer("landlord_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.float("amount_due_today");
    table.string("new_address");
    table.string("email").notNullable();
    table.string("firstName");
    table.string("lastName");

    // Payment information (in practice this would be probably a payment platform and not hit our database :)
    table.string("sort_code");
    table.string("postal_code");
    table.string("account_number");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tenant");
};
