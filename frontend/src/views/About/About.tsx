import React, { useState } from 'react';
import { theme, Layout, Typography, Image, Row, Col, Button } from 'antd';
import { CompassOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Title, Paragraph } = Typography;
import type { SizeType } from 'antd/es/config-provider/SizeContext';

import Default from '../../layouts/Default';

import aboutImage from '../../assets/images/about-image.webp';
import styles from './about.module.scss';
import { Link } from 'react-router-dom';

const About = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  return (
    <Default>
      <Content className='site-layout'>
        <Title level={2}>About Pokemons</Title>

        <div className='site-layout-content' style={{ background: colorBgContainer }}>
          <Row gutter={30}>
            <Col span={12} className='row-gutter'>
              <Image src={aboutImage} />
            </Col>

            <Col span={12} className='gutter-row'>
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

              <Link to='/'>
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
