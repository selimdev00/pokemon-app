import React from 'react';

import { Layout, Breadcrumb, Typography } from 'antd';
const { Title, Paragraph } = Typography;

import PokemonCatalog from '../../features/pokemon/PokemonCatalog';
import Default from '../../layouts/Default';
const { Content } = Layout;

const Home = () => {
  return (
    <Default>
      <Content className='site-layout' style={{ margin: '0 auto', maxWidth: 1600 }}>
        <Breadcrumb items={[{ title: 'Home' }, { title: 'Catalog' }]}></Breadcrumb>

        <Title level={2}>Pokemons</Title>

        <Paragraph>
          Pokémon are creatures that inhabit a vibrant and diverse world of adventure, waiting to be
          explored. With over 800 species of Pokémon to discover, each with their own unique
          abilities, strengths, and weaknesses, there is always something new to discover.
        </Paragraph>

        <PokemonCatalog />
      </Content>
    </Default>
  );
};

export default Home;
