const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const pokemonRoutes = require("./routes/pokemon.routes" )

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/pokemon", pokemonRoutes)

app.get("/", (req, res) => {
    res.json({ ok: true, message: "Pokemon API Funcionando"})
})

module.exports = app;