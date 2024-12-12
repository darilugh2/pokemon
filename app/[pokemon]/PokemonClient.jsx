import React from "react";

const PokemonClient = ( { pokemonInfo } ) => {
    const OfficialImage = 
      pokemonInfo.sprites.other["official-artwork"].front_default;
    const ShinyImage = pokemonInfo.sprites.other["official-artwork"].front_shiny;

return (

    <div className = "flex space-x-20 justify-center"> 
        <img src = {OfficialImage} />
        
        <img src = {ShinyImage} />
        
    </div>

);


};

export default PokemonClient;
