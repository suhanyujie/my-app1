import Footer from '../../components/sandbox/Footer';
import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader';
import IndexRouter from '../../route/index';
import { Layout, Breadcrumb, theme } from 'antd';

export default function NewsSandBox() {
  const { Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const breadcrumbItems = [
    {
      title: '首页',
      href: '/home',
    },
    {
      title: '用户管理',
      href: '/user',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu></SideMenu>
      <div>
        <TopHeader></TopHeader>

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItems} />

          <div
            style={{
              padding: 24,
              minHeight: 360,
              height: '100vh',
              minWidth: '600px',
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
