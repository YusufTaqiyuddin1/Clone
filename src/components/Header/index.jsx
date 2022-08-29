import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {Button, Input, Dropdown, Space, message, PageHeader, Tooltip} from "antd";
import {EyeOutlined, RocketOutlined, DownOutlined, UserOutlined, QuestionCircleOutlined, InfoCircleOutlined} from "@ant-design/icons"; //   EyeFilled,

// style
import "./index.css";

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

export default function Header() {
  const [Icons] = useState({
    // , setIcons
    icons: [
      <Dropdown overlay={menu} trigger="click">
        <Button className="headerButton">
          <Space>
            <RocketOutlined />
            Button
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>,

      <Dropdown overlay={menu} trigger="click">
        <Button className="headerButton">
          <Space>
            USD
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>,

      <Dropdown overlay={menu} trigger="click">
        <Button className="headerButton">
          <Space>
            <QuestionCircleOutlined />
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>,

      <Button className="headerButton">
        <EyeOutlined />
      </Button>,
    ],
  });

  return (
      <PageHeader
        className="pageHeader"
        ghost={false}
        // title="Title"
        subTitle={
          <Input
            className="searchInput"
            placeholder="Search by token, wallet, ENS"
          />
        } // loading
        extra={Icons.icons}
      ></PageHeader>
  );
}
