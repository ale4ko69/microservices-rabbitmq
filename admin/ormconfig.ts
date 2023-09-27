export const mysqlConfig: any = {
  type: 'mysql',
  host: 'MYSQL_URL_HOST',
  port: 3306,
  username: 'MYSQL_DB_USERNAME',
  password: 'MYSQL_DB_PASSWORD',
  database: 'MYSQL_DB_NAME',
  entities: ['src/entity/*.js'],
  logging: true,
  synchronize: true,
}
