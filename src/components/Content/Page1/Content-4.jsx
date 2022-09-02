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

const { Text,  Title } = Typography;

export default function Content4() {
  const [datas, setData] = useState([
    {
      id: "1",
      name: "Polygon (Matic)",
      icon: "https://token-icons.s3.amazonaws.com/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
      price: "24.03",
      market: "↑",
      marketPrice: "0.52",
      color: "#4fbf67",
    },
    {
      id: "2",
      name: "LoopringCoin v2",
      icon: "https://token-icons.s3.amazonaws.com/0xbbbbca6a901c926f240b89eacb641d8aec7aeafd.png",
      price: "43,12",
      market: "↓",
      marketPrice: "0.20",
      color: "#ff5c5c",
    },
    {
      id: "3",
      name: "OMG Network",
      icon: "https://s3.amazonaws.com/token-icons/0xd26114cd6ee289accf82350c8d8487fedb8a0c07.png",
      price: "120,60",
      market: "↑",
      marketPrice: "0.47",
      color: "#4fbf67",
    },
  ]);

  return (
    <>
      <Space align="start" direction="vertical" style={{ width: "100%" }}>
        <Typography.Title level={2}>Layer-2 Scaling Tokens</Typography.Title>
        <Space direction="horizontal">
          <Text>Tokens building second layer networks to scale Ethereum</Text>
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
