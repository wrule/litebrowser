import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { ConfigProvider } from 'antd';
import Home from './views/Home';

export default function App() {
  return (
    <ConfigProvider theme={{
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
