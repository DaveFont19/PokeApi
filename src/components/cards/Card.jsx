import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Card({pokemon}) {
    const [pokemonImg, setPokemonImg] = useState ([]);
    const [pokemonType, setPokemonType] = useState ([]);
    const [pokemonNumber, setPokemonNumber] = useState ([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/'+ pokemon.name)
      .then(function (response) {
        setPokemonImg(response.data.sprites.front_shiny);
        setPokemonType(response.data.types[0].type.name);
        setPokemonNumber(response.data)

      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); // El segundo argumento vacío hace que el efecto se ejecute solo una vez al montar el componente

  return (
    <Link to={`/pokemon/${pokemonNumber.id}`} key={pokemonNumber.id}>
      <section className={pokemonType} id='hover'>
        <img src={pokemonImg} id='imgPokemon'/>
        <div className="normal">
            <p>{pokemon.name}</p>
            <span className={pokemonType}>{pokemonType}</span>
        </div>    
      </section>
    </Link>
  )
}

export default Card