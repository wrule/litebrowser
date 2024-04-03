import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './App.scss';
import Home from './views/Home';

export default function App() {
  return (
    <ConfigProvider locale={zhCN} theme={{
      token: {
        colorPrimary: '#346fff',
        borderRadius: 0,
      },
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}
