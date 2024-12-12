import React from "react";
import PokemonClient from "./PokemonClient";

const PokemonDetailsPage = async( { params} ) => {
    const thePokemon = await  params ;
    console.log(thePokemon);

    const pokemonResponse = await fetch (
        `https://pokeapi.co/api/v2/pokemon/${thePokemon.pokemon}`
    );
    const pokemonData = await pokemonResponse.json();
    console.log(pokemonData);

    return (

        <div className = "text-center front-sans font-bold mb-24"> 
    {thePokemon.pokemon} 

        <PokemonClient pokemonInfo = {pokemonData}/>
        

        </div>





    );
    
    
}

export default PokemonDetailsPage;