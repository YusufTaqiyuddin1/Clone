import React from "react";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";

const { Text, Link } = Typography;

export default function Content2() {
  return (
    <>
      <Typography.Title
        level={2}
        style={{
          margin: "32px 0 4px 0",
        }}
      >
        Explore
      </Typography.Title>

      <Text style={{ margin: "32px 0 12px 0" }}>
        Tokenized baskets of high quality DeFi projects
      </Text>
      <Link href="https://ant.design" target="_blank">
        Ant Design (Link)
      </Link>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <Card
              bordered={false}
              style={{ background: "#7ad28d", borderRadius: "15px" }}
              hoverable
            >
              <span style={{ fontWeight: "bold", color: "#fff" }}>
                Top Gainers
              </span>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              bordered={false}
              style={{ background: "#dd657c", borderRadius: "15px" }}
              hoverable
            >
              <span style={{ fontWeight: "bold", color: "#fff" }}>
                Top Losers
              </span>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              bordered={false}
              style={{ background: "#4ac3c7", borderRadius: "15px" }}
              hoverable
            >
              <span style={{ fontWeight: "bold", color: "#fff" }}>Market</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              bordered={false}
              style={{ background: "#e9a54e", borderRadius: "15px" }}
              hoverable
            >
              <span style={{ fontWeight: "bold", color: "#fff" }}>Pools</span>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
