"use client";   //useStates and useEffects needs this (line 4)

import Image from "next/image";
import { useState, useEffect} from "react";
import { useRouter } from "next/navigation";
//useRouter -> init -> router.push()

export default function Home() {

const router = useRouter();

const [pokemonList, setPokemonList] = useState([]); //initializing array state
//pokemonList for use
//setPokemonList for input

//creating a function
//Fetching Data from API
const fetchPokemonData = async () => {   ///await needs async
  const response = await fetch(      ///needs await to actually fetch data
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000"
 );
 const data = await response.json(); ///converting to json format to use "something.something" arr's arr
 console.log(data);
 setPokemonList(data.results)
 //data.results-> cuz API's object has  (we only need results)
 //count
 //next
 //previous
 //results
};


//Fetch data on page load
useEffect( () => {
  fetchPokemonData(); //calling the function

}, [] );  
// while [something] true, it triggers useEffect
//while [] (blank inside), it triggers only once on paga load
  
  


  return (
    <div className ="">  

      <h1 className = "bg-red-300 text-center text-4xl font-bold font-sans py-12">
        Pokemon Data
      </h1>

      <div className = "mt-16 mx-12">

        <div className = "flex flex-wrap items-center justify-center gap-5">
        

        {pokemonList.map ( (eachPokemon) => ( 
          // (pokemon) => ()   **pokemon takes each arr val
          // pract use -> pokemon.name [or] pokemon.url
          <h1 key = {eachPokemon.name} 
          className ="hover:bg-red-500 hover:text-white w-[30%] text-center border border-white text-2xl py-5"
          onClick = { ( ) => router.push(`/${eachPokemon.name}`)} >  
            {eachPokemon.name}
          </h1>
          //key is used to avoid warning
        ) ) }
        
        </div>
        
      </div>
    
    </div>
  );
}
