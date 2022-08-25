import { Card, Col, Row, Divider, Avatar, Typography, Space  } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import React, {useState} from "react";
const {Title } = Typography;

const style = {
  background: "#0092ff",
  padding: "8px 0",
};

export default function Content1(){
      const [datas, setData] = useState([
        {
          id: "1",
          name: "DeFi",
          icon: "https://token-icons.s3.amazonaws.com/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png",
        },
        {
          id: "2",
          name: "Metaverse",
          icon: "https://token-icons.s3.amazonaws.com/0x72e364f2abdc788b7e918bc238b21f109cd634d7.png",
        },
        {
          id: "3",
          name: "Crypto",
          icon: "https://token-icons.s3.amazonaws.com/0x16c52ceece2ed57dad87319d91b5e3637d50afa4.png",
        },
        {
          id: "1",
          name: "Pulse",
          icon: "https://token-icons.s3.amazonaws.com/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png",
        },
        {
          id: "2",
          name: "Metaverse",
          icon: "https://token-icons.s3.amazonaws.com/0x72e364f2abdc788b7e918bc238b21f109cd634d7.png",
        },
        {
          id: "3",
          name: "total",
          icon: "https://token-icons.s3.amazonaws.com/0x16c52ceece2ed57dad87319d91b5e3637d50afa4.png",
        },
      ]);

    return (
      <div
        className="site-card-wrapper"
        style={{ maxWidth: "450px", margin: "auto", textAlign: "center" }}
      >
        <Row gutter={8}>
          {datas.map((data) => {
            return (
              <>
                <Space size={16} style={{ flex: "auto" }}>
                  <Col span={6}>
                    <Avatar size={64} src={data.icon} />
                    {data.name}
                  </Col>
                </Space>
              </>
            );
          })}
        </Row>
      </div>
    );
}
