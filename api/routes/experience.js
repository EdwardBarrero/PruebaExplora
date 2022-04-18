require("../mongo");
const { createClient } = require("pexels");
const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience.js");
const {API_KEY} = require("../credenciales")

const client = createClient(
  `${API_KEY}`
);

router.get("/", function (req, res, next) {
  Experience.find({})
    .then((ress) => res.send(ress))
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Experience.find({ _id: id })
    .then((ress) => res.send(ress[0]))
    .catch((err) => next(err));
});

router.post("/", async (req, res, next) => {
  const { title, description, interactiveRoom } = req.body;
  let relatedImg = "";
  const query = title
  await client.photos.search({ query, per_page: 2 }).then(photos => {relatedImg = photos.photos[1]?.src.large})
  const experience = new Experience({
    title,
    description,
    interactiveRoom,
    relatedImg
  });

  experience
    .save()
    .then((ress) => {
      res.send(ress);
    })
    .catch((err) => next(err));
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { title, description, interactiveRoom } = req.body;
  Experience.updateOne(
    { _id: id },
    {
      title,
      description,
      interactiveRoom,
    }
  )
    .then(() => res.send("cambio exitoso"))
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Experience.deleteOne({ _id: id }).then(() => res.send("Eliminado con exito"));
});

module.exports = router;
