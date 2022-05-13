const router = require("express").Router();

const Tenant = require("../models/tenant-model.js");

router.get("/", (req, res) => {
  Tenant.find()
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
    Tenant.findById(id)
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

  Tenant.add(log)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Tenant.findById(id)
    .then((data) => {
      if (data) {
        Tenant.update(id, changes).then((newData) => {
          res.status(200).json(newData);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find data with the given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to update log",
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Tenant.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find entry with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete entry" });
    });
});

module.exports = router;
