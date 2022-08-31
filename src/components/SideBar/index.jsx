import {
  // EyeOutlined,
  // EyeFilled,
  CompassOutlined,
  // CompassFilled,
  StarOutlined,
  // StarFilled,
  // SendOutlined,
  SwapOutlined,
  SettingOutlined,
  // SettingFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./style.css";
import { Outlet, Link } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(true);

  const changeMenu = () => {
    if (window.width() < 1200) {
      setCollapsed(!collapsed);
    } else {
      setCollapsed(collapsed);
    }
  };
  window.addEventListener("resize", changeMenu);

  const [Wallet] = useState({
    // , setWallet
    items: [
      // getItem("Overview", "1", <EyeOutlined />),
      getItem(
        <Link to="explore">
          <CompassOutlined /> Explore
        </Link>
      ),
      getItem(
        <Link to="favorite">
          <StarOutlined /> Favorites
        </Link>
      ),
      // getItem("Send", "4", <SendOutlined />),
      getItem(
        <Link to="swap">
          <SwapOutlined /> Swap
        </Link>
      ),
      getItem(
        <Link to="setting">
          <SettingOutlined /> Setting
        </Link>
      ),
    ],
  });

  return (
    <Sider
      className="sider"
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
        <div className="connectButton">
          <ConnectButton
            chainStatus="none"
            showBalance={true}
            accountStatus="full"
          />
        </div>
      </div>
      <Menu
        className="siderMenu"
        mode="inline"
        inlineCollapsed={collapsed}
        // defaultSelectedKeys={["1"]}
        items={Wallet.items}
      />
    </Sider>
  );
}
