import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <Row justify="center" align="middle">
      <Col className="flex flex--flex-direction--column flex--justify-content--center flex--align-items--center text--align--center margin--top--5 ">
        <p>
          Flareswap is a decentralized cryptocurrency exchange which facilitates
          automated transactions between <br />
          the Flare ecosystem and established cryptocurrencies through the use
          of smart contracts.
        </p>
        <Link to="/trade">
          <Button key="3" type="primary">
            Launch App
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
