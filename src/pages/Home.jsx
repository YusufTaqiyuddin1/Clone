import Header from "../components/Header/index";
import SideBar from "../components/SideBar/index";
import Main from "../components/Content/index";
// import FooterContent from "../components/Footer/index";

import { Layout } from "antd";

export default function Home(){
    return (
      <Layout>
        <SideBar />
        <Layout style={{ backgroundColor: "#16161a" }}>
          <Header />
          <Main />
          {/* <FooterContent /> */}
        </Layout>
      </Layout>
    );
}