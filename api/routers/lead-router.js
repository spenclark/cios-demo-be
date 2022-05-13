const router = require("express").Router();

const Lead = require("../models/lead-model.js");

router.get("/", (req, res) => {
  Lead.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res
      .status(404)
      .json({ message: "The entry with the specified id does not exist." });
  } else {
    Lead.findById(id)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "The log information could not be retrieved." });
      });
  }
});

router.post("/", (req, res) => {
  let log = req.body;

  Lead.add(log)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
