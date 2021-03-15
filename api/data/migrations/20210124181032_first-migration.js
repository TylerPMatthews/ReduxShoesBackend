exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 300).notNullable();
      users.string("account_type", 128).notNullable();
      users.timestamps(false, true);
    })
    .createTable("shoes", (shoes) => {
      shoes.increments("shoe_id");
      shoes.string("shoe_gender", 128).notNullable();
      shoes.string("shoe_brand", 128).notNullable();
      shoes.string("shoe_title", 128).notNullable().unique();
      shoes.text("shoe_desription").notNullable();
      shoes.integer("shoe_price").notNullable();
      shoes.string("shoe_img", 300);
      shoes.specificType("shoe_size", "text ARRAY").notNullable();
      shoes.specificType("shoe_color", "text ARRAY").notNullable();
      shoes.integer("shoe_count").notNullable().defaultTo(0);
      shoes.boolean("inCart").notNullable().defaultTo(0);
    })
    .createTable("customers", (customer) => {
      customer.increments("customer_id");
      customer.string("customer_first", 128).notNullable();
      customer.string("customer_last", 128).notNullable();
      customer.string("customer_street", 128).notNullable();
      customer.string("customer_city", 128).notNullable();
      customer.string("customer_state", 128).notNullable();
      customer.string("customer_zip", 128).notNullable();
      customer
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
    })
    .createTable("orders", (orders) => {
      orders.increments("order_id");
      orders.timestamps(false, true);
      orders.integer("order_total").notNullable();
      orders.specificType("order_item_name", "text ARRAY");
    })
    .createTable("order_complete", (complete) => {
      complete.increments("complete_id");
      complete
        .integer("customer_id")
        .unsigned()
        .notNullable()
        .references("customer_id")
        .inTable("customers")
        .onDelete("cascade");
      complete
        .integer("order_id")
        .unsigned()
        .notNullable()
        .references("order_id")
        .inTable("orders")
        .onDelete("cascade");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("shoes")
    .dropTableIfExists("customers")
    .dropTableIfExists("orders")
    .dropTableIfExists("order_complete");
};
