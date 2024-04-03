import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, Layout, Menu } from 'antd';
import './App.scss';
import Home from './views/Home';
import { ChromeFilled, CodeSandboxSquareFilled, SettingFilled } from '@ant-design/icons';

const { Sider, Header, Content } = Layout;

export default function App() {
  return (
    <ConfigProvider locale={zhCN} theme={{
      token: {
        colorPrimary: '#346fff',
        borderRadius: 0,
      },
    }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <Menu theme="dark" defaultSelectedKeys={['browser']}>
            <Menu.Item key="browser" icon={<ChromeFilled />}>浏览器</Menu.Item>
            <Menu.Item key="core" icon={<CodeSandboxSquareFilled />}>内核管理</Menu.Item>
            <Menu.Item key="config" icon={<SettingFilled />}>系统设置</Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
