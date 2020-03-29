exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();//não nulo
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        //chave estrageira
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
