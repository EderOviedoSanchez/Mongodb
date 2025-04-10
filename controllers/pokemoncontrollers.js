const hitrainer = async (req, res) => {
    try {
        res.status(200).send("Hola desde el controlador")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createpokemon = async (req, res) =>{
    try {
        const pokemon = new Pokemon(req.body)
        await pokemon.save()
        return res.status(201).json(pokemon)
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {hitrainer, createpokemon}