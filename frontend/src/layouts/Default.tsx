import React from 'react';
import { Menu, Layout, MenuProps, Avatar, Col, Row, theme } from 'antd';
import { Link } from 'react-router-dom';
import {
  DingtalkOutlined,
  HeartOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
const { Header, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    label: <Link to='/about'>About pokemons</Link>,
    key: 'about',
    icon: <DingtalkOutlined />,
  },
  {
    label: <Link to='/catalog'>Pokemon catalog</Link>,
    key: 'catalog',
    icon: <UnorderedListOutlined />,
  },
  {
    label: <Link to='/search'>Pokemon search</Link>,
    key: 'search',
    icon: <SearchOutlined />,
  },
];

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Default = (props: LayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <Header className='header__wrapper'>
        <Link to='/'>
          <div className='header__logo'></div>
        </Link>

        <Menu mode='horizontal' theme='dark' items={items} />
      </Header>

      {props.children}

      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: colorBgContainer,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Row align='middle' gutter={10} justify='center'>
          <Col className='gutter-row'>
            Made with <HeartOutlined /> by{' '}
          </Col>
          <Row className='gutter-row' align='middle' gutter={5}>
            <Col className='gutter-row'>
              <Avatar size={24} src='https://github.com/richiedev666.png' />
            </Col>
            <Col className='gutter-row'>
              <a href='https://github.com/richiedev666' target='_blank' rel='noreferrer'>
                Richie
              </a>
            </Col>
          </Row>
        </Row>
      </Footer>
    </Layout>
  );
};

export default Default;
