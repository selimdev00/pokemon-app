import React, { useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import Default from '../../layouts/Default';
import {
  Layout,
  Breadcrumb,
  Typography,
  Table,
  Button,
  Tooltip,
  Avatar,
  Input,
  Row,
  Col,
} from 'antd';
const { Title } = Typography;
const { Content } = Layout;
import { ColumnsType } from 'antd/es/table';

import ky from '../../utils/ky';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchAllPokemonsAsync,
  fetchPokemonTypesAsync,
  selectPokemon,
  setPokemon,
} from '../../features/pokemon/pokemonSlice';
import { Pokemon, PokemonType } from '../../features/pokemon/types';

import whereIsPokemonImage from '../../features/images/where-is-pokemon.webp';

const Search = () => {
  const dispatch = useAppDispatch();

  const { pokemons, types } = useAppSelector(selectPokemon);

  useEffect(() => {
    dispatch(fetchAllPokemonsAsync());
    dispatch(fetchPokemonTypesAsync());
  }, []);

  const fetchInfoAboutPokemon = async (pokemon: Pokemon) => {
    const data: Pokemon = await ky.get(pokemon.url).json();

    dispatch(setPokemon(data));
  };

  function PokemonImage(pokemon: Pokemon) {
    const { other } = pokemon.sprites;

    return (
      other['official-artwork']?.front_default ||
      other.dream_world?.front_default ||
      other.home?.front_default ||
      whereIsPokemonImage
    );
  }

  const filterTypes = types.map((e: PokemonType) => {
    return {
      text: e.name,
      value: e.name,
    };
  });

  const [searchText, setSearchText] = useState('');

  const columns: ColumnsType<Pokemon> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      filterSearch: true,
    },
    {
      title: 'Image',
      render: (record: Pokemon) => {
        if (record.sprites) {
          return <Avatar src={PokemonImage(record)} alt={record.name} />;
        }
      },
    },
    {
      title: 'Experience',
      dataIndex: 'base_experience',
      sorter: (a, b) => a.base_experience - b.base_experience,
    },
    {
      title: 'Types',
      render: (record: Pokemon) => {
        if (record.types) {
          return record.types.map(({ type }: PokemonType, index: number) => {
            return (
              <p key={record.name + type.name + index} title={type.name}>
                {type.name}
              </p>
            );
          });
        }
      },
      filters: filterTypes,
      onFilter: (value: string | number | boolean, record: Pokemon): boolean => {
        if (!record.types) return false;

        return record.types.findIndex((e: PokemonType) => e.type.name === value) > -1;
      },
    },
    {
      title: 'Actions',
      render: (record: Pokemon) => {
        return (
          <Tooltip placement='top' title='Get extra information about this pokemon'>
            <Button onClick={() => fetchInfoAboutPokemon(record)}>Get information</Button>
          </Tooltip>
        );
      },
    },
  ];

  const searchInput = (
    <Row align='middle' gutter={12}>
      <Col className='gutter-row'>
        <SearchOutlined />
      </Col>

      <Col className='gutter-row'>
        <Input
          placeholder='Search name'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
          allowClear
        />
      </Col>
    </Row>
  );

  const filteredPokemons = searchText
    ? pokemons.filter((item: Pokemon) =>
        item.name.toLowerCase().startsWith(searchText.toLowerCase()),
      )
    : pokemons;

  return (
    <Default>
      <Content className='site-layout' style={{ margin: '0 auto', maxWidth: 1600, width: '100%' }}>
        <Breadcrumb items={[{ title: 'Home' }, { title: 'Catalog' }]}></Breadcrumb>
        <Title level={2}>Pokemons</Title>

        <Table
          dataSource={filteredPokemons}
          title={() => searchInput}
          columns={columns}
          rowKey={(record) => record.name}
        />
      </Content>
    </Default>
  );
};

export default Search;
