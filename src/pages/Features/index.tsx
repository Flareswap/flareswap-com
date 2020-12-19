import React from "react";
import SwapCard from "../../components/SwapCard";
import StakeCard from "../../components/StakeCard";
import { SwapOutlined, RiseOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function Features() {
  return (
    <div className="flex flex--flex-direction--column flex--justify-content--center flex--align-items--center text--align--center margin--top--5">
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <SwapOutlined />
              Swap
            </span>
          }
          key="1"
        >
          <SwapCard />
        </TabPane>
        <TabPane
          tab={
            <span>
              <RiseOutlined />
              Stake
            </span>
          }
          key="2"
        >
          <StakeCard />
        </TabPane>
      </Tabs>
    </div>
  );
}
