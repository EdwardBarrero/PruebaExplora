require("../mongo");
const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience.js");

router.get("/:nombre", (req, res, next) => {
    const {nombre} = req.params;
    Experience.find({interactiveRoom: nombre})
    .then(ress => res.send(ress))
    .catch(err => next(err))
})

module.exports = router;