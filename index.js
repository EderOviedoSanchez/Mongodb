const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const pokemonroutes = require("./routes/pokemon.routes.js");

dotenv.config();
const app = express();
const PORT = (process.env.PORT || 3000);

app.set("port", PORT);
app.use(express.json());
app.use("/api/pokemon", pokemonroutes);

app.get("/", (req, res) => {
    res.send("Hola entrenador");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("conect to DB"))
.catch((error) => console.error(error))

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
});