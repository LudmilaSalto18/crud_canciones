const { getAll, create, deleteSong, update, getOne } = require('../controllers/song.controller');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/") //para elimar un delete se hace otra ruta
		.get(getAll)
        .post(create)
        

songRouter.route("/:id")
        .delete(deleteSong)
        .put(update)
        .get(getOne)
module.exports = songRouter;