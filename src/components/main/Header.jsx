import {
  EyeOutlined,
//   EyeFilled,
  RocketOutlined,
  DownOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import {
  Button,
  Input,
  Dropdown,
  Space,
  message,
  PageHeader,
  Tooltip,
} from "antd";

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

  const [Icons] = useState({ // , setIcons
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
        >

        </PageHeader>
  );
}
