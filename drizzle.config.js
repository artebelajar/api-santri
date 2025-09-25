import 'dotenv/config';
 
export default {
  schema: './db/schema.js', // Path ke file skema kita
  out: './drizzle', // Folder untuk menyimpan hasil migrasi
  driver: 'pg', // Driver database yang digunakan
  dbCredentials: {
    connectionString: process.env.DATABASE_URL, // Mengambil URL dari file .env
  },
};