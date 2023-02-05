function PokemonApi() {
    let PokemonApiprincipal = "https://pokeapi.co/api/v2/pokemon"
    let consumo = fetch(PokemonApiprincipal)
    consumo.then(resultado => resultado.json())
        .then(dataPokemon1 => {
            document.querySelector("#Infodatos").innerHTML = ""
            for (const PokemonApi of dataPokemon1.results) {
                fetch(PokemonApi.url)
                    .then(resultado2 => resultado2.json())
                    .then(dataPokemon2 => {
                        console.log(dataPokemon2)
                       

                        document.querySelector("#Infodatos").innerHTML += `

                        
                       

                        
                        <div class="col">
                            <div class="card justify-content-center align-items-center bg-danger" style = "width: 18rem;" >
                                <img src="${dataPokemon2.sprites.other['official-artwork'].front_default}" class="card-img-top" alt="...">
                                    <h2 class="card-title">${PokemonApi.name}</h2> 
                                    <p> ${dataPokemon2.stats[0].base_stat} ${dataPokemon2.stats[0].stat.name}</p>
                                    <p> ${dataPokemon2.stats[1].base_stat} ${dataPokemon2.stats[1].stat.name}</p>
                                    <p> ${dataPokemon2.stats[2].base_stat} ${dataPokemon2.stats[2].stat.name}</p>
                                    <p> ${dataPokemon2.stats[3].base_stat} ${dataPokemon2.stats[3].stat.name}</p>                                   
                                    </div>
                                </div>
                         </div>              
                        `
                        
                    })
                    
            }
            
            boton_paginacion(dataPokemon1.next, dataPokemon1.previous)
        })
        
        

}

function boton_paginacion(url_next, url_previous) {
    let disabledBotonNext = (url_next == null) ? "disabled" : "";
    let disabledBotonprevious = (url_previous == null) ? "disabled" : "";
    document.querySelector("#botonesPages").innerHTML = `
    <button class="btn btn-dark fs-2" ${disabledBotonprevious} onclick="PokemonApi('${url_previous}')">Anterior</button>
    <button class="btn btn-dark fs-2" ${disabledBotonNext} onclick="PokemonApi('${url_next}')">Siguiente</button>
    `
    
}




PokemonApi()
