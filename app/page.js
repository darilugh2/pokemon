"use client";   //useStates and useEffects needs this (line 4)

import Image from "next/image";
import { useState, useEffect} from "react";



export default function Home() {

const [pokemonList, setPokemonList] = useState([]); //initializing array state


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
    <div> hello world </div>
  );
}
