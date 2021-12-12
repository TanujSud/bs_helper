import { Layout, Menu } from 'antd';
import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import './theme.css';
import Parameters from './Parameters'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';

import Submit from './Submit';
import Test from './Test';
import Snippet from './Snippet';

const { Header, Content, Sider } = Layout;

function Home(){
  const [collapsed, setCollapsed] = useState(false)
  const [spinner, setSpinner] = useState(false)

  const onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  const onSubmitt = (value) => {
    console.log(value)
  }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>BharatSim</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Parameters
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Interventions
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              Output
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <div>
          <Submit onSubmitt={value => {
          onSubmitt(value)
        }}/>
          <Snippet />
        
      </div>
          <Content style={{ margin: '24px 24px' }}>
            <Parameters />
          </Content>
        </Layout>
      </Layout>
    );

}

export default Home