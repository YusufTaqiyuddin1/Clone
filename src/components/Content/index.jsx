import React from "react";
import { Layout } from "antd";

import Header from "./Page1/Header";
import Content1 from "./Page1/Content-1";
import Content2 from "./Page1/Content-2";
import Content3 from "./Page1/Content-3";
import Content4 from "./Page1/Content-4";
import Content5 from "./Page1/Content-5";
import Hastag from "./Page1/Hastag";

import "./index.css";

const {Content} = Layout;

export default function Main() {

  return (
    <Content
    >
      <div
        className="site-layout-background"
      >
        <Header />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Content5 />
        <Hastag />
      </div>
    </Content>
  );
}
