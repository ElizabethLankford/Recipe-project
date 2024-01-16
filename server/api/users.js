const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS = 10;

const {
  createUser,
  getAllUsers,
  getUserByUsername,
} = require("../db/sqlHelperFuncs/users");

//GET = /api/users = get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

//POST = /api/users/register = create a new user
router.post("/register", async (req, res, next) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await createUser({
      username,
      password: hashedPassword,
      firstname,
      lastname,
      email,
    });
    delete user.password;
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/logout", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
