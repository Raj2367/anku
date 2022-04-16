const express = require("express");
const router = express.Router();
const { ImportantEvents, SaveImportantEvent } = require("../handlers/impHandler")

router.get("/", (req, res) => {
    ImportantEvents().then((data) => {
        if (data) {
            res.json(data);
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.post("/", (req, res) => {
    SaveImportantEvent(req.body)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.send(error);
        }
        );
});

module.exports = router;