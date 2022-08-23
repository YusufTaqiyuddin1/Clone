import Header from "../components/main/Header";
import SideBar from "../components/main/SideBar";
import Main from "../components/main/Content";
import FooterContent from "../components/main/Footer";

import { Layout } from "antd";

export default function Home(){
    return (
      <Layout>
        <SideBar />
        <Layout>
          <Header />
          <Main />
          <FooterContent />
        </Layout>
      </Layout>
    );
}