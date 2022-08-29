const { Pool } = require('pg');

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "900943",
  port: 5432
};

const pool = new Pool(credentials);

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now()
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start
      console.log('executed query', {text, duration})
      callback(err, res)
    })
  }
}