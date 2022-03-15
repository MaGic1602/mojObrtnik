const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../server/models/signUpModels");

router.post("/logIn", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    Name: req.body.Name,
    email: req.body.email,
    password: req.body.password,
    aboutMe: req.body.aboutMe,
    selection: req.body.selection,
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

router.get("/keramicariParketari", (req, res) => {
  req.params.selection;
  signUpTemplateCopy
    .find({ selection: "parketar-keramicar" })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

router.get("/dimnjacari", (req, res) => {
  req.params.selection;
  signUpTemplateCopy
    .find({ selection: "dimnjacari" })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

router.get("/limari", (req, res) => {
  req.params.selection;
  signUpTemplateCopy
    .find({ selection: "limar" })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

router.get("/staklari", (req, res) => {
  req.params.selection;
  signUpTemplateCopy
    .find({ selection: "monter" })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

router.get("/krovari", (req, res) => {
  req.params.selection;
  signUpTemplateCopy
    .find({ selection: "krovar" })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

module.exports = router;
