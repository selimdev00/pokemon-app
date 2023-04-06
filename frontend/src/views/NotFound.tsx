import React from 'react';
import { Button, Image, Typography } from 'antd';
const { Title, Paragraph } = Typography;

import notFoundImage from '../assets/images/404.webp';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Title>Uh Oh :(</Title>

      <Paragraph>
        Uh-oh, it looks like the Pokémon you&apos;re looking for isn&apos;t here!
      </Paragraph>

      <Paragraph>
        Please check your URL or go back to our homepage to continue your journey.
      </Paragraph>

      <Image src={notFoundImage} width={600} />

      <Link to='/'>
        <Button>Go home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
