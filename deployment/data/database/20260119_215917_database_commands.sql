ALTER TABLE "myfirstaibot$instruction" ALTER COLUMN "instruction" SET DATA TYPE VARCHAR_IGNORECASE(2147483647);
UPDATE "mendixsystem$attribute" SET "entity_id" = '341c93bb-5081-4bc2-9e89-6d0e3d788c18', "attribute_name" = 'Instruction', "column_name" = 'instruction', "type" = 30, "length" = 0, "default_value" = '', "is_auto_number" = false WHERE "id" = 'fc021aab-00af-45fc-844a-ae536220a619';
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20260119 21:59:16';
