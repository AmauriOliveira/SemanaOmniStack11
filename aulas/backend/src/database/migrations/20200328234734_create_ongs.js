exports.up = function (knex) {// o que se deve fazer
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();//primary key
        table.string('name').notNullable();//não nulo
        table.string('email').notNullable();
        table.string('whattapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();// 2 representa o tamanho da string
    });
};

exports.down = function (knex) {//caso der errado o up
    return knex.schema.dropTable('ongs');
};
