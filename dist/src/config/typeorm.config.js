"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const categories_entity_1 = require("../categories/entities/categories.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ecommerce_user',
    password: 'ecommerce_user',
    database: 'ecommerce_app',
    entities: [categories_entity_1.Category],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map