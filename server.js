const express = require("express");
const cors = require("cors");

const pokemon = require("./data/pokemon");

const app = express();

app.use(cors());
const PORT = 5000;

app.get("/api/pokemon/:pokemonName", (req, res) => {
  const pokemonName = req.params.pokemonName.toLowerCase();

  if (!pokemon[pokemonName]) res.json(pokemon["unknown"]);

  res.json(pokemon[pokemonName]);
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
