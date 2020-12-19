import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { PoweroffOutlined, FireOutlined } from "@ant-design/icons";

export default function Start() {
  return (
    <Row justify="center" align="middle">
      <Col className="flex flex--flex-direction--column flex--justify-content--center flex--align-items--center text--align--center margin--top--5">
        <FireOutlined style={{ fontSize: 200, color: "#00C281" }} />
        <p className="margin--top--3">
          Flareswap is a decentralized cryptocurrency exchange <br />
          operating on Flare Network through the use of smart contracts.
        </p>
        <Link to="/features" className="margin--top--1">
          <Button key="1" type="primary" shape="round" size="large" icon={<PoweroffOutlined />}>
            Launch App
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
