const mysql = require("mysql2");
const util = require("util");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  password: "pratik79",
};

const CREATE_DATABASE = `Create Database data_repository_faculty`;

const createDBConnection = async () => {
  try {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    if (!connection) {
      throw new Error("Could not create connection");
    }
    const execQuery = util.promisify(connection.query.bind(connection));
    await execQuery(CREATE_DATABASE);
    console.log("Database created :)");
  } catch (error) {
    console.error(error);
  }
};

createDBConnection();
