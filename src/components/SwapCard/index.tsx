import React from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Input, Row, Select } from "antd";
const { Option, OptGroup } = Select;

const optionsCommon = ["ETH", "XRP", "FXRP", "FLR", "BCH", "BTC"];
const optionsAll = ["AAVE", "UNI", "SUSHI", "SNX", "YFI"];

const noTokenFoundMessage = <div>No token found, try another token list.</div>;

export default function SwapCard() {
  return (
    <div className="swapcard">
      <p>From</p>
      <Input.Group size="large">
        <Row gutter={8}>
          <Col span={7}>
            <Input defaultValue="0" />
          </Col>
          <Col span={17}>
            <Select
              defaultValue="XRP"
              showSearch
              notFoundContent={noTokenFoundMessage}
              size="large"
              style={{ width: "100%" }}
              onChange={() => console.log("Change")}
            >
              <OptGroup label="Popular">
                {optionsCommon.map((d) => (
                  <Option key={d} value={d}>
                    {d}
                  </Option>
                ))}
              </OptGroup>
              <OptGroup label="All">
                {optionsAll.map((d) => (
                  <Option key={d} value={d}>
                    {d}
                  </Option>
                ))}
              </OptGroup>
            </Select>
          </Col>
        </Row>
      </Input.Group>
      <Divider plain>
        <ArrowDownOutlined />
      </Divider>
      <Input.Group size="large">
        <Row gutter={8}>
          <Col span={7}>
            <Input defaultValue="0" />
          </Col>
          <Col span={17}>
            <Select
              defaultValue="AAVE"
              showSearch
              notFoundContent={noTokenFoundMessage}
              size="large"
              style={{ width: "100%" }}
              onChange={() => console.log("Change")}
            >
              <OptGroup label="Popular">
                {optionsCommon.map((d) => (
                  <Option key={d} value={d}>
                    {d}
                  </Option>
                ))}
              </OptGroup>
              <OptGroup label="All">
                {optionsAll.map((d) => (
                  <Option key={d} value={d}>
                    {d}
                  </Option>
                ))}
              </OptGroup>
            </Select>
          </Col>
        </Row>
      </Input.Group>
      <Button type="primary" block className="margin--top--2">
        Connect wallet
      </Button>
    </div>
  );
}
