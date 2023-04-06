import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './router';

/* STYLES */
import 'antd/dist/reset.css';
import './assets/scss/main.scss';

/* COMPONENTS */
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <Header>
          <div className='header__logo'></div>
        </Header>

        <Content>
          <RouterProvider router={router} />
        </Content>

        <Footer>
          <h1>Footer</h1>
        </Footer>
      </Layout>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
