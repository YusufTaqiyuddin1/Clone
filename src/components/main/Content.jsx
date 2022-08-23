import React from "react";
import { Layout } from "antd";

import Content1 from "../content/Content-1";
import Content2 from "../content/Content-2";

const {Content} = Layout;

export default function Main() {

  return (
    <Content
      style={{
        margin: "12px 200px",
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 1024,
        }}
      >
        <Content1 />
        <Content2 />
      </div>
    </Content>
  );
}
