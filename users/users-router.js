const express = require("express");
const bcrypt = require("bcryptjs");

const Users = require("./users-model");
const authenticate = require("../users/middle/authenticate-middleware");

const router = express.Router();

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: "Logged in" });
      } else {
        res.status(401).json({ message: "you shall not pass!" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/users", (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });
  
  module.exports = router;