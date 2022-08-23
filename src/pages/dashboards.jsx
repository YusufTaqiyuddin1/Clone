import {
  EyeOutlined,
  EyeFilled,
  CompassOutlined,
  CompassFilled,
  StarOutlined,
  StarFilled,
  SendOutlined,
  SwapOutlined,
  SettingOutlined,
  SettingFilled,
  PlusOutlined,
  RocketOutlined,
  DownOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from 'react';
import {
  Button,
  Input,
  Dropdown,
  Space,
  message,
  Descriptions,
  PageHeader,
  Tooltip,
} from "antd";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const { Search } = Input;

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "1st menu item",
        key: "1",
        icon: <UserOutlined />,
      },
      {
        label: "2nd menu item",
        key: "2",
        icon: <UserOutlined />,
      },
      {
        label: "3rd menu item",
        key: "3",
        icon: <UserOutlined />,
      },
    ]}
  />
);

const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

export default function Dashboard(){

  const [Wallet, setWallet] = useState({
    items: [
      // getItem("Overview", "1", <EyeOutlined />),
      getItem("Explore", "1", <CompassOutlined />),
      getItem("Favorites", "2", <StarOutlined />),
      // getItem("Send", "4", <SendOutlined />),
      getItem("Swap", "3", <SwapOutlined />),
      getItem("Setting", "4", <SettingOutlined />),
    ],
  });

  const [Icons, setIcons] = useState({
    icons: [
      <Dropdown overlay={menu} trigger="click">
        <Button>
          <Space>
            <RocketOutlined />
            Button
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>,

      <Dropdown overlay={menu} trigger="click">
        <Button>
          <Space>
            USD
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>,

      <Dropdown overlay={menu} trigger="click">
        <Button>
          <Space>
            <QuestionCircleOutlined />
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>,

      <Button>
        <EyeOutlined />
      </Button>,
    ],
  });

  return (
    <Layout>
      <Sider
        width={240}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="profile">
          <img
            src={"/img/logo/full-primary.svg"}
            alt="./logo"
            style={{ width: "150px" }}
          />
          <h2>Welcome to Nusagate</h2>
          <p>
            Connect an Etherium wallet
            <br /> to manage your DeFi portofolio
          </p>
          {/* <Button type="primary" icon={<PlusOutlined />}> ConnectButton</Button> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ConnectButton
              chainStatus="none"
              showBalance={true}
              accountStatus="full"
            />
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={Wallet.items}
        />
      </Sider>
      <Layout>
        {" "}
        {/* style={{ background: "#16161a" }} */}
        {/* <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
          }}
        >
          <Search placeholder="input search loading default" loading />
        </Header> */}
        <PageHeader
          style={{ margin: "12px 200px" }} // background: "#16161a"
          ghost={false}
          // title="Title"
          subTitle={
            <Input
              placeholder="Search by token, wallet, ENS"
              style={{ width: "350px" }}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
            />
          } // loading
          extra={Icons.icons}
          // extra={[
          //   <Button key="3">Operation</Button>,
          //   <Button key="2">Operation</Button>,
          //   <Button key="1" type="primary">
          //     Primary
          //   </Button>,
          // ]}
        ></PageHeader>
        <Content
          style={{
            margin: "12px 200px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 1024,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

