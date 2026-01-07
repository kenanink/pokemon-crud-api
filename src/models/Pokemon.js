const mongoose =require("mongoose")

const PokemonSchema = new mongoose.Schema({
    name: { type: String, require: true},
    pokemonId: Number,
    types: [String],
    image: String,
    note: { type: String }
}, { timestamps: true })

module.exports = mongoose.model("pokemon", PokemonSchema);