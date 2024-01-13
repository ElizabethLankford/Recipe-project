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
const { use } = require("./recipes");

router.post("/register", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

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
    res.send({ user });
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
