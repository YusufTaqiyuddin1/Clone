import React from "react";
import { Layout, Typography, Space, Button} from "antd";
import "./index.css";
import { Link } from "react-router-dom";

const {Content} = Layout;
const { Title, Text } = Typography;

const Favorite = () =>{
    return (
      <Content>
        <div className="site-layout-background" style={{ minHeight: "912px" }}>
          <Typography.Title
            level={1}
            style={{
              margin: "24px 0",
            }}
          >
            Favorites
          </Typography.Title>
          <div
            className="space-align-container"
            style={{ textAlign: "center" }}
          >
            <div className="space-align-block">
              <Space direction="vertical" align="center" size="middle">
                <img
                  src="https://app.zerion.io/src/features/favourite-assets/assets/star-emoji@2x.b252e422336e41cec6ffae2461c96e1c.png"
                  alt="Favorite"
                />
                <Title level={3}>No favorite assets</Title>
                <Text strong>
                  Make the most out of Zerion by watching
                  <br />
                  assets you’re interested in
                </Text>
                <Button type="primary" size="large">
                  <Link to="../explore">Add asset</Link>
                </Button>
              </Space>
            </div>
          </div>
        </div>
      </Content>
    );
}

export default Favorite;