import React from "react";
import { PageHeader, Button } from "antd";

function App() {
  return (
    <div>
      <PageHeader
        ghost={false}
        title="Flareswap"
        subTitle="Decentralized cryptocurrency exchange on Flare Network."
        extra={[
          <Button key="2">Products</Button>,
          <Button key="2">Governance</Button>,
          <Button key="2">Community</Button>,
          <Button key="2">About</Button>,
          <Button key="1" type="primary">
            Launch App
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
}

export default App;
