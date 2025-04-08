/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_Lpoxh4lW0tTU@ep-divine-unit-a55mzb7r-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
};