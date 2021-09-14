import React from "react";
// import ant-design
import "antd/dist/antd.css";
import { DesktopOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
import logo from "../../assets/img/logo.png";
// import router
import { Route } from "react-router";
import { Link } from "react-router-dom";
//import page/component
import DaftarPengajuan from "./DaftarPengajuan";
import DetailPengajuan from "./DetailPengajuan";

const { Sider } = Layout;

class Beranda extends React.Component {
  state = { collapsed: false };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        {/* Awal Menu Navigasi */}
        <Sider theme="light" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">
            <img src={logo} />
          </div>
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link to="/Beranda">Beranda</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <Link to="/Beranda/DaftarPengajuan">Daftar Pengajuan</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <a>Sign Out</a>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* Akhir Menu Navigasi */}

        {/* Awal Isi konten */}
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background cstm-layout" style={{ padding: 10, minHeight: 360 }}>
            <Route component={DaftarPengajuan} path="/Beranda/DaftarPengajuan" exact />
          </div>
          <div className="site-layout-background cstm-layout" style={{ padding: 10, minHeight: 360 }}>
            <Route component={DetailPengajuan} path="/Beranda/DetailPengajuan/:id" />
          </div>
        </Content>
        {/* Akhir Isi konten */}
      </Layout>
    );
  }
}

export default Beranda;
