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

const {  Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function SideBar() {
  const [Wallet] = useState({ // , setWallet
    items: [
      // getItem("Overview", "1", <EyeOutlined />),
      getItem("Explore", "1", <CompassOutlined />),
      getItem("Favorites", "2", <StarOutlined />),
      // getItem("Send", "4", <SendOutlined />),
      getItem("Swap", "3", <SwapOutlined />),
      getItem("Setting", "4", <SettingOutlined />),
    ],
  });

  return (
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
      style={{ backgroundColor: "#1d1d21" }}
    >
      <div className="profile" style={{ backgroundColor: "#1d1d21" }}>
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
        style={{ backgroundColor: "#1d1d21" }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={Wallet.items}
      />
    </Sider>
  );
};