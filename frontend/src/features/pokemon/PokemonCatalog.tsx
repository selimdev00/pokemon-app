import React, { useEffect, useState } from 'react';

import { Col, Row, Skeleton } from 'antd';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPokemons, fetchPokemonsAsync, selectStatus } from './pokemonSlice';
import PokemonCard from './PokemonCard';
import PokemonCardLoading from './PokemonCardLoading';

const PokemonCatalog = () => {
  const pokemons = useAppSelector(selectPokemons);
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsAsync());
  }, []);

  const [active, setActive] = useState(true);

  function PendingCatalog() {
    return (
      <Row gutter={[16, 16]}>
        {new Array(16).fill(0).map((_, index) => (
          <Col span={6} key={index} className='gutter-row'>
            <PokemonCardLoading active={true} />
          </Col>
        ))}
      </Row>
    );
  }

  if (status === 'loading') {
    return <PendingCatalog />;
  } else {
    return (
      <Row gutter={[16, 24]}>
        {pokemons.map((pokemon) => (
          <Col key={pokemon.name} span={6} className='gutter-row'>
            <PokemonCard pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    );
  }
};

export default PokemonCatalog;
