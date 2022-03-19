import {MigrationInterface, QueryRunner} from "typeorm";

export class rating1647659773148 implements MigrationInterface {
    name = 'rating1647659773148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rating" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "itemId" integer NOT NULL, "score" integer NOT NULL, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rating"`);
    }

}
