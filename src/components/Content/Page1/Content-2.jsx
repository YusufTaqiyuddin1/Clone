import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Typography,
  Statistic,
  Avatar,
  List,
  Badge,
  Space,
  Button,
} from "antd";
import {
  SwapOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

import "../index.css";
import "./index.css";

const { Text, Title } = Typography;
export default function Content2() {
  const [datas, setData] = useState([
    {
      id: "1",
      name: "Dai",
      icon: "https://s3.amazonaws.com/token-icons/0x6b175474e89094c44da98b954eedeac495271d0f.png",
      price: "31.04",
      market: "↓",
      marketPrice: "0.27",
      color: "#ff5c5c",
    },
    {
      id: "2",
      name: "Wrapped BTC",
      icon: "https://token-icons.s3.amazonaws.com/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
      price: "4,12",
      market: "↑",
      marketPrice: "0.10",
      color: "#4fbf67",
    },
    {
      id: "3",
      name: "Chainlink",
      icon: "https://s3.amazonaws.com/token-icons/0x514910771af9ca656af840dff83e8264ecf986ca.png",
      price: "17,6",
      market: "↓",
      marketPrice: "0.18",
      color: "#ff5c5c",
    },
  ]);

  return (
    <>
      <Space align="start" direction="vertical" style={{ width: "100%" }}>
        <Typography.Title level={2}>DeFi Blue Chips</Typography.Title>
        <Space direction="horizontal">
          <Text>Top DeFi tokens by Market Cap</Text>
          <Link to="../favorite" style={{ color: "#2962ef" }}>
            See all
          </Link>
        </Space>
      </Space>

      <div className="site-card-wrapper" style={{ marginTop: "24px" }}>
        <Row gutter={[16, 8]}>
          {datas.map((data) => {
            return (
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Link to="../favorite">
                  <Card className="Card" bordered={false}>
                    <Space align="start" direction="vertical">
                      <Space direction="horizontal">
                        <Avatar
                          style={{ verticalAlign: "middle" }}
                          size="large"
                          gap={4}
                          src={data.icon}
                        />
                        <span className="cardSubtitle">{data.name}</span>
                      </Space>
                      <Space>
                        <p style={{ margin: "24px 0 0 0", color: "#70737b" }}>
                          Price
                        </p>
                      </Space>
                      <Space align="end" direction="horizontal">
                        <Title
                          level={2}
                          className="cardPrice"
                          style={{ margin: 0 }}
                        >
                          ${data.price}
                        </Title>
                        <Title
                          level={5}
                          className="cardPricePercent"
                          style={{
                            // display: "inline",
                            // marginLeft: "6px",
                            color: data.color,
                          }}
                        >
                          {data.market}
                          {data.marketPrice}%
                        </Title>
                        <Button className="btnTrade" type="primary">
                          Trade
                        </Button>
                      </Space>
                    </Space>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
