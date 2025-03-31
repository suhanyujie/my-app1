import { Layout } from 'antd';

export default function Footer() {
  const { Footer } = Layout;
  let year = new Date().getFullYear();
  return (
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©{year} Created by Ant UED
    </Footer>
  );
}
