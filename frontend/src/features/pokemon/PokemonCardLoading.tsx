import React, { useState } from 'react';
import { Skeleton } from 'antd';

type ButtonShapeType = 'circle' | 'square' | 'round' | 'default';

export interface LoadingProps {
  active: boolean;
}

const PokemonCardLoading = (props: LoadingProps) => {
  const [block] = useState(true);
  const [buttonShape] = useState<ButtonShapeType>('default');

  return (
    <>
      <Skeleton.Button
        style={{ height: 250 }}
        active={props.active}
        size='large'
        shape={buttonShape}
        block={block}
      />

      <Skeleton.Button
        style={{ marginTop: 10, height: 20 }}
        active={props.active}
        size='small'
        shape={buttonShape}
        block={block}
      />

      <Skeleton.Button
        style={{ marginTop: 10, height: 20 }}
        active={props.active}
        size='small'
        shape={buttonShape}
        block={block}
      />
    </>
  );
};

export default PokemonCardLoading;
