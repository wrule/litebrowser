import { Button, Col, Dropdown, Form, Input, Layout, Menu, Modal, Row, Select, Space, Table, Tag } from 'antd';
import { post } from '../../http';
import LabelEditor from '../../components/LabelEditor';
import { useEffect, useState } from 'react';
import LDB from '../../ldb';
import { MoreOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const db = new LDB('browser');

export default function Browser() {
  const [form] = Form.useForm();
  const [modal, setModal] = useState<any>(null);

  const [list, setList] = useState<any[]>([]);
  const [filter, setFilter] = useState<any>({ });
  const updateTable = (params: any = { }) => {
    const newFilter = { ...filter, ...params };
    setList(db.queryItem());
  };

  const handleRemove = (item: any) => {
    Modal.confirm({
      width: 600,
      title: '删除确认',
      content: <div>
        <h4>确认删除此浏览器吗？</h4>
        <div>此操作并不会删除你的用户数据或浏览器内核，如需删除请在文件系统内手动操作。</div>
      </div>,
      onOk: () => {
        db.removeItem(item);
        updateTable();
      },
    });
  };

  useEffect(() => {
    updateTable();
  }, []);

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
              <Button type="primary" onClick={() => updateTable()}>搜索</Button>
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
              dataIndex: '__key',
              width: 70,
              fixed: 'left',
              sorter: true,
              render: (__key: string) => {
                return __key.split('-')[2];
              },
            },
            {
              title: '名称',
              dataIndex: 'name',
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
                  <Button size="small" type="primary" onClick={() => {
                    post('/openBrowser', {
                      userDataDir: row.userDataDir,
                    });
                  }}>打开</Button>
                  <Dropdown menu={{ items: [
                    { key: '1', label: '编辑', onClick: () => {
                      form.setFieldsValue(row);
                      setModal(row);
                    } },
                    { key: '2', label: '复制' },
                    { key: '3', label: '删除', danger: true, onClick: () => handleRemove(row) },
                  ] }}>
                    <MoreOutlined className="more_actions" />
                  </Dropdown>
                </Space>;
              },
            },
          ]}
          dataSource={list}
        />
      </Col>
    </Row>
    <Modal
      open={modal}
      title={modal?.__key ? '编辑浏览器' : '新增浏览器'}
      onOk={async () => {
        try {
          const data = { ...modal, ...(await form.validateFields()) };
          if (modal.__key) db.updateItem(data);
          else db.addItem(data);
          updateTable();
          setModal(null);
          form.resetFields();
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
