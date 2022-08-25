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
      name: "DeFi Pulse",
      icon: "https://token-icons.s3.amazonaws.com/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png",
      price: "24.03",
      market: "↑",
      marketPrice: "0.52",
      color: "#4fbf67",
    },
    {
      id: "2",
      name: "Metaverse Index",
      icon: "https://token-icons.s3.amazonaws.com/0x72e364f2abdc788b7e918bc238b21f109cd634d7.png",
      price: "43,12",
      market: "↓",
      marketPrice: "0.20",
      color: "#ff5c5c",
    },
    {
      id: "3",
      name: "total Crypto Market Cap",
      icon: "https://token-icons.s3.amazonaws.com/0x16c52ceece2ed57dad87319d91b5e3637d50afa4.png",
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
        DeFi Indexes
      </Typography.Title>

      <Text
        style={{ margin: "32px 0 12px 0", color: "#70737b", fontWeight: "550" }}
      >
        Tokenized baskets of high quality DeFi projects
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
