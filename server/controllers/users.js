const { promisePool } = require("../db/dbPool");

const userController = {
  addUser: async (req, res) => {
    try {
      const { firstName, lastName, email, phone, password, role } = req.body;

      const [checkResults] = await promisePool.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

      if (checkResults.length > 0) {
        return res.status(409).send("Email already exists");
      }

      const [roleResults] = await promisePool.query(
        "SELECT id FROM roles WHERE id = ?",
        [role]
      );

      if (roleResults.length === 0) {
        return res.status(400).send("Invalid role");
      }

      await promisePool.query(
        "INSERT INTO users (role_id, first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?, ?)",
        [role, firstName, lastName, email, phone, password]
      );

      res.status(201).send("User added successfully");
    } catch (err) {
      console.error("Error processing request:", err.stack);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = {
  userController,
};
