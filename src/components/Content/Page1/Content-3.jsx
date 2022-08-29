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
import "./index.css";

const { Text, Link, Title } = Typography;
export default function Content3() {
  const [datas1, setData1] = useState([
    {
      id: "1",
      name: "Decentraland MANA",
      icon: "https://token-icons.s3.amazonaws.com/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png",
      price: "0.83",
      market: "↓",
      marketPrice: "0.17",
      color: "#ff5c5c",
    },
    {
      id: "2",
      name: "SAND",
      icon: "https://token-icons.s3.amazonaws.com/0x3845badade8e6dff049820680d1f14bd3903a5d0.png",
      price: "1.05",
      market: "↑",
      marketPrice: "0.04",
      color: "#4fbf67",
    },
    {
      id: "3",
      name: "chiliZ",
      icon: "https://token-icons.s3.amazonaws.com/0x3506424f91fd33084466f402d5d97f05f8e3b4af.png",
      price: "0.24",
      market: "↓",
      marketPrice: "0.12",
      color: "#ff5c5c",
    },
  ]);

  return (
    <>
      <Typography.Title
        level={2}
      >
        Non-Fungible Token (NFT) Protocols
      </Typography.Title>

      <Text
       
      >
        Protocols representing digital assets and collectibles with unique characteristic
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
          {datas1.map((data) => {
            return (
              <Col span={8}>
                <Card className="Card" bordered={false}>
                  <Avatar
                    style={{ verticalAlign: "middle" }}
                    size="large"
                    gap={4}
                    src={data.icon}
                  />
                  <span className="cardSubtitle">{data.name}</span>
                  <p style={{ margin: "24px 0 0 0", color: "#70737b" }}>
                    Price
                  </p>
                  <Title level={2} style={{ margin: 0 }}>
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
