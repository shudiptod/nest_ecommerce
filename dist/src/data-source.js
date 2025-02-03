"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ecommerce_user',
    password: 'ecommerce_user',
    database: 'ecommerce_app',
    entities: ['./src/**/*.entity.ts'],
    migrations: ['./src/migrations/*.ts'],
    synchronize: true,
});
//# sourceMappingURL=data-source.js.map