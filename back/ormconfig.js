require('dotenv').config()

module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'hair-s-ball',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
  synchronize: true,
}
