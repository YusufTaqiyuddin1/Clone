import Header from "../components/Header/index";
import SideBar from "../components/SideBar/index";
import Main from "../components/Content/index";
import { Outlet, Link } from "react-router-dom";
// import FooterContent from "../components/Footer/index";

import { Layout } from "antd";
import "./index.css";

const Home = () => {
  return (
    <Layout>
      <SideBar />
      <Layout className="layout">
        <Header />
        <Outlet />
      </Layout>
    </Layout>
  );
}

export default Home;
