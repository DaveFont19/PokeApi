import { useState, useEffect } from 'react';
import Card from './cards/Card';
import axios from 'axios';


function PokeApi() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState ('https://pokeapi.co/api/v2/pokemon/')
  const [nombrePokemon, setNombrePokemon] = useState ("");

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setPokemon(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [url]); 

  const obtenerPokemon = () => {

    setUrl('https://pokeapi.co/api/v2/pokemon/' + nombrePokemon)
    console.log(url)
  }



  return (
    <>
      <input placeholder='Ingrese el Nombre del pokemon' onChange={(e)=>setNombrePokemon(e.target.value)}></input>
      <button onClick={obtenerPokemon}>Buscar</button>
      <section className="grid">
        {pokemon.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon}/> // Añade "key" prop para evitar advertencias
        ))}
      </section>
    </>  
  );
}

export default PokeApi;