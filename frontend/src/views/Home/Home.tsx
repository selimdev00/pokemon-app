import React from 'react';
import Default from '../../layouts/Default';

import ReactPlayer from 'react-player';

import { Typography, Layout, theme, Image, Row, Col } from 'antd';
const { Title, Paragraph } = Typography;
const { Content } = Layout;

import firstImage from './images/1.webp';
import logo from '../../assets/images/pokemon-logo.webp';

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Default>
      <Content className='site-layout' style={{ margin: '0 auto', maxWidth: 1200 }}>
        <div
          className='site-layout-content'
          style={{ backgroundColor: colorBgContainer, minHeight: '100vh' }}
        >
          <Title>Welcome, to Pokemon Website</Title>

          <Paragraph style={{ fontSize: 20 }}>
            Welcome to the world of Pokémon! This is the ultimate destination for all trainers and
            fans alike. With over 25 years of history, the Pokémon franchise has become a cultural
            phenomenon, spanning games, trading cards, movies, TV shows, and much more.
          </Paragraph>

          <Row align='middle' gutter={20}>
            <Col span={12} xl={12} md={12} sm={24} xs={24} className='gutter-row'>
              <Image src={firstImage} width='100%' style={{ marginBottom: 30 }} />
            </Col>

            <Col span={12} xl={12} md={12} sm={24} xs={24} className='gutter-row'>
              <Image src={logo} width='100%' style={{ marginBottom: 30 }} />
            </Col>
          </Row>

          <Paragraph style={{ fontSize: 20 }}>
            Whether you&apos;re a seasoned trainer or a curious newbie, this website is the perfect
            place to start your Pokémon journey. Here, you&apos;ll find everything you need to know
            about catching, training, and battling with your favorite Pokémon.
          </Paragraph>

          <div className='player-wrapper' style={{ marginBottom: 20 }}>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=_c_hMehCORQ'
              controls={true}
              width='100%'
              height='100%'
            />
          </div>

          <Paragraph style={{ fontSize: 20 }}>
            First, let&apos;s talk about the games. From the original Red and Blue versions to the
            latest Sword and Shield games, the Pokémon video game series has evolved into a massive
            RPG adventure. With hundreds of creatures to catch, train, and battle with, each game
            offers endless hours of fun and excitement.
          </Paragraph>

          <Paragraph style={{ fontSize: 20 }}>
            But that&apos;s not all. Pokémon trading cards have also become a staple of the
            franchise. With thousands of cards available, you can build your own collection and
            battle against other players in exciting matches.
          </Paragraph>

          <Paragraph style={{ fontSize: 20 }}>
            If you&apos;re a fan of the anime series, you&apos;ll be pleased to know that we have
            all the latest news and information on the latest seasons. Follow Ash, Pikachu, and
            their friends on their adventures through different regions of the Pokémon world.
          </Paragraph>

          <Paragraph style={{ fontSize: 20 }}>
            But what really sets Pokémon apart from other franchises is its sense of community. Join
            us on our forums to chat with other fans, share your favorite Pokémon memes, and get
            tips and advice from experienced trainers. We also hold regular events and tournaments
            where you can test your skills against other players from around the world.
          </Paragraph>

          <Paragraph style={{ fontSize: 20 }}>
            So, what are you waiting for? Dive into the world of Pokémon and join the millions of
            trainers around the world. With so much to discover and explore, the journey is just
            beginning.
          </Paragraph>
        </div>
      </Content>
    </Default>
  );
};

export default Home;
