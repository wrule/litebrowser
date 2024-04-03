import { Button } from 'antd';
import { post } from '../../http';

export default function Browser() {
  return <div>
    <Button type="primary" onClick={async () => {
      const res: any = await post('/openBrowser', { userDataDir: '/Users/jimao/github/cbmgr/0' });
    }}>点我</Button>
  </div>;
}
