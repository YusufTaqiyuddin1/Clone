import Header from "../components/Header/index";
import SideBar from "../components/SideBar/index";
import Main from "../components/Content/index";
// import FooterContent from "../components/Footer/index";

import { Layout } from "antd";
import "./index.css";

export default function Home(){
    return (
      <Layout>
        <SideBar/>
        <Layout className="layout">
          <Header />
          <Main />
          {/* <FooterContent /> */}
        </Layout>
      </Layout>
    );
}