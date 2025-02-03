import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class InitialDev21738612534094 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
