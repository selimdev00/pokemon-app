import React from 'react';

import { Layout, Breadcrumb, Typography } from 'antd';
const { Title } = Typography;

import PokemonCatalog from '../../features/pokemon/PokemonCatalog';
import Default from '../../layouts/Default';
const { Content } = Layout;

const Home = () => {
  return (
    <Default>
      <Content className='site-layout' style={{ margin: '0 auto', maxWidth: 1600 }}>
        <Breadcrumb items={[{ title: 'Home' }, { title: 'Catalog' }]}></Breadcrumb>

        <Title level={2}>Pokemons</Title>

        <PokemonCatalog />
      </Content>
    </Default>
  );
};

export default Home;
