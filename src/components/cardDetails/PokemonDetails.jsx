import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonDetails() {
    const { id } = useParams();
    console.log(id)

    const [pokemon, setPokemon] = useState({}); // Inicializa con un objeto en lugar de un array

    useEffect(() => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(function (response) {
          setPokemon(response.data);
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [id]); // Agrega 'id' a las dependencias para que la solicitud se haga cuando cambie el ID

    return (
      <section>
        {pokemon.sprites && (
        <>
            <div className='flex space-x-80 align-middle w-full h-1/3 container'>
                <span className='text-9xl'>#{id}</span>
                <img src={pokemon.sprites.other.dream_world.front_default} />
            </div>
            <div>
                <h1 className='text-7xl'>{pokemon.name}</h1>
                {pokemon.types.map(type =>(
                    <span key={type.type.name} className={type.type.name} id='type'>{type.type.name}</span>
                ))}
            </div>
            <div className='info-pokemon'>
				<div className='flex'>
					<p>Altura : </p>
					<span>{pokemon.height}</span>
				</div>
				<div className='flex'>
					<p>Peso : </p>
					<span>{pokemon.weight}KG</span>
				</div>
			</div>
            <section>
                
            </section>
        </>
            )}
        </section>
    )
}

export default PokemonDetails;
