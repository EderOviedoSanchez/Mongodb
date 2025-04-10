const express = require("express");
const pokemoncontrollers = require("../controllers/pokemoncontrollers")
const router = express.Router()

router.get("/hello",  pokemoncontrollers.hitrainer);
    // res.status(200).send("Hola desde rutas");
router.post("/", pokemoncontrollers.createpokemon);
module.exports = router
