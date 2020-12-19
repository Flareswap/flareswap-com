import React from "react";
import { Button, Col, Input, Row, Select } from "antd";
const { Option, OptGroup } = Select;

const optionsAll = [
  "ETH",
  "XRP",
  "FXRP",
  "FLR",
  "BCH",
  "BTC",
  "AAVE",
  "UNI",
  "SUSHI",
  "SNX",
  "YFI",
];

const noTokenFoundMessage = <div>No token found, try another token list.</div>;

export default function StakeCard() {
  return (
    <div className="stakecard">
      <Input.Group size="large">
        <Row gutter={8}>
          <Col span={7}>
            <Input defaultValue="0" />
          </Col>
          <Col span={17}>
            <Select
              defaultValue="FLR"
              showSearch
              notFoundContent={noTokenFoundMessage}
              size="large"
              style={{ width: "100%" }}
              onChange={() => console.log("Change")}
            >
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
      <Button type="primary" shape="round" size="large" block className="margin--top--2">
        Connect wallet
      </Button>
    </div>
  );
}
