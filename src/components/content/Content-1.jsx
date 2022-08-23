import React from "react";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";

export default function Content1() {
  return (
    <>
      <Typography.Title
        level={1}
        style={{
          margin: "24px 0",
        }}
      >
        Explore
      </Typography.Title>

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
