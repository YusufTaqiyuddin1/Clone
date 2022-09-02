import React, { useState, useEffect } from "react";
import "./index.css";
import { Line } from "@ant-design/charts";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  Col,
  InputNumber,
  Row,
  Select,
  Space,
  Switch,
  Table,
  Tag,
  Typography,
  message,
  Menu,
  Dropdown,
  Layout,
} from "antd";
import {
  UserOutlined,
  SendOutlined,
  StarOutlined,
  TwitterOutlined,
  FlagOutlined,
  SettingOutlined,
  RightOutlined,
  SwapOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;
const { Content } = Layout;
const { Option } = Select;
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

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

const Detail = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);

    const [datas1, setdata1] = useState([
        {
        id: "1",
        name: "DPI",
        src: "https://token-icons.s3.amazonaws.com/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png",
        price: "12.14",
        profitDicrection: "-",
        profit: "2.1",
        },
    ]);  

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0,
      end: 1,
    },
  };

  const underlyingToken = [
    {
      key: "1",
      asset: "Uniswap",
      quantity: "4.147 UNI",
      price: "$6.02",
      allocation: "$24.99",
      share: "29.4%",
      action: <RightOutlined />,
    },
    {
      key: "2",
      asset: "Aave Token",
      quantity: "0.182 AAVE",
      price: "$83.02",
      allocation: "$15.99",
      share: "17.4%",
      action: <RightOutlined />,
    },
    {
      key: "3",
      asset: "Synthetix Network Token",
      quantity: "3.307 SNX",
      price: "$3.05",
      allocation: "$10.99",
      share: "11.4%",
      action: <RightOutlined />,
    },
    {
      key: "4",
      asset: "Maker",
      quantity: "0.012 MKR",
      price: "$748.02",
      allocation: "$9.99",
      share: "11.4%",
      action: <RightOutlined />,
    },
    {
      key: "5",
      asset: "LoopingCoin v2",
      quantity: "17.92 LRC",
      price: "$0.32",
      allocation: "$6.19",
      share: "7.4%",
      action: <RightOutlined />,
    },
    {
      key: "6",
      asset: "Compound",
      quantity: "0.098 COMP",
      price: "$45.02",
      allocation: "$4.99",
      share: "5.4%",
      action: <RightOutlined />,
    },
  ];

  const columns = [
    {
      title: "Asset",
      dataIndex: "asset",
      key: "asset",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Allocation",
      dataIndex: "allocation",
      key: "allocation",
    },
    {
      title: "Share",
      dataIndex: "share",
      key: "share",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
    },
  ];

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

  //   const stats = [
  //     {
  //       key: "1",
  //       day1: "-3.6%",
  //       month1: "-21.7%",
  //       month3: "-14.2%",
  //       year1: "−79.2%",
  //       marketCap: "$31.6M",
  //       fullyDiluted: "$31.5M",
  //     },
  //   ];

  //   const columns = [
  //     {
  //       title: "1 Day",
  //       dataIndex: "day1",
  //       key: "1day",
  //     },
  //     {
  //       title: "1 Month",
  //       dataIndex: "month1",
  //       key: "1month",
  //     },
  //     {
  //       title: "3 Month",
  //       dataIndex: "month3",
  //       key: "3month",
  //     },
  //     {
  //       title: "1 Year",
  //       dataIndex: "year1",
  //       key: "1year",
  //     },
  //     {
  //       title: "Market Cap",
  //       dataIndex: "marketCap",
  //       key: "marketCap",
  //     },
  //     {
  //       title: "Fully Diluted",
  //       dataIndex: "fullyDiluted",
  //       key: "fullyDiluted",
  //     },
  //   ];

  return (
    <Content className="detailContent">
      <Space direction="vertical" style={{ position: "relative" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Space className="tokenProfile">
              <Avatar size="large" src={datas1[0].src} />
              <Text>{datas1[0].name}</Text>
            </Space>
          </Col>
          <Col span={8} offset={8}>
            <Space size="small" className="iconLink">
              <Avatar size="large" icon={<SendOutlined />} />
              <Avatar size="large" icon={<StarOutlined />} />
              <Avatar size="large" icon={<TwitterOutlined />} />
              <Avatar size="large" icon={<FlagOutlined />} />
            </Space>
          </Col>
        </Row>

        <Space align="start" direction="vertical">
          <Title level={1}>DeFi Pulse</Title>
          <Space direction="horizontal" align="baseline" size={8}>
            <Title level={2} className="cardPrice" style={{ margin: 0 }}>
              ${datas1[0].price}
            </Title>
            <Text
              level={5}
              className="cardPricePercent"
              style={{
                // display: "inline",
                // marginLeft: "6px",
                color: "red",
              }}
            >
              {datas1[0].profitDicrection}
              {datas1[0].profit}%
            </Text>
          </Space>

          <Space direction="horizontal"></Space>
        </Space>

        <Line {...config} />

        <Space direction="horizontal" align="center">
          <Space>
            <Button className="btnDateChart">1H</Button>
            <Button className="btnDateChart">1D</Button>
            <Button className="btnDateChart">1W</Button>
            <Button className="btnDateChart">1M</Button>
            <Button className="btnDateChart">1Y</Button>
          </Space>
          <Space>
            <Button
              size="large"
              className="btnChartConfig"
              icon={<SettingOutlined />}
            ></Button>
          </Space>
        </Space>

        <Space direction="vertical" className="tess">
          <Title>Underlying Tokens</Title>
          {/* <Space direction="horizontal"> */}
          <Table
            className="tableUnderlyingToken"
            columns={columns}
            dataSource={underlyingToken}
            pagination={false}
          />
          {/* </Space> */}
        </Space>
      </Space>

      <Space direction="vertical" align="start" className="tradeForm">
        <div className="site-layout-background">
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
      </Space>

      {/* <Space align="start" direction="vertical">
        <Space direction="horizontal">
          <Row gutter={[16,16]} justify="between">
            <Col span={8}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Col>
            <Col span={8} offset={8}>
              <Avatar size="large" icon={<UserOutlined />} />
              <Avatar size="large" icon={<UserOutlined />} />
              <Avatar size="large" icon={<UserOutlined />} />
            </Col>
          </Row>
          </Space>
        </Space>

        <Space direction="horizontal" style={{ justifyContent: "space-between" }}>
          <Avatar size="large" icon={<UserOutlined />} />
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Col>
            <Col className="gutter-row" span={6}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Col>
            <Col className="gutter-row" span={6}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Col>
          </Row>
        </Space> */}
    </Content>
  );
};

export default Detail;
