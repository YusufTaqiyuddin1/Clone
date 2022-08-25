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
  Button,
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
      tag: "DeFi Pulse",
    },
    {
      id: "2",
      tag: "Metaverse Index",
    },
    {
      id: "3",
      tag: "total Crypto Market Cap",
    },
    {
      id: "4",
      tag: "Market Cap",
    },
    {
      id: "5",
      tag: "total Cap",
    },
    {
      id: "6",
      tag: "total Crypto Cap",
    },
    {
      id: "7",
      tag: "total Crypto Cap",
    },
    {
      id: "8",
      tag: "total Cap",
    },
    {
      id: "9",
      tag: "Market Cap",
    },
    {
      id: "10",
      tag: "DeFi Pulse",
    },
    {
      id: "11",
      tag: "Metaverse Index",
    },
    {
      id: "12",
      tag: "total Crypto Market Cap",
    },
    {
      id: "13",
      tag: "DeFi Pulse",
    },
    {
      id: "14",
      tag: "Metaverse Index",
    },
    {
      id: "15",
      tag: "total Crypto Market Cap",
    },
    {
      id: "16",
      tag: "Market Cap",
    },
    {
      id: "17",
      tag: "total Cap",
    },
    {
      id: "18",
      tag: "total Crypto Cap",
    },
    {
      id: "19",
      tag: "total Crypto Cap",
    },
    {
      id: "20",
      tag: "total Cap",
    },
    {
      id: "21",
      tag: "Market Cap",
    },
    {
      id: "22",
      tag: "DeFi Pulse",
    },
    {
      id: "23",
      tag: "Metaverse Index",
    },
    {
      id: "24",
      tag: "total Crypto Market Cap",
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
        All Tags
      </Typography.Title>

      <div className="site-card-wrapper" style={{ marginTop: "24px", marginBottom: "200px"}}>
        {datas.map((data) =>{
            return (
              <Button
                type="link"
                style={{
                  backgroundColor: "transparent",
                  margin: "8px",
                  borderRadius: "8px",
                  color: "#fff",
                  border: "1px solid #70737b",
                  fontWeight: "700",
                }}
              >
                <span
                  style={{
                    fontWeight: "900",
                    color: "blue",
                    marginRight: "4px",
                  }}
                >
                  #
                </span>
                {data.tag}
              </Button>
            );
        })}
      </div>
    </>
  );
}
