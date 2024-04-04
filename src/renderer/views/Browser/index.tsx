import { Button, Col, Form, Input, Layout, Row, Select, Space, Table, Tag } from 'antd';
import { post } from '../../http';
import LabelEditor from '../../components/LabelEditor';

const { Header, Content } = Layout;

export default function Browser() {
  return <div>
    <Row>
      <Button onClick={() => {
        post('/openBrowser', {
          userDataDir: '/Users/jimao/github/litebrowser/0',
        });
      }}>点我</Button>
    </Row>
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
          <Button type="primary">新增</Button>
        </Space>
    </Row>
    <Row className="row">
      <LabelEditor />
    </Row>
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
    {/* <Button type="primary" onClick={async () => {
      const res: any = await post('/openBrowser', { userDataDir: '/Users/jimao/github/cbmgr/0' });
    }}>点我</Button> */}
  </div>;
}
