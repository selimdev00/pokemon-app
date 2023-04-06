import React, { useEffect, useState } from 'react';

import PokemonCardLoading from './PokemonCardLoading';

import ky from '../../utils/ky';

import { Card, Image, Avatar, Descriptions } from 'antd';
const { Meta } = Card;
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import type { Pokemon } from './types';

interface Props {
  pokemon: Pokemon;
}

const fetchPokemonWithUrl = (url: string): Promise<Pokemon> => {
  return ky.get(url).json();
};

const PokemonCard = (props: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPokemonWithUrl(props.pokemon.url).then((data: Pokemon) => {
      setPokemon(data);

      setLoading(false);
    });
  }, []);

  if (loading) return <PokemonCardLoading active={true} />;
  else if (pokemon) {
    return (
      <Card
        loading={loading}
        title={pokemon.name}
        actions={[<HeartOutlined key='favorite' />, <ShoppingCartOutlined key='buy' />]}
        cover={
          <Image
            alt={pokemon.name}
            src={pokemon.sprites.other['official-artwork'].front_default}
            style={{ maxHeight: 200, objectFit: 'contain' }}
          />
        }
      >
        <Meta
          avatar={<Avatar src={pokemon.sprites.front_default} />}
          title={pokemon.name}
          style={{ marginBottom: 10 }}
        />

        <Descriptions title='Basic characteristics: ' layout='vertical' size='small' column={2}>
          <Descriptions.Item label='ID'>{pokemon.id}</Descriptions.Item>
          <Descriptions.Item label='Experience'>{pokemon.base_experience} XP</Descriptions.Item>
          <Descriptions.Item label='Height'>{pokemon.height}</Descriptions.Item>
          <Descriptions.Item label='Weight'>{pokemon.weight}</Descriptions.Item>
        </Descriptions>
      </Card>
    );
  } else {
    return <h1>Error fetching</h1>;
  }
};

export default PokemonCard;
