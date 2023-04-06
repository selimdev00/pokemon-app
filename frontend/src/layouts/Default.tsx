import React from 'react';
import { Menu, Layout, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { DingtalkOutlined } from '@ant-design/icons';
const { Header, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    label: <Link to='/about'>About pokemons</Link>,
    key: 'mail',
    icon: <DingtalkOutlined />,
  },

  {
    label: (
      <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
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
