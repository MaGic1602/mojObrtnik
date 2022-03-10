const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../server/models/signUpModels");

router.post("/logIn", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    Name: req.body.Name,
    email: req.body.email,
    password: req.body.password,
  });

  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
