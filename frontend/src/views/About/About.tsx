import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { theme, Layout, Typography, Image, Row, Col, Button, Breadcrumb } from 'antd';
import { CompassOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import type { SizeType } from 'antd/es/config-provider/SizeContext';

import Default from '../../layouts/Default';

import aboutImage from './images/about-image.webp';
import secondAboutImage from './images/about-image-2.webp';

import styles from './about.module.scss';

const About = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [size] = useState<SizeType>('large');

  return (
    <Default>
      <Content className='site-layout' style={{ margin: '0 auto', maxWidth: 1200 }}>
        <Breadcrumb items={[{ title: 'Home' }, { title: 'About pokemons' }]}></Breadcrumb>

        <Title level={2}>About Pokemons</Title>

        <div className='site-layout-content' style={{ background: colorBgContainer }}>
          <Row gutter={30}>
            <Col
              span={6}
              lg={{ span: 6 }}
              md={{ span: 6 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              className='row-gutter'
              style={{ marginBottom: 20 }}
            >
              <Image src={aboutImage} style={{ marginBottom: '40px' }} />

              <Image src={secondAboutImage} />
            </Col>

            <Col
              span={18}
              lg={{ span: 18 }}
              md={{ span: 18 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              className='gutter-row'
            >
              <Title>Hello, Pokemon!</Title>

              <Paragraph className={styles.about__text}>
                Pokemons are creatures that inhabit a vibrant and diverse world of adventure,
                waiting to be explored. With over 800 species of Pokémon to discover, each with
                their own unique abilities, strengths, and weaknesses, there is always something new
                to discover.
              </Paragraph>

              <Paragraph className={styles.about__text}>
                Some of the most well-known Pokémon include Pikachu, Charizard, Bulbasaur, Squirtle,
                and Jigglypuff, but there are countless others waiting to be discovered. Each
                Pokémon has its own type, such as Fire, Water, Electric, and Grass, which affects
                their strengths and weaknesses in battle.
              </Paragraph>

              <Paragraph className={styles.about__text}>
                In addition to battling, Pokémon can also be collected and trained. Trainers can
                capture wild Pokémon using special devices called Poké Balls, and then train them to
                become stronger and evolve into new forms.
              </Paragraph>

              <Paragraph className={styles.about__text}>
                Whether you&lsquo;re a seasoned trainer or just starting out, the world of Pokémon
                is full of exciting adventures and endless possibilities. So grab your Poké Ball and
                get ready to explore!
              </Paragraph>

              <Link to='/catalog'>
                <Button icon={<CompassOutlined />} size={size}>
                  Explore now!
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Content>
    </Default>
  );
};

export default About;
