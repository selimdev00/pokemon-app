import React, { useEffect, useState } from 'react';

import PokemonCardLoading from './PokemonCardLoading';

import ky from '../../utils/ky';

import { Card, Image, Avatar, Descriptions, Modal, Typography, Badge, List } from 'antd';
const { Meta } = Card;
const { Title } = Typography;
import { HeartOutlined, ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';

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

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchPokemonWithUrl(props.pokemon.url).then((data: Pokemon) => {
      setPokemon(data);

      setLoading(false);
    });
  }, []);

  function openCardModal(): void {
    setIsModalOpen(true);
  }

  function closeCardModal(): void {
    setIsModalOpen(false);
  }

  function generateRandomColor() {
    // Generate random hue value between 0 and 360
    const hue = Math.floor(Math.random() * 360);
    // Generate random saturation value between 50% and 100%
    const saturation = Math.floor(Math.random() * 50) + 50;
    // Generate random lightness value between 30% and 70%
    const lightness = Math.floor(Math.random() * 40) + 30;
    // Return HSL color string
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  if (loading) return <PokemonCardLoading active={true} />;
  else if (pokemon) {
    return (
      <Card
        loading={loading}
        title={pokemon.name}
        actions={[
          <HeartOutlined key='favorite' />,
          <ShoppingCartOutlined key='buy' />,
          <EyeOutlined key='open' onClick={openCardModal} />,
        ]}
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
          <Descriptions.Item label='Experience'>
            <span style={{ color: generateRandomColor() }}>{pokemon.base_experience} XP</span>
          </Descriptions.Item>
          <Descriptions.Item label='Height'>{pokemon.height}</Descriptions.Item>
          <Descriptions.Item label='Weight'>{pokemon.weight}</Descriptions.Item>
        </Descriptions>

        <Modal open={isModalOpen} footer={false} onCancel={closeCardModal}>
          <Badge.Ribbon text={pokemon.name} style={{ marginTop: 30 }} color={generateRandomColor()}>
            <Image
              alt={pokemon.name}
              src={pokemon.sprites.other['official-artwork'].front_default}
              style={{ objectFit: 'contain' }}
            />
          </Badge.Ribbon>

          <Title>{pokemon.name}</Title>

          <Descriptions
            title='Basic characteristics: '
            layout='vertical'
            size='small'
            column={2}
            style={{ marginBottom: 30 }}
          >
            <Descriptions.Item label='ID'>{pokemon.id}</Descriptions.Item>
            <Descriptions.Item label='Experience'>
              <span style={{ color: generateRandomColor() }}>{pokemon.base_experience} XP</span>
            </Descriptions.Item>
            <Descriptions.Item label='Height'>{pokemon.height}</Descriptions.Item>
            <Descriptions.Item label='Weight'>{pokemon.weight}</Descriptions.Item>
          </Descriptions>

          <List
            bordered
            header={<Title level={4}>Abilities</Title>}
            dataSource={pokemon.abilities}
            renderItem={({ ability }) => (
              <List.Item>
                <span style={{ color: generateRandomColor() }}>{ability.name}</span>
              </List.Item>
            )}
            style={{ marginBottom: 30 }}
          />

          <Descriptions title='Stats: ' layout='vertical' size='small' column={3}>
            {pokemon.stats.map((stat, index) => (
              <Descriptions.Item key={index} label={stat.stat.name}>
                <span style={{ color: generateRandomColor() }}>{stat.base_stat}</span>
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Modal>
      </Card>
    );
  } else {
    return <h1>Error fetching</h1>;
  }
};

export default PokemonCard;
