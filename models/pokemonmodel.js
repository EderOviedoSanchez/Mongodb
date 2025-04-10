const mongoose = require("mongoose");

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
    pokemon_id:{
        type: Number,
        required: true,
        unique: true
    },
    view:{
        type: Boolean,
        default: true
    },
    catch:{
        type: Boolean,
        default: false
    },
    in_team:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("pokemon18", pokemonSchema)