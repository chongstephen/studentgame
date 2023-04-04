const db = require('./db');

describe('PostgreSQL connection', () => {
  it('should connect to the database', async () => {
    try {
      await db.connect();
    } catch (err) {
      throw new Error(`Unable to connect to the database: ${err}`);
    } finally {
      await db.end();
    }
  });
});

describe('PostgreSQL database', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.end();
  });

  it('should create a table in the database', async () => {
    const createTableQuery = `CREATE TABLE students (
      user_id serial PRIMARY KEY,
      firstname VARCHAR NOT NULL,
      password VARCHAR NOT NULL
    );`;

    try {
      await db.query(createTableQuery);
    } catch (err) {
      throw new Error(`Unable to create table: ${err}`);
    }
  });
});

const db = require('./db');

describe('PostgreSQL database', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.end();
  });

  it('should insert data into the table', async () => {
    const insertDataQuery = `INSERT INTO students (firstname, password)
      VALUES ('John', 'password123');`;

    try {
      await db.query(insertDataQuery);
    } catch (err) {
      throw new Error(`Unable to insert data: ${err}`);
    }
  });
});