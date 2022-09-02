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
export default function Content5() {
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
      <Space align="start" direction="vertical" style={{ width: "100%" }}>
        <Typography.Title level={2}>Social Tokens</Typography.Title>
        <Space direction="horizontal">
          <Text>
            Tokens backed by the reputation of an individual, brand, or
            community
          </Text>
          <Link to="../favorite" style={{ color: "#2962ef" }}>
            See all
          </Link>
        </Space>
      </Space>

      <div className="site-card-wrapper" style={{ marginTop: "24px" }}>
        <Row gutter={[16, 8]}>
          {datas1.map((data) => {
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

        {/* <Row gutter={16}>
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
        </Row> */}
      </div>
    </>
  );
}
