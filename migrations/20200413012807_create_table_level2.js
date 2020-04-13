
exports.up = function (knex) {
    return knex.schema.createTable('level2', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.decimal('score').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('level2');
};
