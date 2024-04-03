import { Routes, Route, useNavigate } from 'react-router-dom';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, Layout, Menu } from 'antd';
import './App.scss';
import { ChromeFilled, CodeSandboxSquareFilled, SettingFilled } from '@ant-design/icons';
import Core from './views/Core';
import Test from './views/Test';
import Config from './views/Config';
import Browser from './views/Browser';
import { useState } from 'react';

const { Sider, Header, Content } = Layout;

export default function App() {
  const navigator = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<string[]>(['browser']);

  const handleChangeMenu = (key: string) => {
    setSelectedMenu([key]);
    navigator(`/${key}`);
  };

  return (
    <ConfigProvider locale={zhCN} theme={{
      token: {
        colorPrimary: '#346fff',
        borderRadius: 0,
      },
    }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="logo_text">
            <h2>LiteBrowser</h2>
          </div>
          <Menu
            theme="dark"
            selectedKeys={selectedMenu}
            onSelect={(info) => handleChangeMenu(info.key)}>
            <Menu.Item key="browser" icon={<ChromeFilled />}>浏览器</Menu.Item>
            <Menu.Item key="core" icon={<CodeSandboxSquareFilled />}>内核管理</Menu.Item>
            <Menu.Item key="config" icon={<SettingFilled />}>系统设置</Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Routes>
            <Route path="/browser" element={<Browser />} />
            <Route path="/core" element={<Core />} />
            <Route path="/config" element={<Config />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
