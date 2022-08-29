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
      name: "WHALE",
      icon: "https://token-icons.s3.amazonaws.com/0x9355372396e3f6daf13359b7b607a3374cc638e0.png",
      price: "0.83",
      market: "↓",
      marketPrice: "0.17",
      color: "#ff5c5c",
    },
    {
      id: "2",
      name: "Friends With Benefits Pro",
      icon: "https://token-icons.s3.amazonaws.com/0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8.png",
      price: "1.05",
      market: "↑",
      marketPrice: "0.04",
      color: "#4fbf67",
    },
    {
      id: "3",
      name: "Mork",
      icon: "https://token-icons.s3.amazonaws.com/0xf552b656022c218c26dad43ad88881fc04116f76.png",
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
        Social Tokens
      </Typography.Title>

      <Text
      
      >
        Tokens backed by the reputation of an individual, brand, or community
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
