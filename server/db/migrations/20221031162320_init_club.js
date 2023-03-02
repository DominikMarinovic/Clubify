/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("club", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("club_name").notNullable();
    table.integer("contact").notNullable().unique();
    table.string("email").notNullable().unique();
    table.integer("opening_time").notNullable();
    table.integer("closing_time").notNullable();
    table.string("instagram_account").notNullable().unique();
    table.string("location").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("club");
};
