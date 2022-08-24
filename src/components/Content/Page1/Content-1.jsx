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
          color: "#fff",
        }}
      >
        Explore
      </Typography.Title>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <Card
              bordered={false}
              style={{
                background: "#7ad28d",
                borderRadius: "15px",
                backgroundImage: `url("https://app.zerion.io/src/pages/Explore/pages/Main/Categories/images/top-gainers@2x.file-loader.41d1b0e6743d195a51db00f91f01a8a1.png")`,
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "94px",
              }}
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
              style={{
                background: "#dd657c",
                borderRadius: "15px",
                backgroundImage: `url("https://app.zerion.io/src/pages/Explore/pages/Main/Categories/images/top-losers@2x.file-loader.8ff0fef056485e51a99155bbb79e33a1.png")`,
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "94px",
              }}
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
              style={{
                background: "#4ac3c7",
                borderRadius: "15px",
                backgroundImage: `url("https://app.zerion.io/src/pages/Explore/pages/Main/Categories/images/market@2x.file-loader.21b3514b9cf23fd8b6995f8389098c26.png")`,
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "94px",
              }}
              hoverable
            >
              <span style={{ fontWeight: "bold", color: "#fff" }}>Market</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              bordered={false}
              style={{
                background: "#e9a54e",
                borderRadius: "15px",
                backgroundImage: `url("https://app.zerion.io/src/pages/Explore/pages/Main/Categories/images/pools@2x.file-loader.f51a21934aee0de6e36a6b6befc2911c.png")`,
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "94px",
              }}
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
