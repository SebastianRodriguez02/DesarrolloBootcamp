function PokemonApi() {
    let PokemonApiprincipal = "https://pokeapi.co/api/v2/pokemon"
    let consumo = fetch(PokemonApiprincipal)
    consumo.then(resultado => resultado.json())
        .then(datospokemon => {
            for (const PokemonApi of datospokemon.results) {
                document.querySelector("#Infodatos").innerHTML = ""

                fetch(PokemonApi.url)
                    .then(resultado2 => resultado2.json())
                    .then(pokemon => {
                
                
                        document.querySelector("#Infodatos").innerHTML = ""
                        van las cajas        
                            
                    })

            }
        })

}