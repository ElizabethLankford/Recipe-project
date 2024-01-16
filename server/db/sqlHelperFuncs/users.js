const client = require("../client");

const createUser = async ({
  username,
  password,
  firstname,
  lastname,
  email,
}) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    INSERT INTO users( username,
        password,
        firstname,
        lastname,
        email)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
    `,
      [username, password, firstname, lastname, email]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
        SELECT * FROM users;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const {
      rows: [user],
    } = await client.query(`
        SELECT * FROM users WHERE users.username = '${username}'
        `);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getAllUsers, getUserByUsername };
