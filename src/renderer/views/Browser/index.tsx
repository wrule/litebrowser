import { Button, Col, Form, Input, Layout, Modal, Row, Select, Space, Table, Tag } from 'antd';
import { post } from '../../http';
import LabelEditor from '../../components/LabelEditor';
import { useState } from 'react';

const { Header, Content } = Layout;

export default function Browser() {
  const [form] = Form.useForm();
  const [modal, setModal] = useState<any>(null);

  const getKey = (name: string) => {
    let index = 1;
    while (localStorage.getItem(`${name}-${index}`)) index++;
    return `${name}-${index}`;
  };

  const addItem = (name: string, item: any) => {
    const key = getKey(name);
    localStorage.setItem(key, JSON.stringify({ ...item, key }));
  };

  const removeItem = (name: string, item: any) => {
    const key = item.key;
    localStorage.removeItem(key);
  };

  const updateItem = (name: string, item: any) => {
    const key = item.key;
    localStorage.setItem(key, JSON.stringify({ ...item }));
  };

  const queryItem = (name: string) => {
    const keys = Object.keys(localStorage).filter((key) => key.startsWith(`${name}-`));
    return keys.map((key) => JSON.parse(localStorage.getItem(key)));
  };

  return <div>
    {/* <Row>
      <Button onClick={() => {
        post('/openBrowser', {
          userDataDir: '/Users/jimao/github/litebrowser/0',
        });
      }}>点我</Button>
    </Row> */}
    <Row className="controller">
    <Form
          layout="inline">
          <Form.Item
            label="名称">
            <Input
              placeholder="请输入名称"
            />
          </Form.Item>
          <Form.Item
            label="标签">
            <Input
              placeholder="请输入名称"
            />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button>重置</Button>
              <Button type="primary">搜索</Button>
            </Space>
          </Form.Item>
        </Form>
        <Space>
          <Button type="primary" onClick={() => setModal({ })}>新增</Button>
        </Space>
    </Row>
    {/* <Row className="row">
      <LabelEditor />
    </Row> */}
    <Row className="row">
      <Col span={24}>
        <Table
          bordered
          size="small"
          pagination={false}
          scroll={{ x: 1200 }}
          columns={[
            {
              title: '序号',
              width: 70,
              fixed: 'left',
              sorter: true,
            },
            {
              title: '名称',
              fixed: 'left',
              width: 300,
            },
            {
              title: '标签',
              render: (row) => {
                return <Space>
                  <Tag>1234</Tag>
                  <Tag>1234</Tag>
                </Space>;
              },
            },
            {
              title: '最近打开',
              width: 170,
              fixed: 'right',
              sorter: true,
              render: (row) => {
                return <span>2024-05-31 18:24:56</span>;
              },
            },
            {
              title: '操作',
              width: 120,
              fixed: 'right',
              render: (row) => {
                return <Space>
                  <Button size="small" type="primary">打开</Button>
                </Space>;
              },
            },
          ]}
          dataSource={[{ }, { }, { }]}
        />
      </Col>
    </Row>
    <Modal
      open={modal}
      title={modal?.id ? '编辑浏览器' : '新增浏览器'}
      onOk={async () => {
        try {
          const res: any = await form.validateFields();
          console.log(res);
        } catch (error) {
          console.error(error);
        }
      }}
      onCancel={() => {
        setModal(null);
        form.resetFields();
      }}>
      <Form
        form={form}
        layout="vertical">
        <Form.Item
          label="名称"
          name="name"
          rules={[{ required: true }]}>
          <Input
            placeholder="请输入浏览器名称"
          />
        </Form.Item>
        <Form.Item
          label="内核路径"
          name="browserPath"
          rules={[{ required: true }]}>
          <Input
            placeholder="请输入内核路径"
          />
        </Form.Item>
        <Form.Item
          label="用户数据路径"
          name="userDataDir"
          rules={[{ required: true }]}>
          <Input
            placeholder="请输入用户数据路径"
          />
        </Form.Item>
        <Form.Item
          label="标签"
          name="labels">
          <LabelEditor />
        </Form.Item>
      </Form>
    </Modal>
  </div>;
}
