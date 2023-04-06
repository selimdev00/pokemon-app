import React, { useEffect } from 'react';

import { Col, Row } from 'antd';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPokemons, fetchPokemonsAsync } from './pokemonSlice';
import PokemonCard from './PokemonCard';

const PokemonCatalog = () => {
  const pokemons = useAppSelector(selectPokemons);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsAsync());
  }, []);

  return (
    <Row gutter={[16, 24]}>
      {pokemons.map((pokemon) => (
        <Col key={pokemon.name} span={6} className='gutter-row'>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonCatalog;
