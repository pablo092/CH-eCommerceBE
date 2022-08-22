module.exports = {
  mariaDB: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "",
      database: "test",
    },
    pool: { min: 0, max: 50 },
  },
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: "./DB/ecommerce.sqlite",
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 50 },
  },
};
