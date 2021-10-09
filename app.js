const getPokemon = ()=> {
      //Obtenermos IDs Aleatorios
      const aleatorio = (inferior, superior) => {
        let numPosibilidades = superior - inferior;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }
    //Cuando encontremos a picachu mostramos el mensaje
    const getPikachu = (nombre) =>{
        if (nombre === "pikachu") {
            const getMensajepikachu = document.querySelector(".main-alert-pikachu-message")
            const colorMensaje = document.getElementById("message")
            colorMensaje.style.color = "#80ED99"
            getMensajepikachu.textContent = `Encontraste a Pikachu!!!`
        }
    }
    //Trabajamos con las cartas
    //CARD 1
    id = aleatorio(1,500)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
        // Datos de los Pokemons Card1
        //Imagen perfil
        const imagen = document.getElementById("imagen1");
        imagen.src = pokemon.sprites.other.dream_world.front_default;
        //Nombre
        const namePokemon1 = document.querySelector(".nombrePoke1")
        namePokemon1.textContent = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`
        //DATOS
        document.getElementById("caja-datos1").innerHTML = `
        <h3>Ataque: ${pokemon.stats[1].base_stat} </h3>

        <h3>Experiencia: ${pokemon.base_experience} </h3>

        <h3>Defensa: ${pokemon.stats[2].base_stat} </h3>`
        getPikachu(pokemon.name)
    });

    //CARD 2
    id = aleatorio(1,500)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
        //Imagen perfil
        const imagen2 = document.getElementById("imagen2");
        imagen2.src = pokemon.sprites.other.dream_world.front_default;
        
        const namePokemon2 = document.querySelector(".nombrePoke2")
        namePokemon2.textContent = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`
        //DATOS
        document.getElementById("caja-datos2").innerHTML = `
        <h3>Ataque: ${pokemon.stats[1].base_stat} </h3>

        <h3>Experiencia: ${pokemon.base_experience} </h3>

        <h3>Defensa: ${pokemon.stats[2].base_stat} </h3>`
        getPikachu(pokemon.name)
    });

    //CARD 3
    id = aleatorio(1,500)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
        //Imagen perfil
        const imagen3 = document.getElementById("imagen3");
        imagen3.src = pokemon.sprites.other.dream_world.front_default;
        const namePokemon3 = document.querySelector(".nombrePoke3")
        namePokemon3.textContent = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`
        //DATOS
        document.getElementById("caja-datos3").innerHTML = `
        <h3>Ataque: ${pokemon.stats[1].base_stat} </h3>

        <h3>Experiencia: ${pokemon.base_experience} </h3>

        <h3>Defensa: ${pokemon.stats[2].base_stat} </h3>`
        getPikachu(pokemon.name)
    });
    

}



getPokemon()
