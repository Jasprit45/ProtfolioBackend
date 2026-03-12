const express = require('express');
const router = express.Router();
const {ProjectController} = require('../../controllers/index');
const projectController = new ProjectController();
router.get("/", (req,res)=> {
    res.send("Protfolio running");
});

router.post('/projects',projectController.addProject);

module.exports = router;