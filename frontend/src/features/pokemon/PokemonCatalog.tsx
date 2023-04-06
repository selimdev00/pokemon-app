import React, { useEffect, useState } from 'react';

import { Col, Row, Pagination } from 'antd';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPokemon, fetchPokemonsAsync } from './pokemonSlice';
import PokemonCard from './PokemonCard';
import PokemonCardLoading from './PokemonCardLoading';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonCatalog = () => {
  const { pokemons, status, count } = useAppSelector(selectPokemon);

  const dispatch = useAppDispatch();

  const params = useParams();
  const navigate = useNavigate();

  if (!params?.page) return;

  const [page, setPage] = useState<number>(parseInt(params.page));

  if (!page) {
    setPage(1);
  }

  useEffect(() => {
    dispatch(fetchPokemonsAsync({ limit: 16, offset: (page - 1) * 16 }));
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function PendingCatalog() {
    return (
      <Row gutter={[16, 16]}>
        {new Array(16).fill(0).map((_, index) => (
          <Col
            span={6}
            key={index}
            className='gutter-row'
            xs={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
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

        <Row style={{ margin: '60px 0px' }}>
          <Col offset={6}>
            <Pagination
              total={count}
              showSizeChanger
              showQuickJumper
              current={page}
              defaultPageSize={12}
              showTotal={(total) => `Total ${total} pokemons`}
              onChange={(page, pageSize) => {
                setPage(page);
                navigate(`/catalog/${page}`);
                dispatch(fetchPokemonsAsync({ limit: 16, offset: (page - 1) * 16 }));
                scrollToTop();
              }}
            />
          </Col>
        </Row>
      </>
    );
  }
};

export default PokemonCatalog;
