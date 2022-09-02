import React from "react";
import {
  Card,
  Layout,
  Typography,
  Dropdown,
  Button,
  Space,
  message,
  Menu,
  Image,
  Avatar,
  Row,
  Col,
  InputNumber,
  Select,
} from "antd";
import {
  FilterOutlined,
  DownOutlined,
  UserOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import "./index.css";
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Text, Title } = Typography;
const { Option } = Select;

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "Ethereum",
        key: "1",
        icon: <UserOutlined />,
      },
      {
        label: "Arbitrum",
        key: "2",
        icon: <UserOutlined />,
      },
      {
        label: "Aurora",
        key: "3",
        icon: <UserOutlined />,
      },
      {
        label: "Avalanche",
        key: "4",
        icon: <UserOutlined />,
      },
      {
        label: "BSC",
        key: "5",
        icon: <UserOutlined />,
      },
    ]}
  />
);

const Swap = () => {
  const [chains, setChain] = React.useState([
    {
      id: "1",
      token: "ETH",
      src: "https://chain-icons.s3.amazonaws.com/ethereum.png",
    },
    {
      id: "2",
      token: "USDC",
      src: "https://token-icons.s3.amazonaws.com/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
    },
    {
      id: "3",
      token: "USDT",
      src: "https://token-icons.s3.amazonaws.com/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    },
    {
      id: "4",
      token: "DAI",
      src: "https://s3.amazonaws.com/token-icons/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    },
    {
      id: "5",
      token: "MATIC",
      src: "https://token-icons.s3.amazonaws.com/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
    },
  ]);

  return (
    <Content>
      <div className="site-layout-background">
        <Title level={1}>Swap</Title>
        <Text>Trade any token, LP share or Vault in a single transaction</Text>

        <Card
          style={{ width: 530, marginTop: "24px" }}
          title={
            <Dropdown overlay={menu} trigger="click">
              <Button>
                <Space>
                  <Avatar
                    src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                    alt="chains"
                    shape="square"
                    width={28}
                  />
                  Etherium
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          }
          extra={
            <Link to="../explore">
              <FilterOutlined />
            </Link>
          }
        >
          <Card className="swapCard">
            <Space direction="vertical" align="start">
              <Text className="textSwap">Pay with</Text>
              <Space align="center" direction="horizontal" size={36}>
                <Select
                  className="payWithSelect"
                  defaultValue="ETH"
                  style={{
                    width: 128,
                  }}
                  onChange={handleChange}
                >
                  {chains.map((chain) => {
                    return (
                      <Option value={chain.token}>
                        <Space align="start" direction="horizontal">
                          <Avatar
                            src={chain.src}
                            style={{ width: "30px", height: "30px" }}
                            alt={chain.token}
                          />
                          <Text className="chainText">{chain.token}</Text>
                        </Space>
                      </Option>
                    );
                  })}
                </Select>
                <InputNumber
                  dir="ltr"
                  placeholder="0"
                  controls={false}
                  bordered={false}
                />
              </Space>
              <Text type="secondary">Balance: 0</Text>
            </Space>
          </Card>

          <div className="btnSwap">
            <Button shape="circle" size={40} icon={<SwapOutlined />} />
          </div>

          <Card className="swapCard">
            <Space direction="vertical" align="start">
              <Text className="textSwap">Recieve</Text>
              <Space align="center" direction="horizontal" size={36}>
                <Select
                  className="payWithSelect"
                  defaultValue="USDC"
                  style={{
                    width: 128,
                  }}
                  onChange={handleChange}
                >
                  {chains.map((chain) => {
                    return (
                      <Option value={chain.token}>
                        <Space align="start" direction="horizontal">
                          <Avatar
                            src={chain.src}
                            style={{ width: "30px", height: "30px" }}
                            alt={chain.token}
                          />
                          <Text className="chainText">{chain.token}</Text>
                        </Space>
                      </Option>
                    );
                  })}
                </Select>
                <InputNumber
                  dir="ltr"
                  placeholder="0"
                  controls={false}
                  bordered={false}
                />
              </Space>
              <Text type="secondary">Balance: 0</Text>
            </Space>
          </Card>

          <Button className="buttonSwap" type="primary" block disabled>
            Enter amount
          </Button>
        </Card>
      </div>
    </Content>
  );
};

export default Swap;
