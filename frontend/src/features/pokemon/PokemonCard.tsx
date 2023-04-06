import React from 'react';

import { Card } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export interface Pokemon {
  id: number;
  name: string;
}

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = (props: Props) => {
  return (
    <Card
      title={props.pokemon.name}
      actions={[<HeartOutlined key='favorite' />, <ShoppingCartOutlined key='buy' />]}
    >
      {props.pokemon.name}
    </Card>
  );
};

export default PokemonCard;
