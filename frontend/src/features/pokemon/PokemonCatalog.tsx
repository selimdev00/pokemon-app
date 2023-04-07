import React, { useEffect, useState } from 'react';

import { Col, Row, Pagination, Typography } from 'antd';
const { Paragraph } = Typography;

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPokemon, fetchPokemonsAsync, setLimit } from './pokemonSlice';
import PokemonCard from './PokemonCard';
import PokemonCardLoading from './PokemonCardLoading';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonCatalog = () => {
  const { pokemons, status, count, limit } = useAppSelector(selectPokemon);

  const dispatch = useAppDispatch();

  const params = useParams();
  const navigate = useNavigate();

  if (!params?.page) return;

  const [page, setPage] = useState<number>(parseInt(params.page));

  if (!page) {
    setPage(1);
  }

  useEffect(() => {
    dispatch(fetchPokemonsAsync({ limit, offset: (page - 1) * limit }));
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handlePageChange(page: number, pageSize: number) {
    setPage(page);
    dispatch(setLimit(pageSize));
    navigate(`/catalog/${page}`);
    dispatch(fetchPokemonsAsync({ limit: pageSize, offset: (page - 1) * pageSize }));
    scrollToTop();
  }

  function PendingCatalog() {
    return (
      <Row gutter={[16, 16]}>
        {new Array(16).fill(0).map((_, index) => (
          <Col
            span={6}
            key={index}
            className='gutter-row'
            lg={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
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
      <>
        <Paragraph>
          Pokémon are creatures that inhabit a vibrant and diverse world of adventure, waiting to be
          explored. With {count} species of Pokémon to discover, each with their own unique
          abilities, strengths, and weaknesses, there is always something new to discover.
        </Paragraph>

        <Row gutter={[16, 24]}>
          {pokemons.map((pokemon) => (
            <Col
              key={pokemon.name}
              span={6}
              className='gutter-row'
              lg={{ span: 6 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
            >
              <PokemonCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>

        <Row align='middle' justify='center' style={{ margin: '40px 0 ' }}>
          <Pagination
            total={count}
            showSizeChanger
            showQuickJumper
            current={page}
            defaultPageSize={limit}
            showTotal={(total) => `Total ${total} pokemons`}
            onChange={handlePageChange}
          />
        </Row>
      </>
    );
  }
};

export default PokemonCatalog;
