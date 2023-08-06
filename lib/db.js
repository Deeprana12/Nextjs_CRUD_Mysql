import { createPool } from 'mysql2';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employees_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.execute(sql, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};
