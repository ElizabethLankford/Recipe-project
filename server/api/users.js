const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");
const SALT_ROUNDS = 10;

const {
  createUser,
  getAllUsers,
  getUserByUsername,
  deleteUser,
  getUserFavRecipes,
  addRecipeToUsersFav,
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
    const { username, password, firstname, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await createUser({
      username,
      password: hashedPassword,
      firstname,
      email,
    });
    delete user.password;

    const token = jwt.sign(user, JWT_SECRET);
    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    delete user.password;
    res.send({ token, user });
  } catch (error) {
    next(error);
  }
});

//Get users favorite recipes
router.get("/:id/favorites", async (req, res, next) => {
  try {
    const usersFav = await getUserFavRecipes(req.params.id);
    res.send(usersFav);
  } catch (error) {
    next(error);
  }
});

// moved POST add a recipe to users fav into recipe api routes file
//POST add a recipe to users favorite list(ERROR with login)

//DELETE remove a recipe from users favorite
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//POST log user in
router.post("/login", async (req, res, next) => {
  try {
    const user = await getUserByUsername(req.body.username);
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);
      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });
      delete user.password;
      res.send({ token, user });
    } else {
      res.send("not allowed");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged out",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
