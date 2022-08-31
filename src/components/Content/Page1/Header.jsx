import React, { useState } from "react";
import { Card, Col, Row, Typography } from "antd";
import "./index.css";

export default function Header() {
  const [datas, setData] = useState([
    {
      background: "#7ad28d",
      borderRadius: "15px",
      backgroundImage: `url("https://app.zerion.io/src/pages/Explore/pages/Main/Categories/images/top-gainers@2x.file-loader.41d1b0e6743d195a51db00f91f01a8a1.png")`,
      backgroundPosition: "right bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "94px",
      name: "Top Gainer",
    },
    {
      background: "#dd657c",
      borderRadius: "15px",
      backgroundImage: `url("https://app.zerion.io/src/pages/Explore/pages/Main/Categories/images/top-losers@2x.file-loader.8ff0fef056485e51a99155bbb79e33a1.png")`,
      backgroundPosition: "right bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "94px",
      name: "Top Losers",
    },
    {
      background: "#4ac3c7",
      borderRadius: "15px",
      backgroundImage: `url("https://app.zerion.io/src/pages/Explore/pages/Main/Categories/images/market@2x.file-loader.21b3514b9cf23fd8b6995f8389098c26.png")`,
      backgroundPosition: "right bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "94px",
      name: "Market",
    },
    {
      background: "#e9a54e",
      borderRadius: "15px",
      backgroundImage: `url("https://app.zerion.io/src/pages/Explore/pages/Main/Categories/images/pools@2x.file-loader.f51a21934aee0de6e36a6b6befc2911c.png")`,
      backgroundPosition: "right bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "94px",
      name: "Pools",
    },
  ]);
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
        <Row gutter={[16, 16]}>
          {datas.map((data) => {
              return (
                <Col
                  xs={{ span: 12 }}
                  sm={{ span: 8 }}
                  md={{ span: 6 }}
                  lg={{ span: 6 }}
                >
                  <Card bordered={false} style={data} hoverable>
                    <span style={{ fontWeight: "bold", color: "#fff" }}>
                      {data.name}
                    </span>
                  </Card>
                </Col>
              );
            })}
          
        </Row>
      </div>
    </>
  );
}
