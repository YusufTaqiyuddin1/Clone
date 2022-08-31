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
} from "antd";
import {
  FilterOutlined,
  DownOutlined,
  UserOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import "./index.css";
const { Content } = Layout;
const { Text, Title } = Typography;

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
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

const Swap = () =>{
  const [chain, setChain] = React.useState([
    // {
    //   id: "1",
    //   Token: "ETH",
    //   src: "https://chain-icons.s3.amazonaws.com/ethereum.png"
    // },
    // {
    //   id: "2",
    //   Token: "USDC",
    //   src: "https://token-icons.s3.amazonaws.com/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
    // }
  ])
    return (
      <Content>
        <div className="site-layout-background">
          <Title level={1}>Swap</Title>
          <Text>
            Trade any token, LP share or Vault in a single transaction
          </Text>

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
              <a href="../explore">
                <FilterOutlined />
              </a>
            }
          >
            <Card className="swapCard">
              <Space direction="vertical" align="start">
                <Text className="textSwap">Pay with</Text>
                <Space align="center" direction="horizontal" size={48}>
                  <Dropdown overlay={menu} trigger="click">
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <Avatar
                          src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                          alt="tes"
                          size={28}
                        />
                        ETH
                        <DownOutlined />
                      </Space>
                    </a>
                    {/* <Button>
                      <Space>
                        <Avatar
                          src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                          alt="tes"
                          size={28}
                        />
                        Ethereum
                        <DownOutlined />
                      </Space>
                    </Button> */}
                  </Dropdown>
                  <InputNumber
                    dir="ltr"
                    placeholder="0"
                    controls={false}
                    bordered={false}
                  />
                </Space>
                <Text type="secondary">Balance: 0</Text>

                {/* <Row justify="space-between">
                  <Col span={5}>
                    <h1>Card Content</h1>
                  </Col>
                  <Col span={5}>
                    
                  </Col>
                </Row> */}
              </Space>
              {/* <Space direction="vertical" size="small" align="center">
                <p>Card content</p>
                <Row justify="space-between">
                  <Col span={6}>
                    <h1>tes</h1>
                  </Col>
                  <Col span={6} offset={6}>
                    <h2>tes</h2>
                  </Col>
                </Row>
                <Button overlay={menu} tringger="click" />
              </Space> */}
              {/* <Space direction="vertical" size="small" align="start">
                <p>Card content</p>
                <Space size={200} align="center" direction="horizontal">
                  <Dropdown overlay={menu} trigger="click">
                    <Button>
                      <Space align="start" >
                        <Avatar
                          src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                          alt="tes"
                          width={28}
                        />
                        <Typography.Title level={3}>Etherium</Typography.Title>
                      </Space>
                      <Space>
                        <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                  <Typography.Title level={2}>0</Typography.Title>
                </Space>
              </Space> */}
            </Card>

            <div className="btnSwap">
              <Button shape="circle" size={40} icon={<SwapOutlined />} />
            </div>

            <Card className="swapCard">
              <Space direction="vertical" align="start">
                <Text className="textSwap">Recieve</Text>
                <Space align="center" direction="horizontal" size={40}>
                  <Dropdown overlay={menu} trigger="click">
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <Avatar
                          src="https://token-icons.s3.amazonaws.com/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
                          alt="tes"
                          size={28}
                        />
                        USDC
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
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
}

export default Swap;