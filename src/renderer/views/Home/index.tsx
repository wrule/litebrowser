import React from 'react';
import style from './index.module.scss';
import { Button } from 'antd';

export default function Home() {
  return <div className={style.view}>
    <Button type="primary">你好，世界</Button>
  </div>;
}
