import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Typography,
  Statistic,
  Avatar,
  List,
  Badge,
} from "antd";
import {
  SwapOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

import "../index.css";

const { Text, Link, Title } = Typography;

export default function Content1() {
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
      <Typography.Title
        level={2}
        style={{
          margin: "32px 0 4px 0",
          color: "#fff",
        }}
      >
        Layer-2 Scaling Tokens
      </Typography.Title>

      <Text
        style={{ margin: "32px 0 12px 0", color: "#70737b", fontWeight: "550" }}
      >
        Tokens building second layer networks to scale Ethereum
      </Text>
      <Link
        href="https://ant.design"
        target="_blank"
        style={{ float: "right" }}
      >
        See all
      </Link>

      <div className="site-card-wrapper" style={{ marginTop: "24px" }}>
        <Row gutter={16}>
          {datas.map((data) => {
            return (
              <Col span={8}>
                <Card bordered={false} className="Card">
                  <Avatar
                    style={{ verticalAlign: "middle" }}
                    size="large"
                    gap={4}
                    src={data.icon}
                  />
                  <span
                    style={{
                      color: "#fff",
                      marginLeft: "8px",
                      fontWeight: "600",
                    }}
                  >
                    {data.name}
                  </span>
                  <p style={{ margin: "24px 0 0 0", color: "#70737b" }}>
                    Price
                  </p>
                  <Title level={2} style={{ color: "#fff" }}>
                    ${data.price}
                    <Title
                      level={5}
                      prefix={"haha"}
                      style={{
                        display: "inline",
                        marginLeft: "6px",
                        color: data.color,
                      }}
                    >
                      {data.market}
                      {data.marketPrice}%
                    </Title>
                  </Title>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
