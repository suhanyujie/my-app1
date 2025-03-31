import Footer from '../../components/sandbox/Footer';
import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader';
import IndexRouter from '../../route/index';
import { Layout, Breadcrumb, theme } from 'antd';

export default function NewsSandBox() {
  const { Header, Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu></SideMenu>
      <div>
        <TopHeader>
          <Header style={{ padding: 0, background: colorBgContainer }} />
        </TopHeader>

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <IndexRouter></IndexRouter>
          </div>
        </Content>

        <Footer />
      </div>
    </Layout>
  );
}
