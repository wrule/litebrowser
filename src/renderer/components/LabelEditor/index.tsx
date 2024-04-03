import React from 'react';
import { Select, Tag } from 'antd';
import style from './index.module.scss';

export default
function LabelEditor(props: any) {
  return <Select
    className={style.com}
    style={{ width: 300 }}
    mode="tags"
    tagRender={(props) => <Tag color="red" closable>{props.label}</Tag>}>
  </Select>
}
