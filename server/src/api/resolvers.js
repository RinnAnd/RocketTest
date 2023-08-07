import connection from './database.js';

export const resolvers = {
  Query: {
    users: (_, args) => {
      return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users_test_andrescasas';

        connection.query(sql, (err, results) => {
          if (err) {
            console.error('Error fetching users:', err);
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const { input } = args;
      const newUser = {
        name: input.name,
        middle_name: input.middle_name,
        last_name: input.last_name,
        second_last_name: input.second_last_name,
        birth_date: input.birth_date,
        email: input.email,
        phone: input.phone,
      }
      
      // Guardar el nuevo usuario en la base de datos
      const sql = 'INSERT INTO users_test_andrescasas SET ?';
      connection.query(sql, newUser, (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          throw err;
        }
        console.log('New user inserted:', result.insertId);
      });

      return newUser;
    },
  },
};