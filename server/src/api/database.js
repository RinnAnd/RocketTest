import mysql from 'mysql2';
import { config } from '../config/index.js';

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database!');

  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS users_test_andrescasas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      middle_name VARCHAR(255),
      last_name VARCHAR(255),
      second_last_name VARCHAR(255),
      birth_date VARCHAR(255),
      email VARCHAR(255),
      phone VARCHAR(255)
    )
  `;

  connection.query(createTableSQL, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      throw err;
    }
    console.log('Table users_test_andrescasas created or already exists!');
  });
});

export default connection;