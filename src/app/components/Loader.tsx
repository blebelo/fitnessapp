// components/Loader.tsx
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import type { SpinProps } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

interface LoaderProps extends SpinProps {
  tip?: string;
  fullscreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ tip = 'Loading...', fullscreen = true }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: fullscreen ? '100vh' : '100%',
        width: '100%',
      }}
    >
      <Spin indicator={antIcon} tip={tip}/>
    </div>
  );
};

export default Loader;
