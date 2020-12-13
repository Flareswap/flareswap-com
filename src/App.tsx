import React from "react";
import { PageHeader, Row, Button, Col } from "antd";

function App() {
  return (
    <div>
      <PageHeader
        ghost={false}
        title="Flareswap"
        subTitle="- decentralized cryptocurrency exchange on the Flare Network."
        extra={[
          <Button key="1" type="text">
            Community
          </Button>,
          <Button key="2" type="text">
            About
          </Button>,
          <Button key="3" type="primary">
            Launch App
          </Button>,
        ]}
      ></PageHeader>
      <Row justify="center" align="middle">
        <Col className="flex flex--flex-direction--column flex--justify-content--center flex--align-items--center text--align--center margin--top--5 ">
          <p>
            Flareswap is a decentralized cryptocurrency exchange which
            facilitates automated transactions between <br />
            the Flare ecosystem and established cryptocurrencies
            through the use of smart contracts.
          </p>
          <Button type="primary">Launch App</Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
