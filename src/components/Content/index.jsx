import React from "react";
import { Layout } from "antd";

import Content1 from "./Page1/Content-1";
import Content2 from "./Page1/Content-2";

const {Content} = Layout;

export default function Main() {

  return (
    <Content
      style={{
        // margin: "12px 200px",
        maxWidth: "960px",
        minWidth: "960px",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 1024,
          backgroundColor: "#16161a",
        }}
      >
        <Content1 />
        <Content2 />
      </div>
    </Content>
  );
}
