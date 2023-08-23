import { useState, useEffect } from 'react';
import Card from './cards/Card';
import axios from 'axios';

function PokeApi() {
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nombrePokemon, setNombrePokemon] = useState("");
  const [singlePokemon, setSinglePokemon] = useState(false); // se usa el fasle para que el ternario funcione

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setPokemonList(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [url]);

  const obtenerPokemon = () => {
    axios
      .get(url + nombrePokemon)
      .then(function (response) {
        setSinglePokemon(response.data); // Actualiza el estado con el Pokemon único
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className='flex gap-4'>
        <input placeholder='Ingrese el Pokemon' onChange={(e) => setNombrePokemon(e.target.value)}></input>
        <button onClick={obtenerPokemon}>Buscar</button>
      </div>
      <section className="grid">
        {singlePokemon ? (
          <Card key={singlePokemon.name} pokemon={singlePokemon} />
        ) : (
          pokemonList.map((pokemon) => ( // Usando el ternario hace que si  singlepokemon es false, se imprima la lista... pero si despues singlePokemon tiene algo.. imprime el unico pokemon
            <Card key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </section>
    </>
  );
}

export default PokeApi;
