const axios = require("axios")
const Pokemon = require("../models/Pokemon ")

exports.createPokemon = async (req, res) => {
    try {
        const { name, note } = req.body

        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        )

        const data = response.data

        const pokemon = await Pokemon.create({
            name: data.name,
            pokemonId: data.id,
            types: data.types.map(t => t.type.name),
            image: data.sprites.front_default,
            note
        })
        res.status(201).json(pokemon)
     } catch (error) {
        res.status(400).json({ error: "Pokemon no encontrado" })
     }
    }

    exports.getPokemons = async (req, res) => {
        const pokemons = await Pokemon.find()
        res.json(pokemons)
    }

    exports.updatePokemon = async (req, res) => {
        const updated = await Pokemon.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updated)
    }

    exports.deletePokemon = async (req, res) => {
        await Pokemon.findByIdAndDelete(req.params.id)
        res.json({ ok: true })
    };