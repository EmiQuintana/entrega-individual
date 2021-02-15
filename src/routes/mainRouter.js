const express = require ("express");
const router = express.Router();
const path = require ("path");
const mainController = require ("../controllers/mainController");


router.get ("/", mainController.index);
router.get ("/create", mainController.create);
router.delete ("/delete/:id", mainController.delete);
router.get ("/detail/:id", mainController.detail);
router.put ("/detail/:id/edit", mainController.edit);

module.exports = router;