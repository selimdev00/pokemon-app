import React from 'react';
import { Menu, Layout, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { DingtalkOutlined, UnorderedListOutlined } from '@ant-design/icons';
const { Header, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    label: <Link to='/about'>About pokemons</Link>,
    key: 'about',
    icon: <DingtalkOutlined />,
  },
  {
    label: <Link to='/'>Pokemon catalog</Link>,
    key: 'catalog',
    icon: <UnorderedListOutlined />,
  },
];

interface LayoutProps {
  children: any;
}

const Default = (props: LayoutProps) => {
  return (
    <Layout className='layout'>
      <Header className='header__wrapper'>
        <Link to='/'>
          <div className='header__logo'></div>
        </Link>

        <Menu mode='horizontal' theme='dark' items={items} />
      </Header>

      {props.children}

      <Footer>
        <h1>Footer</h1>
      </Footer>
    </Layout>
  );
};

export default Default;
