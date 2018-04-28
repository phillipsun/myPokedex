const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const allPokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"]
const capturedPokemon = ["Bulbasaur", "Mew"]

app.use(bodyParser.json())

app.get('/api/pokemon', (req, res) => {
    res.send(allPokemon)
})


// add endpointment for Captured Pokemon
app.post('/api/capturedpokemon/add', (req, res) => {
    capturedPokemon.push(req.body.params.pokemon.name)
    res.send(capturedPokemon)
})

// delete endpoint for Captured Pokemon
app.post('/api/capturedpokemon/delete', (req, res) => {
    capturedPokemon.splice(capturedPokemon.indexOf[req.body.params.pokemon.name], 1)
    res.send(capturedPokemon)
})

// create
app.post('/api/capturedpokemon', (req, res) => {
    const { name, nickname } = req.body;
    let pokemon = {
        name: name,
        nickname: nickname
    }
    capturedPokemon.push(pokemon);
    res.status(200).send(capturedPokemon);
}),

// read
app.get('/api/capturedpokemon', (req, res) => {
    res.status(200).send(capturedPokemon);
})

app.listen(3000, () => {
    console.log('Listening on 3000')
})