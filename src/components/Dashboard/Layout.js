import React, { useState } from 'react';
import {
  CheckSquareOutlined,
  TeamOutlined,
  ProfileOutlined,
  HomeOutlined,
  HeartOutlined,
  FileTextOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme,Avatar } from 'antd';
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '2', <HomeOutlined />),
  getItem('Option 2', '3', <TeamOutlined />),
  getItem('Option 2', '4', <CheckSquareOutlined />),
  getItem('User', '5', <FileTextOutlined />),
  getItem('Team', '7', <ProfileOutlined />),
  getItem('Files', '8', <HeartOutlined />),
  getItem('Files', '9', <SettingOutlined />),
  getItem('Files', '10', <Avatar style={{ backgroundColor: '#d7e5fd', verticalAlign: 'middle' }} icon={<div style={{fontSize: '15px',paddingLeft:'7px'}}>AS</div>} size="large" >{''}</Avatar>),
];
const Dashboard = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={true} onCollapse={(value) => setCollapsed(true)}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {
            props.children
          }
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;