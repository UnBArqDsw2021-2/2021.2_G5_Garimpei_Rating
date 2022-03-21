import {MigrationInterface, QueryRunner} from "typeorm";

export class report1647713244745 implements MigrationInterface {
    name = 'report1647713244745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "report" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "reportableId" integer NOT NULL, "reportableType" character varying NOT NULL, "reason" character varying NOT NULL, "text" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "report"`);
    }

}
