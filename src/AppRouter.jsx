import React from 'react'
import PokeApi from './components/PokeApi'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PokemonDetails from './components/cardDetails/PokemonDetails';

function AppRouter() {
  return (
      <Routes>
        <Route path='/' element={<PokeApi/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
  )
}

export default AppRouter